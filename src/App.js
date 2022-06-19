import React from 'react'
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

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar />
            <Routes>
              <Route path="/room" element={<Chat />}>
              </Route>
              <Route path="/" element={<Login />} >
              </Route>
            </Routes>
          </Main>
        </Container>
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