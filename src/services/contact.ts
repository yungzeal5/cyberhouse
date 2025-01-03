import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase/config';
import { ContactMessage } from '../types/contact';

export const submitContactForm = async (data: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
  try {
    const contactData: Omit<ContactMessage, 'id'> = {
      ...data,
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    
    const docRef = await addDoc(collection(db, 'contact_messages'), contactData);
    return docRef.id;
  } catch (error: any) {
    throw new Error('Failed to submit contact form. Please try again.');
  }
};