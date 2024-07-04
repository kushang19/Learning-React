import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Learning React</h1>
      <div className="my-2">
        <a href='https://react.dev/' target='_blank'>React Dev Official</a>
      </div>
      <div className="my-2">
        <a href='https://dev.to/frontendengineer/10-reactjs-coding-exercises-with-codepen-exercise-and-solution--22k7' target='_blank'>React Coding Challange</a>
      </div>
      <div className="my-2">
        <a className="my-2" href='https://blog.imocha.io/react-coding-challenges' target='_blank'>15 React Coding Tasks</a>
      </div>
      <h4>We can improve our react code by following these practices:<br/> Using binding functions in constructors.<br/> Eliminating the use of inline attributes as they slow the process of loading.<br/> Avoiding extra tags by using React fragments.<br/> Lazy loading.</h4>
    </div>
  )
}

export default Home
