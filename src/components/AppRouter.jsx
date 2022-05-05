import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {Navigate} from "react-router";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes, routes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {

const {isAuth} = useContext(AuthContext)

    return (
        isAuth
        ?
            <Routes>
                {/*<Route path="" element={<Main />}></Route>*/}

                {/*<Route path="/about" element={<About />} />*/}
                {/*<Route path="/posts" element={<Posts />} />*/}
                {/*<Route path="/error" element={<Error />} />*/}
                {/*<Route path="/posts/:id" element={<PostIdPage />} />*/}
                {/*<Route path="*" element={<Navigate replace to="/error" />} />*/}

                {
                    privateRoutes.map((route) => {
                        return <Route path={route.path} element={<route.element/>}  key={route.path}/>;
                    })
                }
            </Routes>

            :
            <Routes>
                {
                    publicRoutes.map((route) => {
                        return <Route path={route.path} element={<route.element/>}  key={route.path}/>;
                    })

                }
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>

    );
};

export default AppRouter;