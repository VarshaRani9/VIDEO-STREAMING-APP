import React from 'react'

const ChatMessages = ({name,msg}) => {
  return (
    <div className='flex items-center'>
        <img className='h-6 w-6 pb-1' src='https://tse1.mm.bing.net/th?id=OIP.VwDAQZfumkNyo17xbrePTgHaHa&pid=Api&P=0&h=180' alt='user'/>
        <span className='font-bold px-2'>{name}</span>
        <span> : {msg}</span>
    </div>
  )
}

export default ChatMessages 