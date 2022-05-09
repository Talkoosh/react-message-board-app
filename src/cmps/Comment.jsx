import React, { useState } from 'react'
import { AddComment } from './AddComment'
import { CommentList } from './CommentList'

export function Comment({ saveComment, deleteComment, setComments, comment, updateScore, user }) {

    const [isReplying, setIsReplying] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editTxt, setEditTxt] = useState(comment.content);

    function onUpdateScore(updateBy) {
        updateScore(comment.id, updateBy)
    }

    function handleInput({ target }) {
        setEditTxt(target.value);
    }

    function onSaveComment() {
        saveComment(comment.id, editTxt); 
        setIsEditing(false);
    }

    return (
        <section className="comment-main">
            <div className="comment-body">
                <div className="comment-score">
                    <button onClick={() => { onUpdateScore('1') }}>+</button>
                    <p>{comment.score}</p>
                    <button onClick={() => { onUpdateScore('-1') }}>-</button>
                </div>
                <div className="comment-content">
                    <div className="comment-header">
                        <img src={comment.user.image.png} alt="" />
                        <h1>{comment.user.username}</h1>
                        <p>{comment.createdAt}</p>
                    </div>
                    {isEditing ?
                        <textarea value={editTxt} onChange={(ev) => { handleInput(ev) }} cols="30" rows="10"></textarea> :
                        <p>{comment.content}</p>}
                </div>
                <button onClick={() => { setIsReplying(true) }} className="reply-btn">Reply</button>
                {(user.id === comment.user.id) &&
                    <div className="comment-edit">
                        {!isEditing ?
                            <button onClick={() => { setIsEditing(true) }}>Edit</button> :
                            <button onClick={() => { onSaveComment() }}>Save</button>}
                        <button onClick={() => { deleteComment(comment.id) }}>Delete</button>
                    </div>}
            </div>

            {isReplying &&
                <AddComment setIsReplying={setIsReplying} setComments={setComments} commentId={comment.id} user={user}></AddComment>}
            {comment.replies.length ? <div className="indented-comments">
                <div className="line"></div>
                <CommentList className="indented-comments"
                    saveComment={saveComment}
                    deleteComment={deleteComment}
                    setComments={setComments}
                    comments={comment.replies}
                    updateScore={updateScore}
                    user={user} />
            </div> : ''}
        </section>
    )
}

