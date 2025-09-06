
import './App.css'
import CommonLayout from './layout/CommonLayout'
import { Outlet } from 'react-router'
import './utils/debugAuth'; // Import debug utilities


function App() {
  return (
      
     <CommonLayout>
       <Outlet></Outlet>
     </CommonLayout>
  )
}

export default App
