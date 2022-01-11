import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import Loading from "./components/Loading";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <Route path="/" component={LandingPage} exact></Route>
      <Route
        path="/mytodos"
        component={() => <MyNotes search={search} />}
        exact
      ></Route>
      <Route path="/login" component={LoginPage} exact></Route>
      <Route path="/signup" component={RegisterPage} exact></Route>
      <Route path="/createtodo" component={CreateNote} exact></Route>
      <Route path="/todo/:id" component={SingleNote} exact></Route>
      <Route path="/profile" component={ProfileScreen} exact></Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
