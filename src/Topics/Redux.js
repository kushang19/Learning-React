import React from "react";
import Navbar from "../components/Navbar";
import Shop from "../components/Shop";

function Redux() {
  return (
      <>
      <Navbar/>
      <div className="container">
        <Shop />
      </div>
      </>
  );
}

export default Redux;


/*

React-redux is a state management tool which makes it easier to pass these states from one component to another irrespective of their position in the component tree and hence prevents the complexity of the application. As the number of components in our application increases it becomes difficult to pass state as props to multiple components. To overcome this situation we use react-redux

====

What are benefits of using react-redux?
They are several benfits of using react-redux such as:

1. It provides centralized state management i.e. a single store for whole application
2. It optimizes performance as it prevents re-rendering of component
3. Makes the process of debugging easier
4. Since it offers persistent state management therefore storing data for long times become easier

====

Explain the core components of react-redux?
There are four fundamental concepts of redux in react which decide how the data will flow through components

Redux Store: It is an object that holds the application state
Action Creators: These are unctions that return actions (objects)
Actions: Actions are simple objects which conventionally have two properties- type and payload 
Reducers(Logic): Reducers are pure functions that update the state of the application in response to actions

*/