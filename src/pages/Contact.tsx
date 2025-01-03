import React from 'react';
import { Mail, MapPin, Calendar, Clock } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import AppointmentForm from '../components/contact/AppointmentForm';

export default function Contact() {
  const handleAppointmentSubmit = (data: any) => {
    // Handle appointment submission
    console.log('Appointment data:', data);
    alert('Thank you for scheduling an appointment. We will confirm your booking shortly.');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team of security experts
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">cyberhouse008@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-600">Ghana</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Forms Section */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8">
                {/* Appointment Booking */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Schedule an Appointment</h2>
                  </div>
                  <AppointmentForm onSubmit={handleAppointmentSubmit} />
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}