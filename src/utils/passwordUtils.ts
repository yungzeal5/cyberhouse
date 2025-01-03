// SHA-1 hashing utility
export async function sha1(msg: string): Promise<string> {
  const utf8 = new TextEncoder().encode(msg);
  const hashBuffer = await crypto.subtle.digest('SHA-1', utf8);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Password strength checker utility
export function checkPasswordStrength(password: string): {
  strength: number;
  message: string;
  color: string;
} {
  let strength = 0;

  if (password.length >= 12) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength++;
  
  const commonWords = ["password", "123456", "qwerty"];
  if (!commonWords.some(word => password.toLowerCase().includes(word))) strength++;

  let message = 'Weak';
  let color = 'bg-gradient-to-r from-red-500 to-red-600';
  
  if (strength >= 5) {
    message = 'Strong';
    color = 'bg-gradient-to-r from-green-500 to-blue-600';
  } else if (strength >= 3) {
    message = 'Medium';
    color = 'bg-gradient-to-r from-yellow-500 to-orange-500';
  }

  return { strength, message, color };
}