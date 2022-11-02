import React, {useEffect, useState} from 'react';
import "./UsersData.css"
import {Button, Table } from 'semantic-ui-react'
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

function UsersData() { 
    const [dataFromApi, setDataFromApi] = useState([]);
    
    // useEffect Loads data when component is started or loaded
    useEffect(() => {
        axios.get('/user_profiles')
        .then((loadData) => setDataFromApi(loadData.data))
    }, [])

    // This will connect with local storage based on the id of each item
    const setData = (id,
        firstname,
        middlename,
        lastname,
        email,
        gender,
        age,
        national_id,
        address,
        phone,
        county,
        estate,
        career_summary,
        experience_date,
        experience,
        education_date,
        education,
        skills_and_hobbies) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('firstname', firstname)
        localStorage.setItem('middlename', middlename)
        localStorage.setItem('lastname', lastname)
        localStorage.setItem('email', email)
        localStorage.setItem('gender', gender)
        localStorage.setItem('age', age)
        localStorage.setItem('national_id', national_id)
        localStorage.setItem('phone:', phone)
        localStorage.setItem('address:', address)
        localStorage.setItem('county', county)
        localStorage.setItem('estate', estate)
        localStorage.setItem('career_summary', career_summary)
        localStorage.setItem('experience_date', experience_date)
        localStorage.setItem('experience', experience)
        localStorage.setItem('education_date', education_date)
        localStorage.setItem('education', education)
        localStorage.setItem('skills_and_hobbies', skills_and_hobbies)
    }

    const loadData = () => {
        axios.get('/user_profiles')
        .then((loadData) => setDataFromApi(loadData.data))
    }
    // This function will delete items based on each item id
    const onDelete = (id) => {
        axios.delete(`/user_profiles/${id}`)
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
                        <Table.HeaderCell>First name</Table.HeaderCell>
                        <Table.HeaderCell>Middle Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>National ID</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>County</Table.HeaderCell>
                        <Table.HeaderCell>Estate</Table.HeaderCell>
                        <Table.HeaderCell>Career_summary</Table.HeaderCell>
                        <Table.HeaderCell>Experience_date</Table.HeaderCell>
                        <Table.HeaderCell>Experience</Table.HeaderCell>
                        <Table.HeaderCell>Education_date</Table.HeaderCell>
                        <Table.HeaderCell>Education</Table.HeaderCell>
                        <Table.HeaderCell>Skills and hobies</Table.HeaderCell>
                        {/* <Table.HeaderCell >Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell> */}
                    </Table.Row>
                </Table.Header>

                    <Table.Body>
                        {/* This map function displays loaded data to the actual table on the site */}
                        { dataFromApi.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{ data.firstname }</Table.Cell>
                                    <Table.Cell>{data.middlename }</Table.Cell>
                                    <Table.Cell>{data.lastname}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.gender}</Table.Cell>
                                    <Table.Cell>{data.age}</Table.Cell>
                                    <Table.Cell>{data.national_id}</Table.Cell>
                                    <Table.Cell>{data.address}</Table.Cell>
                                    <Table.Cell>{data.phone}</Table.Cell>
                                    <Table.Cell>{data.county}</Table.Cell>
                                    <Table.Cell>{data.estate }</Table.Cell>
                                    <Table.Cell>{data.career_summary}</Table.Cell>
                                    <Table.Cell>{data.experience_date}</Table.Cell>
                                    <Table.Cell>{data.experience}</Table.Cell>
                                    <Table.Cell>{data.education_date }</Table.Cell>
                                    <Table.Cell>{data.education}</Table.Cell>
                                    <Table.Cell>{data.skills_and_hobbies}</Table.Cell>
                                    {/* <Table.Cell className='btn-delete-cell'>
                                        <Link to = '/updateuserprofiles'>
                                            <Button color='blue' onClick={()=>setData(data.id, data.firstname, data.middlename, data.lastname, data.email, data.gender, data.age, data.national_id, data.address, data.phone, data.county, data.estate, data.career_summary, data.name, data.username, data.email, data.experience_date, data.experience, data.education_date, data.education, data.skills_and_hobbies) }>Update</Button>
                                        </Link>                                        
                                    </Table.Cell>
                                    <Table.Cell>                                
                                            <Button color='red' onClick={ () => onDelete(data.id) }>Delete</Button>                                        
                                    </Table.Cell>                     */}
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