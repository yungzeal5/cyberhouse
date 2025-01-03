import { useState } from 'react';
import { submitContactForm } from '../services/contact';

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await submitContactForm(formData);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    handleSubmit
  };
};