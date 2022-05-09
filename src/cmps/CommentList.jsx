import React, { useEffect, useState } from 'react'
import { Comment } from './Comment.jsx';


export function CommentList({ setComments, comments, updateScore, user }) {

    return (
        <ul className="comment-list">
            {comments && comments.map((comment) => {
                return <li
                    className="comment-item"
                    key={comment.id}>
                    <Comment
                        setComments={setComments}
                        user={user}
                        updateScore={updateScore}
                        comment={comment} />
                    {/* <ul className="indented-comments">
                        <div className="line"></div>
                        {comment.replies.map(reply => {
                            return <li className="comment-item" key={reply.id}>
                                <CommentList setComments={setComments}
                                    comments={comments}
                                    updateScore={updateScore}
                                    user={user} />
                            </li>
                        })}
                    </ul> */}
                </li>
            })}
        </ul>
    )
}
