import './App.css';

import Nav from './components/Nav';
import QuotesAdviceNArt from './components/QuotesAdviceNArt';
import axios from 'axios';

axios.get("https://api.quotable.io/random")
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

function App() {
  return (
    <div className="App">
      <Nav/>
      <QuotesAdviceNArt/>
    </div>
  );
}

export default App;
