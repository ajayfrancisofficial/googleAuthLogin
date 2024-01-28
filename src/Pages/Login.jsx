import React, { useState } from 'react'
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function Login() {
    const [inputs, setInputs] = useState({ email: "", password: "" })
    const [emailValid, setemailValid] = useState(false)
    const navigate = useNavigate()

    const setData = (e) => {
        const { name, value } = e.target
        if (name == 'email') {
            if (value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)) { setemailValid(false) }
            else {
                setemailValid(true)
            }
        }


        setemailValid && setInputs({ ...inputs, [name]: value })

    }

    console.log(inputs);
    return (
        <div className='m-5'>

            <Row>
                <Col lg={8}>
                    <div className='container  '>
                        <h1 className='text-secondary'>Login</h1>
                        <h3 className='display-1 text-secondary'>Form</h3>
                        <h5 className=' text-secondary'>with</h5>
                        <h1 className='text-success'>Google</h1>
                        <h3 className='display-1 text-success'>Authentication.</h3>
                        <p className=' text-secondary'>(This project focuses only on google authentication)</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <Container className='w-75'>
                        <div className='border text-center rounded ' style={{ height: "500px" }}>

                            <h1 className=' m-5'>Log in</h1>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="m-3 w-75 ">
                                <Form.Control onChange={(e) => { setData(e) }} type="email" name='email' placeholder="name@example.com" />
                            </FloatingLabel>
                            {emailValid && <p className='text-danger'>Invalid email</p>}

                            <FloatingLabel controlId="floatingPassword" label="Password" className="m-3 w-75 ">
                                <Form.Control onChange={(e) => { setData(e) }} name='password' type="password" placeholder="Password" />
                            </FloatingLabel>
                            {(!emailValid && inputs.email) && <Link to={'/home'} className='btn btn-success '>Login</Link>}
                            <p className='m-4'>OR</p>
                        <div className='m-3 '>
                                <GoogleOAuthProvider  clientId="604591960034-f2nhsj5k4bkf23aat3otode9h9gcimo8.apps.googleusercontent.com">
                                    <GoogleLogin shape='pill' size='large' width={'100px'}
                                        onSuccess={credentialResponse => {
                                            console.log(credentialResponse)
                                            navigate("/home")
                                        }}
                                        onError={() => {
                                            console.log('Login Failed')
                                        }}
                                    />
                                </GoogleOAuthProvider>
    
                        </div>
                        </div>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default Login