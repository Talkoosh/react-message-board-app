export const chatService = {
    loadComments,
    addComment,
    updateScore
}

let gComments = require('../data/data.json').comments;

function loadComments() {
    return Promise.resolve([...gComments]);
}

function addComment(txt, byUser, parentId) {
    const comment = _createComment(txt, byUser);
    if (parentId) {
        const parentComment = _getComment(parentId);
        parentComment.replies.push(comment);
    } else {
        gComments.push(comment); 
    }

    return Promise.resolve();
}

function updateScore(commentId, updateBy) {
    let comment = _getComment(commentId);
    comment.score += updateBy;
}

function _getComment(id, comments = gComments) {

    for (var i = 0; i < comments.length; i++) {
        if (comments[i].id === id) return comments[i];
        if (comments[i].replies.length) {
            const currComment = _getComment(id, comments[i].replies);
            if (currComment) return currComment;
        }
    }
    return null;
}

function _createComment(content, user) {
    return {
        content,
        user,
        createdAt: 'Just Now',
        score: 0,
        replies: [],
        id: Math.floor(Math.random() * 1000)
    }
}