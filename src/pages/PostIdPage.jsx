import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {

    const params = useParams() //даёт айдишник
    const [post, setPost] = useState( {})
    const [comments, setComments] = useState([])
    const [fetchingPostById, isLoading, error] =  useFetching( async (id) => {
        const response = await PostService.getByID(id)
        setPost(response.data)

    })

    const [fetchingPostComments, isLoadingComments, errorС] =  useFetching( async (id) => {
        const response = await PostService.getComments(id)
        setComments(response.data)

    })

    useEffect( () => {
        fetchingPostById(params.id)
        fetchingPostComments(params.id)
    }, [])

    return (
    <div>
        <h1>Вы попали на страницу {params.id}</h1>
        {isLoading
            ? <Loader/>
                : <div>{post.id} {post.title} </div>

        }
        <h1>Комментарии</h1>
        {isLoadingComments
            ? <Loader/>
            : <div> {comments.map(comm =>
                <div style={{marginTop:15}}>
                <h5>{comm.email} </h5>
                    <div>{comm.body}</div>
                </div>
            )} </div>
        }
    </div>

    ); };

export default PostIdPage;