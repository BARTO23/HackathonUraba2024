import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetUsers = () => {

    const [data, setData] = useState([]);
    const [newItem, setNewItem] = useState('');

    const fetchData = () => {
        axios.get('http://localhost:5000/get_users')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:5000/get_users', { item: newItem })
    //         .then(response => {
    //             console.log('Data posted:', response.data);
    //             fetchData(); // Fetch updated data after posting
    //         })
    //         .catch(error => {
    //             console.error('Error posting data:', error);
    //         });
    // };


    useEffect(() => {
        fetchData();
    }, []);

    // fetchData();
    // console.log(data);
    

    return (
         <div>
            <h1>Users</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.documento}</li>
                ))}
            </ul>
        </div>
    );
}

export default GetUsers;
