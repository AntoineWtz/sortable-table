import React from 'react';
import './App.css';
import SortableTable from './SortableTable';

function App() {
  return (
    <div className="App">
      <h1>Sortable Table Example</h1>
      <p>Click on the column headers to sort the table.</p>
      <SortableTable />
    </div>
  );
}

export default App;
