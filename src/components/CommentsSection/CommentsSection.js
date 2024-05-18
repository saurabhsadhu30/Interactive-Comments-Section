import React from 'react';
import { Comment } from '../Comment/Comment';
import './CommentsSection.css';

export const CommentsSection = ({ comments, currentUser, getId, setComments }) => {

    return (
        <div className='comments-section'>
            {comments.map(comment => (
                <Comment key={comment.id} currentComment={comment} currentUser={currentUser} getId={getId} setComments={setComments} />
            ))}
        </div>
    )
}