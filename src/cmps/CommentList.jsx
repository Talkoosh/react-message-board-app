import React, { useEffect, useState } from 'react'
import { Comment } from './Comment.jsx';


export function CommentList({ saveComment, deleteComment, setComments, comments, updateScore, user }) {

    return (
        <ul className="comment-list">
            {comments && comments.map((comment) => {
                return <li
                    className="comment-item"
                    key={comment.id}>
                    <Comment
                        saveComment={saveComment}
                        deleteComment={deleteComment}
                        setComments={setComments}
                        user={user}
                        updateScore={updateScore}
                        comment={comment} />
                </li>
            })}
        </ul>
    )
}
