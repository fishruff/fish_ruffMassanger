import "./App.css";
//components
import ContentProfile from "./components/Content/Profile/ContentProfile";
import ContentMessages from "./components/Content/Messager/ContentMessages";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar />
        <ContentMessages />
        <Route path="/messages" render={() => <ContentMessages />} />
        <Route path="/profile" render={() => <ContentProfile />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
