import { use, useEffect, useState } from "react"
import Chat from "./componets/chat/Chat"
import Detail from "./componets/detail/Detail"
import List from "./componets/list/list"
import Login from "./componets/login/Login"
import Notification from "./componets/notification/notification"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"
import { useUserStore } from "./lib/userStore"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./lib/firebase"
import { useChatStore } from "./lib/chatStore"

const App = () => {


  const {currentUser,isLoading,fetchUserInfo} = useUserStore()

  const {chatId} = useChatStore()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if userChats exists
        const userChatsRef = doc(db, "userchats", user.uid)
        const userChatsSnap = await getDoc(userChatsRef)
        
        if (!userChatsSnap.exists()) {
          // Initialize with chats array
          await setDoc(userChatsRef, { chats: [] })
        }
      }
      fetchUserInfo(user?.uid)
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser)

  if(isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
      {
        currentUser ? (
        <>
          <List/>
          {chatId && <Chat/>}
          {chatId && <Detail/> }
        </> 
        ) : (
        <Login/>
      )}
     <Notification/>
    </div>
  )
}

export default App