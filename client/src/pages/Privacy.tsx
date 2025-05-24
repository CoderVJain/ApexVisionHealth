import { Helmet } from "react-helmet";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Apex Vision MNS</title>
        <meta 
          name="description" 
          content="Learn how Apex Vision MNS collects, uses, and protects your personal information. We are committed to protecting your privacy." 
        />
      </Helmet>
      <div>
        {/* Policy Header */}
        <div className="bg-neutral-200 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-400 text-center">Privacy Policy</h1>
            <p className="mt-4 text-center text-neutral-300 max-w-2xl mx-auto">
              Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none text-neutral-400">
              <h2 className="text-2xl font-heading font-bold mb-4">1. Introduction</h2>
              <p className="mb-6">
                At Apex Vision MNS, we are committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our services.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect several types of information, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Personal identification information (name, email address, phone number, etc.)</li>
                <li>Health information (for healthcare services)</li>
                <li>Financial information (for accounting services)</li>
                <li>Usage data and cookies</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for various purposes, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Providing and maintaining our services</li>
                <li>Processing appointments and transactions</li>
                <li>Communicating with you about our services</li>
                <li>Improving our services and customer experience</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Healthcare providers or financial institutions as necessary for your services</li>
                <li>Service providers who assist us in operating our business</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mb-4">5. Data Security</h2>
              <p className="mb-6">
                We implement appropriate security measures to protect your personal information from unauthorized access,
                alteration, disclosure, or destruction. However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">6. Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your personal information</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mb-4">7. Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">8. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              <p>
                Apex Vision MNS
                <br />
                123 Business Avenue, Suite 200
                <br />
                Metropolitan City, State 12345
                <br />
                Email: privacy@apexvisionmns.com
                <br />
                Phone: (555) 123-4567
              </p>

              <p className="mt-8 text-sm text-neutral-300">Last Updated: January 1, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
