import axios from 'axios'
import { useState } from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  const handlePublish=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8003/api/pull')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  }
  const handleSubscribe=(e)=>{
    e.preventDefault();
  }
  const handleCreate= (e)=>{
    e.preventDefault();
 axios.post('http://localhost:8002/api/create',{"message":message})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.error(error);
});
    }
  return (
    <div className="App">
      <form>
      <input className='custom-txt' type='text' onChange={(e)=>setMessage(e.target.value)} value={message} placeholder='enter the message to send' />
      <button onClick={(e)=>handleCreate(e)}> Create </button>      
      <button onClick={(e)=>handlePublish
      (e)}> Publish </button>
      {/* <button onClick={(e)=>handleSubscribe(e)}> Subscribe </button>    */}
      </form>   
    </div>
  );
}

export default App
