import { Outlet } from "react-router-dom"
import UserHeader from "../components/user/header/UserHeader"

 
const UserLayout = () => {
  return (
    <>
    <UserHeader />
    <Outlet />
    </>
  )
}

export default UserLayout
 

 





