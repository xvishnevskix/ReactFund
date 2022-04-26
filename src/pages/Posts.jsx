
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

import React, {useEffect, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/Button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import PostForm from "../components/PostForm";
import Loader from "../components/UI/Loader/Loader";

function Posts() {
    const [posts, setPosts] = useState( [
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState( 10)
    const [page, setPage] = useState( 1)




    const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })



    useEffect( () => {
        fetchPosts(limit, page)
    }, [page])



    const createPost = (newPost) => {
        setPosts([...posts, newPost]) //разворачиваем старый массив и добавляем в конец новыйпост
        setModal(false)
    }



    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className="App">

            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            {postError &&
            <h1>Произошла ошибка ${postError}</h1>
            }

            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список" />
            }
            <Pagination totalPages={totalPages} page={page} changePage={changePage}></Pagination>


        </div>
    )
}

export default Posts;