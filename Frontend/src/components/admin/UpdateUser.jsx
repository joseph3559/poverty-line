import React, {useEffect, useState} from 'react';
import { Form, Input, Button} from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function UpdateUser() {
    const navigate = useNavigate;
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [ID, setID] = useState(null)

    console.log(name);
    console.log(email);

    //connecting with API and sending user's data
    const sendDataToApi = () => {
        axios.put(`users/${ID}`, {
          name,
          username,
          email            
        }).then(() => navigate.push('./usersdata'))
    }
  // Setting the data from the local storage to the form ready for update
  useEffect(() => {
    setName(localStorage.getItem('name'));
    setUsername(localStorage.getItem('username'));
    setEmail(localStorage.getItem('email'));
    setID(localStorage.getItem('ID'))
  }, []);


  return (
    <div>
        <div className='reviews_container'>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                          id='form-input-control-name'
                          control={ Input }
                          value = {name}
                          label='Name'
                          name='name'
                          onChange = {(e)=> setName(e.target.value)}
            />
              <Form.Field
                            id='form-input-control-username'
                            control={ Input }
                            value = {username}
                            label='Username'
                            name='username'
                            onChange = {(e)=> setUsername(e.target.value)}
                      />
                        <Form.Field
                          id='form-input-control-error-email'
                          control={ Input }
                          value = {email}
                          label='Email'
                          name='email'
                          onChange = {(e)=> setEmail(e.target.value)}
                        />
                        <Form.Field
                          id='form-button-control-public'
                          control={Button}
                          content='Update'
                          type='submit'
                          onClick = {sendDataToApi}
                      />
                    </Form.Group>
              </Form>
              
          </div>
      </div>     
    
  )
}

export default UpdateUser;
