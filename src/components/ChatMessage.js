import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
  return (
    <Container>
        <UserAvatar>
            <img src="https://randomuser.me/api/portraits/men/41.jpg" />
        </UserAvatar>
        <MessageContent>
            <Name>
                Andrew Robertson
                <span>22/06/2022 05:46:43 PM</span>
            </Name>        
            <Text>
                This challenge is so cool.
            </Text>
        </MessageContent>
    </Container>
  )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
`
const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    img{
        width: 100%;
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
`
const Name = styled.div`
    font-weight: 900;
    line-height: 1.4;
    font-size: 15px;

    span{
        margin-left: 8px;
        font-weight: 400;
        color: rgb(97,96,97);
        font-size: 13px;
    }


`
const Text = styled.div`
`
