import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { ChatContext } from '../../context/ChatContext'

function HomePage() {

  const {selectedUser, setSelectedUser} = useContext(ChatContext);

  return (
     <div className='border w-full h-screen px-2 py-2 sm:px-[10%] sm:py-[3%]'>
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative 
          ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]': 'md:grid-cols-2'}
      `}>
        <Sidebar />
        <ChatContainer/>
        <RightSidebar/>
      </div>
    </div>
  )
}
export default HomePage
