import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Sidebar() {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early return pattern
  if(!isMenuOpen)return null;
  return (
    <div className='pr-10 mr-5 p-5 shadow-lg w-48'>
      <ul className=''>
        <li className='font-bold py-1'><Link to={"/"}>Home</Link></li>
        <li className='py-1'>Shorts</li>
        <li className='py-1'>Subscriptions</li>
      </ul>
      <ul className='mt-7'>
        <li className=' py-1'>Library</li>
        <li className='py-1'>History</li>
        <li className='py-1'>Your Videos</li>
        <li className='py-1'>Watch Later</li>
        <li className='py-1'>Show More</li>
      </ul>
      <h1 className='mt-7 font-bold'>Subscriptions</h1>
      <ul mt-3>
        <li className=' py-1'>Channel1</li>
        <li className=' py-1'>Channel2</li>
        <li className=' py-1'>Channel3</li>
        <li className=' py-1'>Channel4</li>
        <li className=' py-1'>Channel5</li>
        <li className=' py-1'>Channel6</li>
      </ul>
    </div>
  )
}

export default Sidebar