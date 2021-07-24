import axios from 'axios';

export const Server = {
    INSERT_FILE: async (code, cost, share, currency) => {
        const urlSearch = `http://127.0.0.1:8081/searchYahoo?code=${code}`;
        const error = axios.get(urlSearch).then((res) => {
            console.log(res);
            return res.data.chart.error;
        });

        if (error) {
            alert('Code do not exsit! please check the code.');
            return;
        }

        const urlInsert = 'http://127.0.0.1:8081/insert';
        const param = { code: code, cost: cost, share: share, currency: currency };
        const insertResult = axios.post(urlInsert, param).then((res) => {
            return res;
        });
        if (insertResult.err !== 'null') alert('insert complete!');
        else alert(insertResult.err);
    },
    FETCHALL: async () => {
        const urlInsert = 'http://127.0.0.1:8081/getAll';
        const result = axios.get(urlInsert).then((res) => {
            console.log(res);
            return res.data.chart.error;
        });
    },
};
