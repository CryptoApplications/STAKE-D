import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-950 text-white p-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-emerald-100">
          <div className="bg-emerald-800/20 p-6 rounded-lg border border-emerald-800">
            <p className="text-xl font-semibold mb-2">Important Notice:</p>
            <p>STAKE'D does not collect any personal information or data from its users. This application operates completely offline and does not require any personal data to function.</p>
          </div>

          <p>This privacy policy applies to the STAKE'D app (hereby referred to as "Application") for mobile devices that was created by MILL (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What information does the Application obtain and how is it used?</h2>
            <p><strong>No personal information is collected.</strong> The Application does not obtain any information when you download and use it. Registration is not required to use the Application.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Does the Application collect precise real time location information of the device?</h2>
            <p>No. This Application does not collect precise information about the location of your mobile device.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Do third parties see and/or have access to information obtained by the Application?</h2>
            <p>No. Since the Application does not collect any information, no data is shared with third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What are my opt-out rights?</h2>
            <p>Since no information is collected, there is nothing to opt out from. However, you can uninstall the Application at any time using the standard uninstall processes available on your mobile device or via the mobile application marketplace.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children</h2>
            <p>The Application is not used to knowingly solicit data from or market to children under the age of 13. No personal information is collected from anyone, regardless of age.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Security</h2>
            <p>Since the Application does not collect any personal information or data, there is no risk of your data being accessed, lost, or compromised.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes</h2>
            <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
            <p className="mt-4">This privacy policy is effective as of 2024-12-30</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Consent</h2>
            <p>By using the Application, you acknowledge that no personal information is collected and consent to this privacy policy as amended by the Service Provider.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at rockstarmediauk@gmail.com.</p>
          </section>

          <hr className="border-emerald-800 my-8" />

         
        </div>
      </div>
    </div>
  );
}

export default Privacy;