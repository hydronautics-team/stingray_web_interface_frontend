import React, { useState,useEffect } from "react";
import DisplayRow from "./AuvWeb Components/DisplayRow";
import './styles/App.css'
import auvData from "./auvData.json"


function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      ws.send(JSON.stringify({action: 'JSON'}));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //give an initial state so that the data won't be undefined at start
  const [value, setValue] = useState("Прикол");
  const [jsonValue,setJsonValue] = useState("Тут должна быть глобальная миссия");

  const [courseValue,setCourseValue] = useState("");
  const [depthValue,setDepthValue] = useState("");
  const [marchValue,setMarchValue] = useState("");
  const [lagValue,setLagValue] = useState("");
  const [rollValue,setRollValue] = useState("");
  const [differentialValue,setDifferentialValue] = useState("");
  const [dropperValue,setDropperValue] = useState("");
  const [lifterValue,setLifterValue] = useState("");
  const [global_missionValue,setGlobal_missionValue] = useState("Глобальная миссия");
  const [local_missionValue,setLocal_missionValue] = useState("Локальная миссия");
  const [transtionValue,setTranstionValue] = useState("");
  


  const ws = new WebSocket('ws://localhost:9000/ws');

  ws.onopen = (event) => {
    console.log("Подключился");
  };

  ws.onmessage = function (event) {
    console.log('Message: %s', event.data)
    console.log(event.data)
    // if (event.data === "PONG"){
    //   setValue("Пора домой идти короче")
    // } 
    
    const jsonMessage = JSON.parse(event.data);
    setJsonValue(jsonMessage.global_mission);
    
    setCourseValue(jsonMessage.course);
    setDepthValue(jsonMessage.depth);
    setMarchValue(jsonMessage.march);
    setLagValue(jsonMessage.lag);
    setRollValue(jsonMessage.roll);
    setDifferentialValue(jsonMessage.differential);
    setDropperValue(jsonMessage.dropper);
    setLifterValue(jsonMessage.lifter);
    setGlobal_missionValue(jsonMessage.global_mission);
    setLocal_missionValue(jsonMessage.local_mission);
    setTranstionValue(jsonMessage.transtion);
    
  };

  const SendStart = () => {
    ws.send(JSON.stringify({action: 'START'}));
  };
  const SendStop = () => {
    ws.send(JSON.stringify({action: 'STOP'}));
  };
  const SendReset = () => {
    ws.send(JSON.stringify({action: 'RESET'}));

  };
  

      
      
  return (


    <div className="App">
    {/* <h1>{value}</h1> 
    <button onClick={SendPing}>PING</button> */}
    {/* <h1>{jsonValue}</h1> 
    <button onClick={SendJson}>Обновить значения</button> */}
    <DisplayRow name = {"Курс"} value = {courseValue}></DisplayRow>
    <DisplayRow name = {"Глубина"} value = {depthValue}></DisplayRow>
    <DisplayRow name = {"Марш"} value = {marchValue}></DisplayRow>
    <DisplayRow name = {"Лаг"} value = {lagValue}></DisplayRow>
    <DisplayRow name = {"Дифферент"} value = {differentialValue}></DisplayRow>
    <DisplayRow name = {"Крен"} value = {rollValue}></DisplayRow>
    <DisplayRow name = {"Dropper"} value = {dropperValue}></DisplayRow>
    <DisplayRow name = {"Lifter"} value = {lifterValue}></DisplayRow>
    <DisplayRow name = {"Global mission"} value = {global_missionValue}></DisplayRow>
    <DisplayRow name = {"Local mission"} value = {local_missionValue}></DisplayRow>
    <DisplayRow name = {"Transition"} value = {transtionValue}></DisplayRow>
    
    <button onClick={SendStart}>Старт</button>
    <button onClick={SendStop}>Стоп</button>
    <button onClick={SendReset}>Сброс</button>

    </div>
  );
}

export default App;
