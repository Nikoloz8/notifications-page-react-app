import './App.css'
import Data from "../data.json"
import { useState } from 'react'
import Messages from "./components/messages/Messages"

function App() {
  let [readIds, setReadIds] = useState([])

  let data = Data.notifications

  const ids = data.map(e => e.id)

  return (
    <div className='container'>
      <section>
        <h2 className='not-counts'>Notifications <span>{Data.notifications.length - readIds.length}</span></h2>
        <button onClick={() => setReadIds(ids)}>Mark all as read</button>
      </section>
      <Messages setReadIds={setReadIds} readIds={readIds}/>
    </div >
  )
}

export default App


