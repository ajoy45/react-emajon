
import reactLogo from './assets/react.svg'

import './App.css'
import Header from './compinents/header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div >
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
