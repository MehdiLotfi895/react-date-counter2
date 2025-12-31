import { useState } from 'react';
import './App.css';
function set(count,date){
  if(count>0){
    const newDate=new Date(date);
    newDate.setDate(date.getDate()+count);
    date=new Date(newDate);
    return(`${count}days from today is ${date.toDateString()}`)
  }
  if(count<0){
    const newDate=new Date(date);
    newDate.setDate(date.getDate()-Math.abs(count));
    date=new Date(newDate);
    return(`${count}days ago from today was ${date.toDateString()}`)
  }
  if(count==0){
    date=new Date();
    return(`today is ${date.toDateString()}`)
  }

}
function App() {
  const[step,setStep]=useState(1);
  const[count,setCount]=useState(0);
  const date=new Date();

  return (
    <>
      <div>
      <input type="range" min={1} max={10}  style={{marginTop:"30px"}}onChange={(e)=>{
        setStep(Number(e.target.value));
      }}/>
      {step}
      </div>
      <div>
        <button onClick={()=>{
          const newCount=count-step;
          setCount(newCount)
        
        }}>-</button>
        <input type="text" value={count} onChange={(e)=>{
          setCount(Number(e.target.value))
        }}></input>
        <button onClick={()=>{
          const newCount=count+step;
          setCount(newCount)
        }}>+</button>
      </div>
      <div style={{fontWeight:'bold',marginTop:"10px"}}>
         {set(count,date)}
      </div>
      <button style={{marginTop:"10px"}} onClick={()=>{
        setStep(1);
        setCount(0);
        
      }}>Reset</button>
    </>
  );
}

export default App;

