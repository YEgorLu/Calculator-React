import {Output} from './Output'
import {Input} from './Input'
import './styles/index.css';
import React, {useState} from "react";

export default function App(props){
    const[screenContent, setScreenContent] = useState("0");

    return (
      <div className="calculator">
        <Output>{screenContent}</Output>
        <Input screenContent={screenContent} setScreenContent={setScreenContent}/>
      </div>
    );
}
