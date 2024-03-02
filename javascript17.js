function toggleLike(button) {
    button.innerText = button.innerText === 'Like' ? 'Liked' : 'Like';
}

function addComment() {
    const userNameInput = document.getElementById('user-name');
    const newCommentInput = document.getElementById('new-comment');
    const commentSection = document.querySelector('.comment-section');

    // Get the values of the name and the new comment
    const userName = userNameInput.value.trim();
    const newCommentText = newCommentInput.value.trim();

    // Check if both name and comment are not empty
    if (userName !== '' && newCommentText !== '') {
        // Create a new comment element
        const newCommentElement = document.createElement('div');
        newCommentElement.classList.add('comment');
        newCommentElement.innerHTML = `<p><strong>${userName}:</strong> ${newCommentText}</p>`;

        // Append the new comment to the comment section
        commentSection.appendChild(newCommentElement);

        // Clear the input fields
        userNameInput.value = '';
        newCommentInput.value = '';
    }
}