import React from "react";
import Home from "./components/Home";
import ListItems from "./Topics/ListItems";
import Redux from "./Topics/Redux";
import UseRef from "./Topics/UseRef";
import UseMemo from "./Topics/UseMemo";
import Axios from "./Topics/Axios";
import UseEffect from "./Topics/UseEffect";
import ChildToParent from "./Topics/ChildToParent";
import UserRegistrationForm from "./Topics/UserRegistrationForm";
import CustomComponent from "./components/CustomComponent";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import MainNav from "./components/MainNav";
import ToDoList from "./components/ToDoList";


function App() {
  return (
      <div>
        <Router>
          <MainNav />
          <div style={{maxWidth: '900px', margin:'20px auto', padding: '20px'}}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/lits-items" element={<ListItems />} />
            <Route exact path="/redux" element={<Redux />} />
            <Route exact path="/use-ref" element={<UseRef />} />
            <Route exact path="/use-memo" element={<UseMemo />} />
            <Route exact path="/axios" element={<Axios/>} />
            <Route exact path="/use-effect" element={<UseEffect/>} />
            <Route exact path="/child-to-parent" element={<ChildToParent />} />
            <Route exact path="/user-registration-form" element={<UserRegistrationForm />} />
            <Route exact path="/user-registration-form" element={<UserRegistrationForm />} />
            <Route exact path="/custom-component" element={<CustomComponent />} />
            <Route exact path="/to-do-list" element={<ToDoList/>} />
            
          </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;


