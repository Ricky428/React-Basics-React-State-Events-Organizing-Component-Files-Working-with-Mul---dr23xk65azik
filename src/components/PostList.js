import React, {useState,useEffect} from 'react'
import{fetchPosts} from '../api/fetchPosts'


const PostList = () => {
    const[page,setPage] = useState(1);
    const[posts,setPosts] = useState([])
    const limit = 5;
    useEffect(()=> {
        fetchPosts(page,limit).then(()=>{
            setPost([...res.data])
        })
    },[page])
    return (
        <>
        post.map(()=>{)
        </>
    )
}

export { PostList }
