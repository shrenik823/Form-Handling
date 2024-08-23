import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './User/Register'
import Userlist from './User/Userlist'

function App() {
  const [userData,setuseData] = useState([])
  let userInfo={userData,setuseData}
  return (
    <>
      <div className=''>
        <div className='grid gap-6 grid-cols-[25%_auto] bg-[lightblue] h-[1000px]'>
          <Register userInfo={userInfo}/>
          <Userlist userInfo={userInfo}/>
        </div>
      </div>
    </>
  )
}

export default App
