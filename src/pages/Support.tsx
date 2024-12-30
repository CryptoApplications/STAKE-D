import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-950 text-white p-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>
      
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Support</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-emerald-100">
              For any questions or concerns, please reach out to our support team at:
              rockstarmediauk@gmail.com
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">How can I get started?</h3>
                <p className="text-emerald-100">
                  Getting started is easy! Simply download from the app store and start adding your staked tokens.
                </p>
              </div>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Support;