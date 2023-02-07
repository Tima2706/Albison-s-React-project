import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './post-app.scss'
function PostsApp() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json =>
                setPosts(json))
    }, [])
    return (
        <div className='posts pt-5'>
            <div className='container'>
                <div className='posts-cards row d-flex justify-content-center'>
                    {posts.map((item) => {
                        return (
                            <div className='posts-item d-flex justify-content-between flex-column gap-2 col-5' key={item.id}>
                                <h5>{item.title}</h5>
                                <p>{item.body}</p>
                                <h6>UserId: {item.userId}</h6>
                                <NavLink to={`/Comments/${item.id}/comments`}><button className="btn btn-dark">Comments</button></NavLink>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PostsApp