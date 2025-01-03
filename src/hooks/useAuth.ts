import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../lib/firebase/auth';
import { createDocument } from '../lib/firebase/firestore';

interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export const useAuthForm = (isLogin = true) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setError('');
    setLoading(true);
    try {
      await signIn(email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (data: RegisterData) => {
    setError('');
    setLoading(true);
    try {
      const user = await signUp(data.email, data.password);
      await createDocument('users', {
        uid: user.uid,
        name: data.name,
        email: data.email,
        createdAt: new Date().toISOString()
      });
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    handleAuth: isLogin ? handleLogin : handleRegister
  };
};