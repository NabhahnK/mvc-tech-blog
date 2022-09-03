const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

const upButtonHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');
  document.location.replace(`/update/${id}`);
};


document
  .querySelector('#delButtonHandler')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('#upButtonHandler')
  .addEventListener('click', upButtonHandler);