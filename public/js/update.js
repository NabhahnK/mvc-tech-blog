const upButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const title = document.querySelector('#post-name').value.trim()
        const text = document.querySelector('#post-desc').value.trim();
        const newInfo = { title, text }

        const response = await fetch(`/api/post/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete post');
        }
    }
};


document
    .querySelector('#upButtonHandler')
    .addEventListener('click', upButtonHandler);