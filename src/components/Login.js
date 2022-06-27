import styled from 'styled-components'
import React from 'react'
import {auth, provider} from '../firebase'

function Login(props) {

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result)=>{
      const newUser = {
        name: result.user.displayName,
        photo: result.user.photoURL,
      }
      localStorage.setItem('user', JSON.stringify(newUser));
      props.setUser(newUser);
    })
    .catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <Container>
      <Content>
        <SlackImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" />
        <h1>SIGN INTO SLACK</h1>
        <SignInButton onClick={()=>signIn()}>Sign In With Google</SignInButton>
      </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center

`

const Content = styled.div`
  background: white;
  padding: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`

const SlackImg = styled.img`
  height: 100px;
`

const SignInButton = styled.button`
  border: none;
  margin-top: 50px;
  height: 40px;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  padding: 10px;
  color: white;
  background: #0a8d48;
`