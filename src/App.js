import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './App.css'
const App = () => {
 
  const commands = [
    {
      command: 'reset',
      callback: ({ resetTranscript }) => { 
        resetTranscript();  
      }
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) => resetTranscript()
    },
    {
      command: 'open *',
      callback: (site) => { window.open('http://' + site + '.com') }

    },
    {
      command: 'increase text size',
      callback: () => {document.getElementById('content').style.fontSize = '22px'}
    },
    {
      command: 'decrease text size',
      callback: () => {document.getElementById('content').style.fontSize = '16px'}
    },
    {
      command: 'change text colour to *',
      callback: (color) => {document.getElementById('content').style.color =  color}
    },
    {
      command: 'change background colour to *',
      callback: (color) => {document.querySelector("body").style.background =  color}
    },
    {
      command: 'change heading colour to *',
      callback: (color) => {document.getElementById("heading").style.color =  color}
    },
    {
      command: 'change theme to dark',
      callback: () => {
        document.querySelector("body").style.background =  "black";
        document.getElementById("heading").style.color = "white";
        document.getElementById("content").style.background = "black";
        document.getElementById("content").style.color = "white";
      }
    },
    {
      command: 'change theme to light',
      callback: () => {document.querySelector("body").style.background =  "white";
      document.getElementById("heading").style.color = "black"
      document.getElementById("content").style.background = "white";
        document.getElementById("content").style.color = "black";
    }
    },
  ]

  const handleStart = ()=>{
    SpeechRecognition.startListening({ continuous: true, language:'en-IN' })
  
  }

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
  

  
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div className='container'>
      <div className='nav'>
        <h2 id='heading'>Please Speak Something to Write</h2>
      </div>
      <div id='content'>
        {transcript}
      </div>
      <div id='buttons'>
      <button onClick={handleStart}>Start Listening</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      </div>
      
    </div>
  )
}
export default App