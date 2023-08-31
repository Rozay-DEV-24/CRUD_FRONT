import React, { useState } from 'react';
import { Container, Input, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setUserSlice } from '../containers/usersSlice';
import { CREATE_USER, UPDATE_USER_BY_ID } from './sagas/types';
import { nanoid } from 'nanoid';

const MyForm = () => {
  const user = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const handlechnage = (prop) => (event) => {
    dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
  };

  const handlesubmit = () => {
    // Check if any required fields are empty
    if (
      user.name.trim() === '' ||
      user.lname.trim() === '' ||
      user.stuId.trim() === '' ||
      user.email.trim() === '' ||
      user.phno.trim() === '' ||
      user.address.trim() === ''
    ) {
      setErrorMessage('Please fill in all the fields');
      return;
    }

    // Check if first name and last name have a minimum of 3 characters
    if (user.name.length < 3 || user.lname.length < 3) {
      setErrorMessage('First name and last name must have a minimum of 3 characters');
      return;
    }

    // Check if student ID contains only numbers
    const stuIdRegex = /^\d+$/;
    if (!stuIdRegex.test(user.stuId)) {
      setErrorMessage('Student ID should contain only numbers');
      return;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Check if phone number is valid (exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(user.phno)) {
      setErrorMessage('Please enter a valid 10-digit phone number');
      return;
    }
    // Check if address has a minimum of 5 characters
    if (user.address.length < 5) {
      setErrorMessage('Address must have a minimum of 5 characters');
      return;
    }

    // Proceed with form submission
    user.id===0? dispatch({type:CREATE_USER,user:{...user,id:Date.now()}}):dispatch({type:UPDATE_USER_BY_ID,user})
        dispatch(setUserSlice({
            id:0,
            name:'',
            lname:'',
            stuId:'',
            email:'',
            phno:'',
            address:'',
        }))

    setErrorMessage('');
  };

  return (
    <div>
      <h1>Add Student</h1>
      <Container
        className="container"
        style={{
          display: 'grid',
          auto: 0,
          border: '1px solid black',
          width: 'fit-content',
          alignItems: 'center',
        }}
      >
        
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}}  onChange={handlechnage('name')} placeholder='First Name' value={user.name} fullWidth></Input>
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}} className='llname' onChange={handlechnage('lname')} placeholder='Last Name' value={user.lname} fullWidth></Input>
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}} className='stuid' onChange={handlechnage('stuId')} placeholder='Student Id' value={user.stuId} fullWidth></Input>
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}} className='eemail' onChange={handlechnage('email')} placeholder='E-mail Id' value={user.email} fullWidth></Input>
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}} className='phno' onChange={handlechnage('phno')} placeholder='Phone no' value={user.phno} fullWidth></Input>
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}} className='address' onChange={handlechnage('address')} placeholder='Address' value={user.address} fullWidth></Input>
        {errorMessage && (
          <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>
            {errorMessage}
          </Typography>
        )}
        <Button
          style={{ height: '30px', width: '80px', margin: '20px 0px 20px 150px' }}
          className="btn"
          fullWidth
          variant="contained"
          onClick={handlesubmit}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default MyForm;