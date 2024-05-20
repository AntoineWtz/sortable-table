import React, { useState } from 'react';
import './SortableTable.css';

const data = [
    { id: 1, name: 'Apple', quantity: 10, date: '2023-01-01' },
    { id: 2, name: 'Banana', quantity: 5, date: '2023-01-05' },
    { id: 3, name: 'Cherry', quantity: 20, date: '2023-01-03' },
    { id: 4, name: 'Date', quantity: 7, date: '2023-01-04' },
    { id: 5, name: 'Elderberry', quantity: 12, date: '2023-01-02' },
    { id: 6, name: 'Fig', quantity: 3, date: '2023-01-06' },
    { id: 7, name: 'Grape', quantity: 15, date: '2023-01-07' },
    { id: 8, name: 'Honeydew', quantity: 8, date: '2023-01-08' },
    { id: 9, name: 'Kiwi', quantity: 9, date: '2023-01-09' },
    { id: 10, name: 'Lemon', quantity: 6, date: '2023-01-10' },
    { id: 11, name: 'Mango', quantity: 11, date: '2023-01-11' },
    { id: 12, name: 'Nectarine', quantity: 4, date: '2023-01-12' },
    { id: 13, name: 'Orange', quantity: 13, date: '2023-01-13' },
    { id: 14, name: 'Peach', quantity: 2, date: '2023-01-14' },
    { id: 15, name: 'Quince', quantity: 14, date: '2023-01-15' },
    { id: 16, name: 'Raspberry', quantity: 16, date: '2023-01-16' },
    { id: 17, name: 'Strawberry', quantity: 17, date: '2023-01-17' },
    { id: 18, name: 'Tangerine', quantity: 18, date: '2023-01-18' },
    { id: 19, name: 'Ugli fruit', quantity: 19, date: '2023-01-19' },
    { id: 20, name: 'Vanilla bean', quantity: 1, date: '2023-01-20' },
    { id: 21, name: 'Watermelon', quantity: 12, date: '2023-01-21' },
    { id: 22, name: 'Xigua', quantity: 0, date: '2023-01-22' },
    { id: 23, name: 'Yuzu', quantity: 1, date: '2023-01-23' },
    { id: 24, name: 'Zucchini', quantity: 6, date: '2023-01-24' },
];

const SortableTable = () => {
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

    const sortedData = React.useMemo(() => {
        let sortableItems = [...data];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <table className="sortable-table">
            <thead>
                <tr>
                    <th onClick={() => requestSort('id')}>ID</th>
                    <th onClick={() => requestSort('name')}>Name</th>
                    <th onClick={() => requestSort('quantity')}>Quantity</th>
                    <th onClick={() => requestSort('date')}>Date</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SortableTable;
