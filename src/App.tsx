import { useState } from 'react'
import './App.css'
import Counter from './assets/typeScript/Counter'
// import BasicFunctions from './assets/typeScript/BasicFunctions'
// import BasicTypes from './assets/typeScript/BasicTypes'
// import ObjectLiterals from './assets/typeScript/ObjectLiterals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col justify-center items-center h-svh'>
        <h1 className="font-roboto text-4xl mb-5">
          React + TS
        </h1>
        <Counter/>
      </div>

      {/* <BasicTypes /> */}
      {/* <ObjectLiterals/> */}
      {/* <BasicFunctions/> */}
    </>
  )
}

export default App
