import React from 'react';
import {useParams, useSearchParams} from 'react-router-dom';

const PostDetails = () =>{
    let params = useParams();
    let [searchParams] = useSearchParams();
    return(
        <div className='panel panel-info'>
            <div className='panel-heading'>
                {params.topic} Details Page
            </div>
            <div className='panel-body'>
                <h2>{params.topic} Details Page</h2>
                <p>
                    {params.topic} Details Page is a simple dummy page text of the printing amd typesetting industry.
                </p>
                <h3>You are on page number {searchParams.getAll('page')}</h3>
            </div>
        </div>
    )
}

export default PostDetails;