import React, { useEffect } from 'react';
import { loadTawkTo } from '../../utils/tawkto';

export default function TawkChat() {
  useEffect(() => {
    loadTawkTo();
  }, []);

  return null; // Tawk.to widget injects itself into the DOM
}