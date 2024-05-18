import React from 'react';
import './Button.css';

export const Button = ({ purpose, action }) => {

  const handleClick = (e) => {
    e.preventDefault();
    action();
  }

  return (
    <button className={`${purpose}-button button`} onClick={(e) => handleClick(e)}>
      {purpose === 'reply' ? 'reply' : purpose === 'send' ? 'send' : purpose === 'update' ? 'update' : purpose === 'delete' ? 'yes, delete' : purpose === 'reject' ? 'no, cancel' : ''}
    </button>
  )
}
