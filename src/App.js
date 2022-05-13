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
    }
  ]

  SpeechRecognition.startListening({ continuous: true, language:'en-IN' })
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })

  
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div className='container'>
      <div className='nav'>
        <h2>Please Speak Something to write</h2>
      </div>
      <div id='content'>
        {transcript}
      </div>
    </div>
  )
}
export default App