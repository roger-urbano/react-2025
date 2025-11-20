import React from 'react'

const BasicTypes = () => {

  const name: string = "Roger";
  const age = 40;
  const isActive: boolean = true;
  const powers: string[] = ["React", "ReactNative", "Angular"]

  return (
    <>
      <div>BasicTypes</div>
      {name} - {age} {isActive ? "Activo" : "No Activo"}
      <ul>
        { powers.map((item, index) => (
          <li key={index}>{item}</li>
         ))
        }
      </ul>
    </>

  )
}

export default BasicTypes