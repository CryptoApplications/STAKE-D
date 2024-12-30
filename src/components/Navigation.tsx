import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="flex gap-8">
      <Link 
        to="/support" 
        className="text-lg font-medium hover:text-emerald-400 transition-colors"
      >
        Support
      </Link>
      <Link 
        to="/privacy" 
        className="text-lg font-medium hover:text-emerald-400 transition-colors"
      >
        Privacy Policy
      </Link>
    </nav>
  );
}

export default Navigation;