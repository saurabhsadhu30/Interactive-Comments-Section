import React, { useState } from 'react';
import { ScoreCounter } from '../ScoreCounter/ScoreCounter';
import { CommentHeader } from '../CommentHeader/CommentHeader';
import { ReplySection } from '../ReplySection/ReplySection';
import { ModalDelete } from '../ModalDelete/ModalDelete';
import { Button } from '../Button/Button';

export const Subcomment = ({ currentReply, setReplies, currentUser, getId }) => {
    const { createdAt, score, user } = currentReply;
    const [content, setContent] = useState(currentReply.content);
    const [replyDisplay, setReplyDisplay] = useState(false);
    const [editDisplay, setEditDisplay] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [textAreaContent, setTextAreaContent] = useState(currentReply.content);

    const handleChange = (e) => {
        setTextAreaContent(e.target.value);
    }

    const handleUpdate = () => {
        setContent(textAreaContent);
        setEditDisplay(false);
    }

    const textArea = (
        <textarea className='add-comment__textarea' value={textAreaContent} onChange={handleChange}>
        </textarea>
    )

    const commentText = (
        <p className='comment__text'>
            {currentReply.replyingTo && <span className='comment__reply-to'>@{currentReply.replyingTo} </span>}
            {content}
        </p>
    )



    return (
        <>
            <div className='comment'>
                <div className='comment__main'>
                    <ScoreCounter score={score} />
                    <div className='comment__content'>
                        <CommentHeader image={user.image} username={user.username} createdAt={createdAt} currentUser={currentUser} setReplyDisplay={setReplyDisplay} setEditDisplay={setEditDisplay} setShowModalDelete={setShowModalDelete} />
                        {editDisplay ? textArea : commentText}
                        {editDisplay && <Button purpose={'update'} action={handleUpdate} />}
                    </div>
                </div>
            </div>
            {replyDisplay && <ReplySection currentUser={currentUser} replyToUser={user.username} setReplies={setReplies} getId={getId} setReplyDisplay={setReplyDisplay} />}
            {showModalDelete && <ModalDelete showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} setComments={setReplies} currentComment={currentReply} />}
        </>
    )
}
