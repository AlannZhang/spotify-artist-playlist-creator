import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import hash from './hash';

const RedirectPage = () => {
  const history = useHistory();

  useEffect(() => {
    const retrievedToken = hash.access_token;

    const checkToken = async () => {
      try {  
        if (retrievedToken) {
          const token = retrievedToken;
          localStorage.setItem('token', JSON.stringify(token));
          console.log(token);
          history.push('/create');
        } else {
          history.push('/');
        }
      } catch (error) {
        console.error(error);
      }
    }

    checkToken();
  });

  return null;
};

export default RedirectPage;
