import Chat from "./componets/chat/chat"
import Detail from "./componets/detail/Detail"
import List from "./componets/list/list"
import Login from "./componets/login/Login"
import Notification from "./componets/notification/notification"

const App = () => {

  const user = true

  return (
    <div className='container'>
      {
        user ? (
        <>
          <List/>
          <Chat/>
          <Detail/> 
        </> 
        ) : (
        <Login/>
      )}
     <Notification/>
    </div>
  )
}

export default App