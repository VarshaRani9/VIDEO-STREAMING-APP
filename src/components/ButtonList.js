import React from 'react'
import Button from './Button'

function ButtonList() {
  const list = ["All", "Gaming", "Songs", "Basketballs", "Lives", "Codings", "Soccer", "Crickets", "News","Weather"]

  return (
    <div className='flex'>
      {
        list.map((items)=> <Button name = { items}/>)
      }
      {/* <Button name={"All"}/>
      <Button name={"Gaming"}/>
      <Button name={"Songs"}/>
      <Button name={"Live"}/>
      <Button name={"Coding"}/>
      <Button name={"Soccer"}/>
      <Button name={"Cricket"}/>
      <Button name={"News"}/> */}
    </div>
  )
}

export default ButtonList