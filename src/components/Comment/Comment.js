import React, { useState } from 'react';
import { ScoreCounter } from '../ScoreCounter/ScoreCounter';
import { CommentHeader } from '../CommentHeader/CommentHeader';
import { ReplySection } from '../ReplySection/ReplySection';
import { Button } from '../Button/Button';
import { Subcomment } from '../Subcomment/Subcomment';
import { ModalDelete } from '../ModalDelete/ModalDelete';
import './Comment.css';


export const Comment = ({ currentComment, currentUser, getId, setComments }) => {
    const { createdAt, score, user } = currentComment;
    const [content, setContent] = useState(currentComment.content);
    const [replyDisplay, setReplyDisplay] = useState(false);
    const [editDisplay, setEditDisplay] = useState(false);
    const [replies, setReplies] = useState(currentComment.replies);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [textAreaContent, setTextAreaContent] = useState(currentComment.content);

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
            {currentComment.replyingTo && <span className='comment__reply-to'>@{currentComment.replyingTo} </span>}
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
                <div className='comment__subcomments'>
                    {replies.length > 0 && replies.map(reply => (
                        <Subcomment key={reply.id} currentReply={reply} setReplies={setReplies} currentUser={currentUser} getId={getId} />
                    ))
                    }
                </div>
            </div>
            {replyDisplay && <ReplySection currentUser={currentUser} replyToUser={user.username} setReplies={setReplies} getId={getId} setReplyDisplay={setReplyDisplay} />}
            {showModalDelete && <ModalDelete showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} setComments={setComments} currentComment={currentComment} />}
        </>
    )
}
