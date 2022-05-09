import React, {useState} from 'react'
import './App.css';
import UserForm from './components/UserForm';
import Box from './components/Box';

function App() {
  const [boxList, setBoxList] = useState([])

  const handleNewBox = (newBox) => {
    setBoxList([...boxList, newBox]);
    console.log(boxList)
  }

  return (
    <div className="App">
      <UserForm onNewBox={handleNewBox} />
      <Box boxes={boxList}/>
    </div>
  );
}

export default App;