import axios from 'axios'
import './App.css'
// import { PORT_1, NODE_ENV } from '';

function App() {
  const handlePublish=async()=>{
  // your code here.
  }
  const handleSubscribe=()=>{
    // your code here.
  }
  const handleCreate= (e)=>{
    e.preventDefault();
    debugger;
 axios.post(`http://localhost:${8002}`, {
  key: 'value',
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.error(error);
});
    // your code here.
    // axios.post('http://localhost:8001/api/create',{"message": "2 world!"}).then(dat => console.log(dat));
    }
  return (
    <div className="App">
      <form onSubmit={(e)=>handleCreate(e)}>
      <input type='text' placeholder='enter the message to send' />
      <button type='submit'> Create </button>      
      <button onClick={()=>handlePublish
      ()}> Publish </button>
      <button onClick={handleSubscribe}> Subscribe </button>   
      </form>   
    </div>
  );
}

export default App
