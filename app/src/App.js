import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Dog from './components/Dog';
import styled from 'styled-components'; //import styled

const StyledApp = styled.div`
  background-image: url('https://wallpaperaccess.com/full/340452.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function App() {
  useEffect(() => {
    axios.get('https://aws.random.cat/meow')
         .then(res => {
           console.log('Dogs res.data: ', res.data)

         })
  },[])
  return (
    <StyledApp>
        <h1> Love all the doggos</h1>
        <h2>🐕</h2>
        <Dog />
    </StyledApp>
  );
}

export default App;
