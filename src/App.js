import { useMemo, useState } from 'react';
import './App.css';

import Box from './Box';
function App() {

  const [data,setData] = useState(Array(9).fill(null));
  const [isX,setIsX]=useState(true)

  function handleClick(index){
    if(data[index]){
      return;
    }

    const copyData = [...data];
    copyData[index] = isX ? "X": "O";
    setData(copyData);
    setIsX(!isX);
  }
  useMemo(()=>{
    if(data[0]===data[1] && data[1]===data[2] && data[0]){
      // alert(data[0]+ " is the winner")
      setTimeout(()=> alert(data[0]+ " is the winner"),500)
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[0]){
      setTimeout(()=> alert(data[0]+ " is the winner"),500)
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[0]){
      setTimeout(()=> alert(data[0]+ " is the winner"),500)
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[1]){
      setTimeout(()=> alert(data[1]+ " is the winner"),500)
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[2]){
      setTimeout(()=> alert(data[2]+ " is the winner"),500)
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[2]){
      setTimeout(()=> alert(data[2]+ " is the winner"),500)
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[3]){
      setTimeout(()=> alert(data[3]+ " is the winner"),500)
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[6]){
      setTimeout(()=> alert(data[6]+ " is the winner"),500)
    }
    else if(!data.includes(null)){
      setTimeout(()=> alert("draww"),500)
    }
    

  },[data])
  
  return (
    <div className="App">
      <Box value={data[0]} onClick={()=> handleClick(0)} />
      <Box value={data[1]} onClick={()=> handleClick(1)} />
      <Box value={data[2]} onClick={()=> handleClick(2)} />
      <Box value={data[3]} onClick={()=> handleClick(3)} />
      <Box value={data[4]} onClick={()=> handleClick(4)} />
      <Box value={data[5]} onClick={()=> handleClick(5)} />
      <Box value={data[6]} onClick={()=> handleClick(6)} />
      <Box value={data[7]} onClick={()=> handleClick(7)} />
      <Box value={data[8]} onClick={()=> handleClick(8)} />
    </div>
  );
}

export default App;
