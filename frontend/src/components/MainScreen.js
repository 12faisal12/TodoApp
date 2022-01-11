import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './MainScreen.css'

const MainScreen = ({title,children}) => {
    return (
      <div className="mainback">
        <Container className="page">
          <Row>
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr/>
              </>
            )}
          </Row>
          {children}
        </Container>
      </div>
    );
}

export default MainScreen
