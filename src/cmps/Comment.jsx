import React, { useState } from 'react'
import { AddComment } from './AddComment'
import { CommentList } from './CommentList'

export function Comment({ setComments, comment, updateScore, user }) {

    const [isReplying, setIsReplying] = useState(false)

    function onUpdateScore(updateBy) {
        updateScore(comment.id, updateBy)
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
                    <p>{comment.content}</p>
                </div>
                <button onClick={() => { setIsReplying(true) }} className="reply-btn">Reply</button>
            </div>
            {isReplying && 
                <AddComment setIsReplying={setIsReplying} setComments={setComments} commentId={comment.id} user={user}></AddComment>}
            {comment.replies.length ? <div className="indented-comments">
                <div className="line"></div>
                <CommentList className="indented-comments" setComments={setComments}
                    comments={comment.replies}
                    updateScore={updateScore}
                    user={user} />
            </div> : ''}
        </section>
    )
}

