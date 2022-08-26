const commentFormHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#comment-input').value.trim();
  const post = document.querySelector('.posts')
  const post_id = post.getAttribute('data-postID');

  if (text && post_id) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ text, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/comment');
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment')
  .addEventListener('submit', commentFormHandler);