import React, { useEffect, useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
import MainScreen from '../../components/MainScreen'
import './RegisterPage.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { USER_REGISTER_FAIL } from '../../constants/userConstants'
import { register } from '../../actions/userActions'

const RegisterPage = ({history}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
  const [pic, setPic] = useState('')
  
  const dispatch = useDispatch()
  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister  
  
  useEffect (()=> {
  if (userInfo)
    history.push('/mytodos')
  },[history,userInfo])

    const postDetails = (pic) => {

    }

    const submitHandler = async(e) => {
        e.preventDefault()
        if (password != confirmPassword)
        {
          dispatch({ type: USER_REGISTER_FAIL })
          return
        }
        dispatch(register(name,email,password,pic))
    }
    
    return (
      <MainScreen title="REGISTER">
        <div className="loginContainer">
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {loading && <Loading/>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter a name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="pic">
              <Form.Label>Upload Profile Pic</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => postDetails(e.target.files[0])}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary" className="m-10">
              Register
            </Button>
          </Form>
        </div>
      </MainScreen>
    );
}

export default RegisterPage
