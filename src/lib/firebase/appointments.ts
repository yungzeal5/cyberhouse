import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

export interface Appointment {
  date: string;
  time: string;
  service: string;
  notes: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: any;
  userId: string | null;
  email: string | null;
}

export const createAppointment = async (appointmentData: Omit<Appointment, 'status' | 'createdAt'>) => {
  try {
    // Validate required fields
    if (!appointmentData.date || !appointmentData.time || !appointmentData.service) {
      throw new Error('Missing required appointment fields');
    }

    // Ensure all fields are properly formatted
    const appointment = {
      date: appointmentData.date,
      time: appointmentData.time,
      service: appointmentData.service,
      notes: appointmentData.notes || '',
      status: 'pending' as const,
      createdAt: serverTimestamp(),
      userId: appointmentData.userId || null,
      email: appointmentData.email || null
    };
    
    const docRef = await addDoc(collection(db, 'appointments'), appointment);
    return docRef.id;
  } catch (error: any) {
    console.error('Appointment creation error:', error);
    throw new Error(error.message || 'Failed to schedule appointment. Please try again.');
  }
};