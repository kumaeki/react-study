import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import { Server } from './function/Server';

const data = [
    {
        col1: 'Hello',
        col2: 'World',
    },
    {
        col1: 'react-table',
        col2: 'rocks',
    },
    {
        col1: 'whatever',
        col2: 'you want',
    },
];
const columns = [
    { Header: 'Code', accesser: 'code' },
    { Header: 'Name', accesser: 'Name' },
    { Header: 'Cost', accesser: 'cost' },
    { Header: 'Share', accesser: 'Share' },
    { Header: 'Totoal', accesser: 'total' },
    { Header: 'CostAvarage', accesser: 'costAvarage' },
    { Header: 'PriceNow', accesser: 'priceNow' },
    { Header: 'Profit/Loss', accesser: 'profitloss' },
];
const Styles = styled.div`
    padding: 1rem;

    table {
        border-spacing: 0;
        border: 1px solid black;
        width: 100%;
        tr {
            :last-child {
                td {
                    border-bottom: 0;
                }
            }
        }

        th,
        td {
            margin: 0;
            padding: 0.5rem;
            border-bottom: 1px solid black;
            border-right: 1px solid black;

            :last-child {
                border-right: 0;
            }
        }
    }
`;

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export const DataTable = React.memo(() => {
    useEffect(() => {
        Server.FETCHALL();
    });

    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    );
    // const { data, selectedRowData, onRowSelected } = searchResultsProps;
    // const columns = React.useMemo(() => tableColumns, []);
    // const defaultColumn = React.useMemo(() => defaultColumnProperty, []);
    // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    //     {
    //         columns,
    //         data,
    //         defaultColumn,
    //     },
    //     useFlexLayout,
    //     useResizeColumns
    // );

    // return (
    //     <>
    //         <SectionTitle style={{ marginTop: '2rem' }}>環境案件検索結果</SectionTitle>
    //         <TableStyles theme={{ width: '1830px', overflow: 'scroll', thborderRight: 1 }}>
    //             <div {...getTableProps()} className="table">
    //                 <div>
    //                     {headerGroups.map((headerGroup, i) => (
    //                         <div key={`thead-tr-${i}`} {...headerGroup.getHeaderGroupProps()} className="tr">
    //                             {headerGroup.headers.map((column, i) => {
    //                                 return (
    //                                     <div key={`thead-tr-th-${i}`} {...column.getHeaderProps()} className="th">
    //                                         {column.render('Header')}
    //                                         {/* Use column.getResizerProps to hook up the events correctly */}
    //                                         {!column.disableResizing && (
    //                                             <div
    //                                                 {...column.getResizerProps()}
    //                                                 className={`resizer ${column.isResizing ? 'isResizing' : ''}`}
    //                                             />
    //                                         )}
    //                                     </div>
    //                                 );
    //                             })}
    //                         </div>
    //                     ))}
    //                 </div>

    //                 <div {...getTableBodyProps()} style={{ height: '330px' }}>
    //                     {rows.map((row, i) => {
    //                         prepareRow(row);
    //                         return (
    //                             <div key={`tbody-tr-${i}`} {...row.getRowProps()}>
    //                                 {row.cells.map((cell, j) => {
    //                                     let setClass = cell.value === '!' ? 'td tdCenter red' : 'td';
    //                                     console.log(selectedRowData, row.allCells[0].value, cell.value, row);
    //                                     const cssForSelect =
    //                                         selectedRowData === row.allCells[0].value ? ' trSelected' : ' trUnSelected';
    //                                     setClass = setClass + cssForSelect;
    //                                     //Scrollbar表示領域確保用カラムでtd非表示にするため
    //                                     if (typeof cell.value === 'undefined') {
    //                                         return null;
    //                                     }
    //                                     return (
    //                                         <OverflowTooltip
    //                                             cellProps={cell.getCellProps()}
    //                                             value={cell.value}
    //                                             cssClass={setClass}
    //                                             key={`tbody-tr-td-${j}`}
    //                                             onClick={() => {
    //                                                 onRowSelected(row.allCells[0].value);
    //                                             }}
    //                                         />
    //                                     );
    //                                 })}
    //                             </div>
    //                         );
    //                     })}
    //                 </div>
    //             </div>
    //         </TableStyles>
    //     </>
    // );
});
