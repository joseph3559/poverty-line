import React, {useEffect, useState} from 'react';
import "./UsersData.css"
import {Button, Table } from 'semantic-ui-react'
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

function UsersData() { 
    const [dataFromApi, setDataFromApi] = useState([]);
    
    // useEffect Loads data when component is started or loaded
    useEffect(() => {
        axios.get('/users')
        .then((loadData) => setDataFromApi(loadData.data))
    }, [])

    // This will connect with local storage based on the id of each item
    const setData = (id, name, username, email) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('name', name)
        localStorage.setItem('username', username)
        localStorage.setItem('email', email)
    }

    const loadData = () => {
        axios.get('/users')
        .then((loadData) => setDataFromApi(loadData.data))
    }
    // This function will delete items based on each item id
    const onDelete = (id) => {
        axios.delete(`/users/${id}`)
            .then(() => {
                loadData();
        })

    }

    return (
    <div>
        <div className='read_container'>              
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell >Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                    <Table.Body>
                        {/* This map function displays loaded data to the actual table on the site */}
                        { dataFromApi.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{data.name}</Table.Cell>
                                    <Table.Cell>{data.username}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell className='btn-delete-cell'>
                                        <Link to = '/updateuser'>
                                            <Button color='blue' onClick={()=>setData(data.id, data.name, data.username, data.email) } >Update</Button>
                                        </Link>                                        
                                    </Table.Cell>
                                    <Table.Cell>                                
                                            <Button color='red' onClick={ () => onDelete(data.id) }>Delete</Button>                                        
                                    </Table.Cell>                    
                                </Table.Row> 
                            )
                        })}                             
                </Table.Body>
            </Table>
            </div>
            
            <div>
                
            </div>
    </div>
    
  )
}

export default UsersData;