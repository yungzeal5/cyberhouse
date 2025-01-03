import React, { useState } from 'react';
import InputField from '../forms/InputField';
import SubmitButton from '../forms/SubmitButton';
import { useContactForm } from '../../hooks/useContactForm';

export default function ContactForm() {
  const { loading, error, success, handleSubmit } = useContactForm();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(formData);
    if (!error) {
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <InputField
        id="name"
        name="name"
        type="text"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <InputField
        id="email"
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <InputField
        id="phone"
        name="phone"
        type="tel"
        label="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <SubmitButton disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </SubmitButton>
    </form>
  );
}