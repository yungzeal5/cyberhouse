import { useState } from 'react';
import { createAppointment, Appointment } from '../lib/firebase/appointments';
import { useAuth } from '../contexts/AuthContext';

export const useAppointment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();

  const scheduleAppointment = async (appointmentData: Omit<Appointment, 'status' | 'createdAt' | 'userId' | 'email'>) => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await createAppointment({
        ...appointmentData,
        userId: user?.uid,
        email: user?.email
      });
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
    scheduleAppointment
  };
};