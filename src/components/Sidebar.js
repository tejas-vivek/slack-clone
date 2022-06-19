import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { sidebarItemsData } from "../Data/SidebarData";
import AddIcon from "@mui/icons-material/Add";
import { channelListItems } from "../Data/ChannelListData"

function Sidebar() {
  return (
    <Container>
      <WorkspaceContainer>
        <Name>CleverProgrammer</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItemsData.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon />
        </NewChannelContainer>
        <ChannelList>

           { channelListItems.map((item) => (
            <Channel>
              {item.icon}
              {item.text}  
            </Channel>
           ))}

        </ChannelList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;
const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;
const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  :hover{
    background: #D3D3D3;
  }
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  height: 28px;
  display: grid;
  grid-template-columns: 15% auto;
  padding-left: 19px;
  align-items: center;
  cursor: pointer;
  :hover{
    background: #350d36
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;
const NewChannelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  padding-right: 12px;
  height: 28px;
`;

const Channel = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  cursor: pointer;

  :hover{
    background: #350d36
  }
`
const ChannelList = styled.div`
`
