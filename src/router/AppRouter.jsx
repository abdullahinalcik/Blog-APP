import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/Detail";

import MyBlogs from "../pages/Myblogs";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        <Route path="/profile"  element={<Profile />}/>        
        <Route path="/myblogs" element={<MyBlogs />}/>

        <Route  element={<PrivateRouter />}>
          <Route  path="/newblog" element={<NewBlog />} />
          <Route  path="/detail/:id" element={<Detail />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/readmore" element={<ReadMore />} /> */}
        </Route>    

   
   

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
