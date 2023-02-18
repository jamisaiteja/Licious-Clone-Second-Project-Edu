import React from 'react';
import {Link} from 'react-router-dom'

const Post = ()=>{
    return(
        <div className='panel panel-success'>
            <div className='panel-heading'>
            Post Page
            </div>
            <div className='panel-body'>
                <h2>Post Page</h2>
                <p>
                    Post Page is a simple dummy page text of the printing amd typesetting industry.
                </p>
                <h1>JavaScript</h1>
                <Link to="/post/Javascript?page=1" className="btn btn-success">Details</Link>
                <h1>React</h1>
                <Link to="/post/React?page=2" className="btn btn-warning">Details</Link>
                <h1>Node</h1>
                <Link to="/post/Node?page=3" className="btn btn-danger">Details</Link>
            </div>
        </div>
    )
}

export default Post;