import React, {useState } from 'react';
import { chatService } from '../services/chatService';

export function AddComment({setIsReplying, setComments, user, commentId}) {
    const [commentTxt, setCommentTxt] = useState('')

    function setComment({target}){
        setCommentTxt(target.value);
    }

    async function addComment(commentTxt) {
      await chatService.addComment(commentTxt, user, commentId);
      const newComments = await chatService.loadComments();
      setComments([...newComments]);
      setCommentTxt('');
      
      if(setIsReplying){
        setIsReplying(false)
      }
  }

  if(!user) return <></>
  else return (
    <section className="add-comment">
      {setIsReplying && <button onClick={() => {setIsReplying(false)}} className="add-exit">x</button>}
        {user && <div className="add-comment">
            <img src={user?.image?.png} alt="" />
            <textarea value={commentTxt} name="comment-text" onChange={(ev) => setComment(ev)} placeholder="Add a comment..." cols="30" rows="10"></textarea>
            <button className="send-btn" onClick={() => {addComment(commentTxt)}}>Send</button>
        </div>}
    </section>
  )
}
