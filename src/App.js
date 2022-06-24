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


function App() {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState()
  
  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return {id: doc.id, name: doc.data().name}
      }))
    })
  }
  useEffect(() => {
    getChannels();
  }, [])
  
  console.log(rooms);

  return (
    <div className="App">
      <Router>
        {
          !user ?
          <Login />
          :
          <Container>
              <Header />
              <Main>
                <Sidebar rooms={rooms} />
                <Routes>
                  <Route path="/room" element={<Chat />}>
                  </Route>
                  <Route path="/" element={<Login />}>
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
  grid-template-rows: 40px auto;
`
// const Header = styled.div`
// `

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`