import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {Navigate} from "react-router";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            {/*<Route path="" element={<Main />}></Route>*/}

            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/error" element={<Error />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="*" element={<Navigate replace to="/error" />} />
        </Routes>
    );
};

export default AppRouter;