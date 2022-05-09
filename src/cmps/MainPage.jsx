import React, { useEffect, useState } from 'react';
import { chatService } from '../services/chatService';
import { CommentList } from './CommentList.jsx';
import { AddComment } from './AddComment';
import { userService } from '../services/userService';
import { useNavigate } from "react-router-dom";

export function MainPage() {
    const [comments, setComments] = useState(null);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    async function deleteComment(id) {
        await chatService.deleteComment(id)
        const currComments = await chatService.loadComments();
        setComments([...currComments]);
    }

    async function saveComment(commentId, commentTxt) {
        await chatService.saveComment(commentId, commentTxt);
        const currComments = await chatService.loadComments();
        setComments([...currComments]);
    }

    useEffect(() => {
        (async () => {
            try {
                const currComments = await chatService.loadComments();
                const currUser = await userService.getUser();
                setUser(currUser);
                setComments(currComments);
            } catch (err) {
                navigate('/login')
            }
        })();
    }, [])

    async function updateScore(commentId, updateBy) {
        chatService.updateScore(commentId, Number(updateBy));
        const newComments = await chatService.loadComments();
        setComments([...newComments]);
    }
    if (!user) return <div>Loading...</div>
    else return (
        <section className="chat-main">
            <CommentList saveComment={saveComment} deleteComment={deleteComment} setComments={setComments} user={user} updateScore={updateScore} comments={comments}></CommentList>
            <AddComment setComments={setComments} user={user} />
        </section>
    )
}
