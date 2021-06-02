import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataList: [] };
    }

    searchData = () => {
        const url = 'http://127.0.0.1:8081/searchFile';
        const DateTimeFormat_mine = new Intl.DateTimeFormat('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        axios.get(url).then((data) => {
            const res = data.data.chart.result[0];
            const timestamp_mine = res.timestamp;
            const close_mine = res.indicators.quote[0].close;
            const len = timestamp_mine.length;
            const data_mine = [len];

            for (let index = 0; index < len; index++) {
                var date_mine = DateTimeFormat_mine.format(timestamp_mine[index] * 1000);
                data_mine[index] = date_mine + ' : ' + close_mine[index];
            }
            this.setState({ dataList: data_mine });
        });
    };

    getData = (list) => {
        const dataList = list.map((data, index) => {
            return <li key={index}>{data}</li>;
        });
        return <ul>{dataList}</ul>;
    };

    render() {
        return (
            <div>
                <button onClick={this.searchData}>search</button>
                {this.getData(this.state.dataList)}
            </div>
        );
    }
}

export default App;
