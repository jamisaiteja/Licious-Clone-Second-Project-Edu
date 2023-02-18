import React from 'react';

const PostDetail = (props) =>{
    console.log(props.location.search)//query param
    console.log(props.location.search.split("=")[1])
    return(
        <div className='panel panel-warning'>
            <div className='panel-heading'>
                {props.match.params.topic} Details Page
            </div>
            <div className='panel-body'>
                <h2>{props.match.params.topic} Details Page</h2>
                <p>
                {props.match.params.topic} Details Page is a simple dummy page text of the printing amd typesetting industry.
                </p>
                <h3>You are on page number {props.location.search.split("=")[1]}</h3>
            </div>
        </div>
    )
}

export default PostDetail;