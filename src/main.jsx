import React from 'react'
import ReactDOM from 'react-dom/client'
import Components from './components/components'
import '/src/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      <Components />
    </div>
  </React.StrictMode>,
)
