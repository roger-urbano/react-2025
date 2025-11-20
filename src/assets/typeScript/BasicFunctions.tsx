import React from 'react'

const addTwoNumbers = (a:number, b:number): number => {
	return a + b
}

const BasicFunctions = () => {

  return (
		<>
    	<div>BasicFunctions</div>
			<div>
				<span>El resultado de la suma es: </span> { addTwoNumbers(2, 8) } 
			</div>'
		</>
  )
}

export default BasicFunctions