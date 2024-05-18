import React, { useState } from 'react';
import { CommentsSection } from '../components/CommentsSection/CommentsSection';
import { AddCommentSection } from '../components/AddCommentSection/AddCommentSection';
import data from '../data/data.json';
import './App.css';

export const App = () => {
    const currentUser = data.currentUser;
    const [comments, setComments] = useState(data.comments);


    const getId = () => {
        let id = 0;
        comments.forEach(comment => {
            if (comment.replies.length > 0) {
                comment.replies.forEach(reply => id < reply.id ? id = reply.id : id);
            } else {
                if (id < comment.id) {
                    id = comment.id
                }
            }
        });
        return id;
    }

    return (
        <div className='app'>
            <CommentsSection comments={comments} currentUser={currentUser} getId={getId} setComments={setComments} />
            <AddCommentSection comments={comments} setComments={setComments} currentUser={currentUser} />
        </div>
    )
}