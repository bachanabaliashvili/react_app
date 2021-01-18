import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import News from './components/News';
import { Students } from './components/Students';
import UserPage from './components/UserPage';
import Login from './components/Login';

function App() {
  const [students, setStudents] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState(undefined);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(result => {
        setStudents(result);
      });

      fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(result => {
        setPosts(result);
      });

  }, []);

  return (
    <div className="App">
      <Header isRegistered = {isRegistered} cb={ (st) => { setIsRegistered(st); } } />
      <Switch>
        <Route exact path='/' component={News} />
        <Route exact path='/students' component={() => <Students students={students}  posts={posts}  />} />
        {
          isRegistered 
          ? 
            <Route 
              exact 
              path='/userPage'
              render={
                (props) => (
                  <UserPage 
                    userName={userName}
                  />
                )
              } 
            />
           : 
            <Route 
              exact 
              path='/login' 
              render={
                (props) => (
                  <Login 
                    isRegistered = {isRegistered}
                    cb={ (st, userName) => { setIsRegistered(st); setUserName(userName); } }
                  />
                )
              } 
            />
        }
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
