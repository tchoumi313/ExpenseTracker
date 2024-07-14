import { Outlet } from "react-router-dom"
import UserHeader from "../components/user/header/UserHeader"
import FloatingButton from "../components/user/floatingButton/FloatingButton"

 
const UserLayout = () => {
  return (
    <>
    <UserHeader />
    
    <Outlet />
    <FloatingButton />
    </>
  )
}

export default UserLayout
 

 





