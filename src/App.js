import React, {useEffect, useMemo, useState} from "react";
import './styles/App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import {Navigate} from "react-router";
import AppRouter from "./components/AppRouter";
 /*function App() {
    const [likes, setLikes] = useState(0);
    function increment() {
        setLikes(likes + 1)

    }
    function decrement() {
        setLikes(likes - 1);

    }
  return (
    <div className="App">
        <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

    </div>
  );
}
export default App;*/

// function App() {
//     const [posts, setProps] = useState( [
//         {id: 1, title: 'JavaScript', body: 'Description'},
//         {id: 2, title: 'JavaScript 2', body: 'Description'},
//         {id: 3, title: 'JavaScript 3', body: 'Description'},
//     ])
//
//     const [title,setTitle] = useState('')
//     const bodyInputRef = useRef('');
//     const addNewPost = (e) => {
//         e.preventDefault()
//     }
//
//     return (
//         <div className="App">
//             <form>
//                 {/*управляемый компонент*/}
//                 <MyInput
//                     value={title}
//                     onChange={e => setTitle(e.target.value)}
//                     type="text"
//                     placeholder="Название поста"/>
//                 {/*Неуправляемый компонент*/}
//                 <MyInput
//                     ref={bodyInputRef}
//                     type="text"
//                     placeholder="Описание поста"/>
//                 <MyButton onClick={addNewPost}>Создать пост</MyButton>
//             </form>
//             <PostList posts={posts} title="Список" />
//         </div>
//     )
// }
//
// export default App;

// function App() {
//     const [posts, setPosts] = useState( [
//         {id: 1, title: 'JavaScript', body: 'Description'},
//         {id: 2, title: 'JavaScript 2', body: 'Description'},
//         {id: 3, title: 'JavaScript 3', body: 'Description'},
//     ])
//
//     const [title,setTitle] = useState('')
//     const [body,setBody] = useState('')
//
//     const addNewPost = (e) => {
//         e.preventDefault()
//         const newPost = {
//             title, body, id:Date.now(),
//         }
//         setPosts([...posts, newPost]) //разворачиваем старый список пост, добавляем в конец новый
//         setTitle('')
//         setBody('')
//     }
//
//     return (
//         <div className="App">
//             <form>
//
//                 <MyInput
//                     value={title}
//                     onChange={e => setTitle(e.target.value)}
//                     type="text"
//                     placeholder="Название поста"/>
//
//                 <MyInput
//                     value={body}
//                     onChange={e => setBody(e.target.value)}
//                     type="text"
//                     placeholder="Описание поста"/>
//                 <MyButton onClick={addNewPost}>Создать пост</MyButton>
//             </form>
//             <PostList posts={posts} title="Список" />
//         </div>
//     )
// }
//
// export default App;

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}
export default App;