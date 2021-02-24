import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Questions from 'pages/Questions'
import './App.css'

// REDUX
// Import store and wrap app with redux provider
// import store from './store'


function App() {

  const [allQuestions, setQuestions] = useState(
    [
      {
        question: "Qué significa !important",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        type: "Html"
      },
      {
        question: "Qué significa ES6?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        type: "Javascript"
      },
      {
        question: "Qué son los props?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        type: "React"
      }
    ]
  );

  const countQuestions = (filter) => {
    console.log("allQuestions!!", allQuestions);
    return allQuestions.filter(question => filter ? question.type === filter : question).length;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => (
              <Home
                total={countQuestions()}
                html={countQuestions('Html')}
                javascript={countQuestions('Javascript')}
                react={countQuestions('React')}></Home>
            )}
            />
            <Route path="/questions" render={(props) => (
              <Questions
                questions={allQuestions}></Questions>
            )}
            />
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
