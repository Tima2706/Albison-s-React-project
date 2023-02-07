import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostApp from './PostApp'
import axios from 'axios'
function Comments() {
    const [post, setPost] = useState([])
    const [item, setItem] = useState([])

    const { id } = useParams()


    const fetchData = () => {
        const data1 = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        const data2 = `https://jsonplaceholder.typicode.com/posts/${id}`
        const getData = axios.get(data1)
        const getData1 = axios.get(data2)
        axios.all([getData, getData1]).then(
            axios.spread((...allData) => {
                const allDataUser = allData[0].data
                const getAllUsers = allData[1].data
                setPost(allDataUser)
                setItem(getAllUsers)

            })
        )
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container'>
            <div className='detail'>
                <div className='d-flex justify-content-center'>
                    {
                        <div className='posts-item  w-50' key={item.id}>
                            <h5>{item.title}</h5>
                            <p>{item.body}</p>
                            <h6>UserId: {item.userId}</h6>
                        </div>
                    }
                </div>
                {
                    post.map((item) => <PostApp key={item.id} item={item} >
                    </PostApp>)
                }

            </div>
        </div>
    )
}

export default Comments