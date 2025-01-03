import React, { useEffect } from 'react';
import { initKommunicate } from '../../utils/kommunicate';

export default function AIChat() {
  useEffect(() => {
    initKommunicate();
  }, []);

  return null; // Kommunicate widget injects itself into the DOM
}