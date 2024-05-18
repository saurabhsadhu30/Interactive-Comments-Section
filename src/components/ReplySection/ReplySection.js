import React, { useState } from 'react'
import { Button } from '../Button/Button';
import './ReplySection.css';

export const ReplySection = ({ currentUser, replyToUser, setReplies, getId, setReplyDisplay }) => {
    const userImg = require(`../../data/${currentUser.image.png.slice(2)}`);
    const [reply, setReply] = useState(`@${replyToUser} `);


    const handleChange = (e) => {
        setReply(e.target.value);
    }

    const handlesetReplies = () => {
        setReplies(prev => ([
            ...prev,
            {
                id: getId(),
                content: reply.split(' ').slice(1),
                createdAt: '0 seconds ago',
                score: 0,
                replyingTo: replyToUser,
                user: {
                    image: {
                        png: currentUser.image.png
                    },
                    username: currentUser.username
                }
            }
        ]));
        setReply('');
        setReplyDisplay(false);
    }

    return (
        <div className='reply'>
            <form className='reply__form'>
                <img className='reply__user-image' src={userImg} />
                <textarea className='reply__textarea' value={reply} onChange={handleChange}></textarea>
                <Button purpose={'reply'} action={handlesetReplies} />
            </form>
        </div>
    )
}
