import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import './AddCommentSection.css';

export const AddCommentSection = ({ comments, setComments, currentUser }) => {
    const [comment, setComment] = useState('');

    const userImg = require(`../../data/${currentUser.image.png.slice(2)}`)

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const getId = () => {
        if (comments[comments.length - 1].replies.length > 0) {
            return comments[comments.length - 1].replies[comments[comments.length - 1].replies.length - 1].id + 1;
        } else {
            return comments[comments.length - 1].id + 1;
        }
    }

    const handleSetComments = () => {
        setComments(prev => {
            return [
                ...prev,
                {
                    id: getId(),
                    content: comment,
                    createdAt: '0 second ago',
                    score: 0,
                    user: {
                        image: {
                            png: currentUser.image.png
                        },
                        username: currentUser.username
                    },
                    replies: []
                }]
        });
        setComment('');
    }

    return (
        <div className='add-comment'>
            <form className='add-comment__form'>
                <img className='add-comment__user-image' src={userImg} />
                <textarea className='add-comment__textarea' placeholder='Add a comment…' value={comment} onChange={handleChange}></textarea>
                <Button purpose={'send'} action={handleSetComments} />
            </form>
        </div>
    )
}
