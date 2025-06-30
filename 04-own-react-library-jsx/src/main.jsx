import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <h2>haa chal raha hu bhai!</h2>
//   )
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>click me to open google</a>

// )
const anotherUser = "aayush roopchandani"
const reactElement = React.createElement(
  'a',
  {href: 'https://instagram.com',target: '_blank'},
  'click me to go to insta',
  anotherUser
)
createRoot(document.getElementById('root')).render(
  reactElement
)
