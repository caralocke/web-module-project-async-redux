import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Dog from './components/Dog';

function App() {
  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
         .then(res => {
           console.log('Dogs res.data: ', res.data)
         })
  },[])
  return (
    <div className="App">
        <h1>Get a Dog 🐕</h1>
        <Dog />
    </div>
  );
}

export default App;
