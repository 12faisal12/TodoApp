import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
import './LoginPage.css'
import axios from 'axios'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'

const LoginPage = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
   
    const dispatch = useDispatch()
   
    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin
    
    const submitHandler = async(e) => {
        e.preventDefault()
        dispatch(login(email,password))
    }

    useEffect(() => {
        if (userInfo)
            history.push('/mytodos')
    },[history,userInfo])
    
    return (
        <MainScreen title='LOGIN'>
            <div className='loginContainer'>
                {error && (<ErrorMessage>{error}</ErrorMessage>)}
                {loading && <Loading/>}
                <Form onSubmit = {(e)=>submitHandler(e)}>
                    <Form.Group controlId = 'formBasicEmail'>
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} onChange={e=>setEmail(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group id='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' value={password} onChange={e=>setPassword(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary' className='m-10'>
                        Submit
                    </Button>
                </Form>

                <Row>
                    <Col>
                        New Customer? <Link to='/register'>Register Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}

export default LoginPage
