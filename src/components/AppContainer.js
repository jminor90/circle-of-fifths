import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';


export default function MainContainer() {
  return (
    <>
      <Navbar />
      <h1>AppContainer.js</h1>
      <Outlet/>
    </>
  )
}