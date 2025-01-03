import React from 'react';

interface SubmitButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export default function SubmitButton({ children, disabled }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
        disabled 
          ? 'bg-blue-400 cursor-not-allowed' 
          : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      }`}
    >
      {children}
    </button>
  );
}