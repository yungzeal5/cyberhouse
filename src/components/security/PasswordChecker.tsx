import React, { useState } from 'react';
import { Shield, Copy, RefreshCw, AlertTriangle } from 'lucide-react';
import { sha1, checkPasswordStrength } from '../../utils/passwordUtils';

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [strengthResult, setStrengthResult] = useState({ 
    strength: 0, 
    message: 'Enter a password', 
    color: 'bg-gray-200' 
  });

  const checkStrength = () => {
    const result = checkPasswordStrength(password);
    setStrengthResult(result);
  };

  const generatePassword = () => {
    const length = 16;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const newPassword = Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => chars[x % chars.length])
      .join('');
    setPassword(newPassword);
    setGeneratedPassword(newPassword);
    checkStrength();
  };

  const checkBreach = async () => {
    if (!password) {
      alert('Please enter a password to check');
      return;
    }

    try {
      const hashedPassword = (await sha1(password)).toUpperCase();
      const prefix = hashedPassword.substring(0, 5);
      const suffix = hashedPassword.substring(5);

      const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
      if (!response.ok) throw new Error('Failed to check password');

      const data = await response.text();
      const breaches = data.split('\n').map(line => line.split(':'));
      const match = breaches.find(([hashSuffix]) => hashSuffix === suffix);

      if (match) {
        const breachCount = parseInt(match[1], 10);
        alert(`⚠️ Warning: This password has been found in ${breachCount.toLocaleString()} data breaches. Please choose a different password!`);
      } else {
        alert('✅ Good news! This password hasn\'t been found in any known data breaches.');
      }
    } catch (error) {
      console.error('Error checking password breach:', error);
      alert('Failed to check password breach status. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Password Security Checker 🔒
      </h2>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Enter Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkStrength();
            }}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password to check"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={checkStrength}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Shield className="h-5 w-5" />
            Check Strength
          </button>
          <button
            onClick={checkBreach}
            className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
          >
            <AlertTriangle className="h-5 w-5" />
            Check Breaches
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Password Strength</span>
            <span>{strengthResult.message}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${strengthResult.color} transition-all duration-300`}
              style={{ width: `${(strengthResult.strength / 6) * 100}%` }}
            />
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Password Generator</h3>
            <button
              onClick={generatePassword}
              className="text-blue-600 hover:text-blue-700"
              title="Generate new password"
            >
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex gap-2">
            <input
              type="text"
              value={generatedPassword}
              readOnly
              className="flex-1 p-2 border rounded-lg bg-gray-50"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(generatedPassword);
                alert('Password copied to clipboard!');
              }}
              className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors"
              title="Copy to clipboard"
            >
              <Copy className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Strong Password Guidelines:</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
            <li>At least 12 characters long</li>
            <li>Mix of uppercase and lowercase letters</li>
            <li>Include numbers and special characters</li>
            <li>Avoid common words and patterns</li>
            <li>Don't reuse passwords across sites</li>
          </ul>
        </div>
      </div>
    </div>
  );
}