import React from 'react';
import styled from 'styled-components';

import './App.css';

const Header = styled.section`
  margin: auto;
  margin-bottom: 3em;
  width: 70%;
  height: 3em;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, #ebb6e8, #fdb9d8, #d9b2f8);
`

const HeaderText = styled.h3`
  font-size: 1em;
  color: #a47cc4;
  font-align: center;
`

const Slash = styled.span`
  color: #fdb9d8; 
  font-size: 24px;
`

const Order = styled.div`
  margin: auto;
  width: 50%;
  height: 37em;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  border-radius: .5em;
  box-shadow: 0 0 1.5em #e2e3e5;
`


function App() {


  return (
    <>
      <Header>
        <HeaderText> &lt;<Slash>&frasl;</Slash>&gt; Front-end Developer Test Task</HeaderText>

      </Header>
      <Order></Order>

    </>
  );
}

export default App;
