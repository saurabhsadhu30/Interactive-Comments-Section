import React from 'react';
import {Button} from '../Button/Button';
import './ModalDelete.css';

export const ModalDelete = ({showModalDelete, setShowModalDelete, setComments, currentComment}) => {

  const handleCancel = () => {
    setShowModalDelete(false);
  }

  const handleSetComments = () => {
    setComments(prev => prev.filter(comment => comment.id !== currentComment.id));
  }

  return (
    <div className={showModalDelete ? 'modal-delete modal-delete--active' : 'modal-delete'} onClick={() => setShowModalDelete(false)}>
        <div className='modal-delete__content' onClick={(e) => e.stopPropagation()}>
            <p className='modal-delete__title'>Delete comment</p>
            <p className='modal-delete__text'>Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
            <div className='modal-delete__buttons'>
                <Button purpose={'reject'} action={handleCancel} />
                <Button purpose={'delete'} action={handleSetComments} />
            </div>
        </div>
    </div>
  )
}
