import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthForm } from '../hooks/useAuth';
import AuthLayout from '../components/auth/AuthLayout';
import InputField from '../components/forms/InputField';
import SubmitButton from '../components/forms/SubmitButton';

export default function Login() {
  const { error, loading, handleAuth } = useAuthForm(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleAuth(formData.email, formData.password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle={
        <>
          Or{' '}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            create a new account
          </Link>
        </>
      }
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <InputField
          id="email"
          name="email"
          type="email"
          label="Email address"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

        <InputField
          id="password"
          name="password"
          type="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />

        <div className="flex items-center justify-end">
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Forgot your password?
          </Link>
        </div>

        <SubmitButton disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </SubmitButton>
      </form>
    </AuthLayout>
  );
}