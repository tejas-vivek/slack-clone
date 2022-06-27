import React, { useEffect, useState } from 'react'
import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Chat from './components/Chat';
import Login from './components/Login';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db from './firebase'
import {auth, provider} from './firebase';
import Home from './components/Home';


function App() {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  
  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return {id: doc.id, name: doc.data().name}
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(() => {
    getChannels();
  }, [])
  
  console.log("User in App State", user);

  return (
    <div className="App">
      <Router>
        {
          !user ?
          <Login setUser={setUser} />
          :
          <Container>
              <Header signOut={signOut} user={user}/>
              <Main>
                <Sidebar rooms={rooms} />
                <Routes>
                  <Route path="/room/:channelId" element={<Chat user={user}/>}>
                  </Route>
                  <Route path="/" element={<Home />}>
                  </Route>
                </Routes>
              </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px minmax(0, 1fr);
`
// const Header = styled.div`
// `

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`