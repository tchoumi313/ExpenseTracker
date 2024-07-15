import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";
import Hero from "./components/hero/Hero";
import HomeLayout from "./Layouts/HomeLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import UserLayout from "./Layouts/UserLayout";
 import UserHome from "./pages/UserHome";
import FloatingForm from "./components/floatingForm/FloatingForm";
 
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<UserLayout />}>
          <Route path="/home" element={<UserHome />} />
          <Route path="/check" element={<FloatingForm />} />
           
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
