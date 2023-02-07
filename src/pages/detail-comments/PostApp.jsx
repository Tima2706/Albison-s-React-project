import React from 'react'

function PostApp({ item }) {
    return (
        <div className='row' key={item.id}>
            <div className='posts-item d-flex justify-content-between flex-column gap-2 col-12' key={item.id}>
                <h5>{item.name}</h5>
                <p>{item.body}</p>
                <h6>email: {item.email}</h6>
            </div>
        </div>
    )
}

export default PostApp