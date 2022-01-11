import { React, useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/noteActions";
const axios = require("axios");

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { notes, loading, error } = noteList;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: noteCreateSuccess } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: noteUpdateSuccess } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: noteDeleteError,
    success: noteDeleteSuccess,
  } = noteDelete;

  const history = useHistory();

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) history.push("/");
  }, [
    dispatch,
    noteCreateSuccess,
    history,
    userInfo,
    noteUpdateSuccess,
    noteDeleteSuccess,
    search,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <MainScreen title={`Welcome back ${userInfo?.name}`}>
      {loadingDelete && <Loading />}
      {loading && <Loading />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {noteDeleteError && <ErrorMessage>{noteDeleteError}</ErrorMessage>}
      <Link to="/createtodo">
        <Button size="lg" style={{ marginLeft: 10, marginBottom: 6 }}>
          Create New Todo
        </Button>
      </Link>

      <Accordion defaultActiveKey="">
        {notes
          ?.filter((n) => n.title.toLowerCase().includes(search.toLowerCase()))
          .map((note) => {
            return (
              <Accordion.Item eventKey={note._id}>
                <Card style={{ margin: 10 }}>
                  <Card.Header style={{ display: "flex" }}>
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 30,
                      }}
                    >
                      <Accordion.Header> {note.title}</Accordion.Header>
                    </span>

                    <div>
                      <Button href={`/todo/${note._id}`}>Edit</Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Header>

                  <Accordion.Body>
                    <Card.Body>
                      <h4>
                        <Badge bg="success">Category - {note.category}</Badge>
                      </h4>
                      <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                          <blockquote className="blockquote mb-0">
                            <p>{note.content}</p>
                            <footer className="blockquote-footer">
                              Created On - {note.createdAt.substring(0, 10)}
                            </footer>
                          </blockquote>
                        </Card.Body>
                      </Card>
                    </Card.Body>
                  </Accordion.Body>
                </Card>
              </Accordion.Item>
            );
          })}
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
