import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Dog from './components/Dog';
import styled from 'styled-components'; //import styled

const styledApp = styled.div`

`

function App() {
  useEffect(() => {
    axios.get('https://aws.random.cat/meow')
         .then(res => {
           console.log('Dogs res.data: ', res.data)

         })
  },[])
  return (
    <div className="App">
        <h1> Love all the doggos</h1>
        <h2>🐕</h2>
        <Dog />
    </div>
  );
}

export default App;
