import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    const [newItem, setNewItem] = useState('');

    const fetchData = () => {
        axios.get('http://localhost:5000/prueba')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/prueba', { item: newItem })
            .then(response => {
                console.log('Data posted:', response.data);
                fetchData(); // Fetch updated data after posting
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };

    return (
        <div>
            <h1>Data from MySQL</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add new item"
                />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
