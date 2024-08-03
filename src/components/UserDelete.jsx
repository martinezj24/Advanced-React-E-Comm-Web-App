import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteUser = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem('user'));
  const userId = user ? user.id : null;

  const handleDelete = async () => {
    setError('');

    try {
      const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        sessionStorage.clear();
        navigate('/login'); // Redirect to the Login component
      } else {
        setError('Failed to delete the account. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Delete Account</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Are you sure you want to delete your account? This action cannot be undone.</p>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default DeleteUser;
