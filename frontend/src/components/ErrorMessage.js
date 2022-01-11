import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = ({children}) => {
    return (
        <Alert variant='danger' style={{ fontSize: 20 }}>
            <strong>{children}</strong>
        </Alert>
    )
}

export default ErrorMessage
