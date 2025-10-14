import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Amplify } from 'aws-amplify'
import outputs from "./aws-exports.js"
import { generateClient } from 'aws-amplify/api'
import "@aws-amplify/ui-react/styles.css"

Amplify.configure(outputs);

const client = generateClient({
  authMode: "userPool",
});

function App() {
  const [userProfiles, setUserProfiles] = useState([]);
  // const { signOut }= useAuthenticator((context) => [context.user]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Favorite Restaurant, Crazy D's Counter: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {userProfiles.forEach}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
