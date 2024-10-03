import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/content-body/home/home";
import About from "./components/content-body/about/about";
import Contact from "./components/content-body/contact/contact";
import Settings from "./components/content-body/settings/settings";
import PostsDetails from "./components/content-body/posts/posts";
import PostDetails from "./components/content-body/posts/post-details/post-details";

export const AppRouting = () => {
    return (
        <div>
            <Header />
            <h1>ALWAYS VISIBLE...</h1>
            <Outlet />
            {/* Outlet is used to acting as an placeholder whenever we are requrest or clicking on particular route, it will load particular route details */}

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/settings" element={<Settings />}/>
                <Route path="/posts" element={<PostsDetails />}/>
                <Route path="/posts/:postId" element={<PostDetails />}/>
            </Routes>
        </div>
    )
}

export default AppRouting;