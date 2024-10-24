import React from 'react';
import './PrivacyPage.css';

const PrivacyPage = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-heading">Privacy Policy</h1>
      <p className="privacy-last-updated">Last updated: [Date]</p>
      <p className="privacy-text">
        At [App Name], your privacy is a priority. This Privacy Policy explains how we collect, use, disclose, 
        and safeguard your information when you use our application. Please read this privacy policy carefully. 
        By using our app, you agree to the collection and use of information in accordance with this policy.
      </p>

      <h2 className="privacy-subheading">1. Information We Collect</h2>
      <p className="privacy-text">We collect the following types of information:</p>
      <ul className="privacy-list">
        <li><strong>Personal Data:</strong> While using our app, you may be asked to provide certain personally identifiable information (such as name, email, etc.), but we only collect what is necessary for functionality.</li>
        <li><strong>Usage Data:</strong> We may collect information on how the app is accessed and used, including your IP address, browser type, version, the pages you visit, and the time and date of your visit.</li>
        <li><strong>Cookies and Tracking Technologies:</strong> Our app may use cookies and similar technologies to enhance your experience. You can instruct your browser to refuse cookies, but this may limit certain features.</li>
      </ul>

      <h2 className="privacy-subheading">2. How We Use Your Information</h2>
      <ul className="privacy-list">
        <li>To operate and maintain the app</li>
        <li>To improve and personalize the user experience</li>
        <li>To communicate with you, including updates and support</li>
        <li>To monitor usage and performance of the app</li>
      </ul>

      <h2 className="privacy-subheading">3. Sharing Your Information</h2>
      <p className="privacy-text">We do not sell, trade, or rent your personal data. However, we may share data with:</p>
      <ul className="privacy-list">
        <li><strong>Service Providers:</strong> We may employ third-party companies to assist with operating the app or provide services on our behalf.</li>
        <li><strong>Legal Compliance:</strong> If required by law, we may disclose your personal data to comply with legal obligations.</li>
      </ul>

      <h2 className="privacy-subheading">4. Data Security</h2>
      <p className="privacy-text">
        We take appropriate measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
      </p>

      <h2 className="privacy-subheading">5. Your Privacy Rights</h2>
      <ul className="privacy-list">
        <li>Request access to your personal data</li>
        <li>Request corrections to any personal information we hold</li>
        <li>Withdraw consent where applicable</li>
      </ul>

      <h2 className="privacy-subheading">6. Changes to This Privacy Policy</h2>
      <p className="privacy-text">
        We may update this Privacy Policy from time to time. Any changes will be reflected in the “Last updated” section, and your continued use of the app will signify your acceptance of those changes.
      </p>

      <h2 className="privacy-subheading">7. Contact Us</h2>
      <p className="privacy-text">
        If you have any questions about this Privacy Policy, please contact us at: [Your Contact Information].
      </p>
    </div>
  );
};

export default PrivacyPage;
