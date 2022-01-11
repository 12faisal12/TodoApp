import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { createNoteAction } from '../../actions/noteActions'
import MainScreen from '../../components/MainScreen'
import ErrorMessage from '../../components/ErrorMessage'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'

const CreateNote = ({ history }) => {
    const [title,setTitle] = useState()
    const [content,setContent] = useState()
    const [category, setCategory] = useState()
    
    const dispatch = useDispatch()
    const noteCreate = useSelector(state => state.noteCreate)
    const { loading, error } = noteCreate
    

    const resetHandler = () => {
        setTitle('')
        setContent('')
        setCategory('')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createNoteAction(title, content, category))
        if (!title || !category || !content) return
        resetHandler()
        history.push('/mynotes')
    }
    
    return (
      <MainScreen title="Create a Note">
        <Card>
          <Card.Header>Create a new Todo</Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="title"
                  value={title}
                  placheholder="Enter a title"
                  onChange={(e) => setTitle(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  type="content"
                  value={content}
                  placheholder="Enter content"
                  onChange={(e) => setContent(e.target.value)}
                ></Form.Control>
              </Form.Group>
              
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="content"
                  value={category}
                  placheholder="Enter the category"
                  onChange={(e) => setCategory(e.target.value)}
                ></Form.Control>
                        </Form.Group>
                        {loading && <Loading />}
                        <Button type='submit' variant='primary'>Create Todo</Button>
                        <Button className='mx-2' onClick = {resetHandler} variant='danger'>Reset fields</Button>
            </Form>
                </Card.Body>
                <Card.Footer>
                    Creating on {new Date().toLocaleDateString()}
                </Card.Footer>
        </Card>
      </MainScreen>
    );
}

export default CreateNote
