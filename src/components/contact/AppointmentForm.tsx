import React, { useState } from 'react';
import InputField from '../forms/InputField';
import SubmitButton from '../forms/SubmitButton';
import { Calendar, Clock } from 'lucide-react';
import { useAppointment } from '../../hooks/useAppointment';

export default function AppointmentForm() {
  const { loading, error, success, scheduleAppointment } = useAppointment();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const services = [
    'Security Consultation',
    'Vulnerability Assessment',
    'Security Training',
    'Incident Response Planning',
    'Security Audit',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await scheduleAppointment(formData);
    if (success) {
      setFormData({ date: '', time: '', service: '', notes: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Get tomorrow's date as the minimum date for appointments
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm">
          Your appointment has been scheduled successfully! We'll contact you shortly to confirm.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <InputField
            id="date"
            name="date"
            type="date"
            label="Preferred Date"
            value={formData.date}
            onChange={handleChange}
            required
            min={minDate}
          />
          <Calendar className="absolute right-3 top-9 h-5 w-5 text-gray-400" />
        </div>

        <div className="relative">
          <InputField
            id="time"
            name="time"
            type="time"
            label="Preferred Time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <Clock className="absolute right-3 top-9 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
          Service Type
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Please provide any specific details or requirements"
        />
      </div>

      <SubmitButton disabled={loading}>
        {loading ? 'Scheduling...' : 'Schedule Appointment'}
      </SubmitButton>
    </form>
  );
}