import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import { CustomHooks } from './01-useState/CustomHooks'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { HookApp } from './HookApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp/> */}
    {/* <CustomHooks/> */}
  <SimpleForm/>
  </React.StrictMode>
)
