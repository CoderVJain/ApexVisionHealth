import { Helmet } from "react-helmet";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Apex Vision MNS</title>
        <meta 
          name="description" 
          content="Please read the terms and conditions carefully before using Apex Vision MNS healthcare and accounting services." 
        />
      </Helmet>
      <div>
        {/* Terms Header */}
        <div className="bg-neutral-200 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-400 text-center">
              Terms and Conditions
            </h1>
            <p className="mt-4 text-center text-neutral-300 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none text-neutral-400">
              <h2 className="text-2xl font-heading font-bold mb-4">1. Introduction</h2>
              <p className="mb-6">
                Welcome to Apex Vision MNS. These terms and conditions outline the rules and regulations for the use of
                our services.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">2. Services</h2>
              <p className="mb-4">
                Apex Vision MNS provides healthcare and accounting services as described on our website. We reserve the
                right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
              <p className="mb-6">
                By accessing or using our services, you agree to be bound by these terms and conditions. If you disagree
                with any part of these terms, you may not access or use our services.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">3. Appointments and Scheduling</h2>
              <p className="mb-6">
                Appointments must be scheduled in advance. Cancellations must be made at least 24 hours before the
                scheduled appointment time to avoid cancellation fees. We reserve the right to charge for missed
                appointments or late cancellations.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">4. Payment Terms</h2>
              <p className="mb-4">
                Payment is due at the time services are rendered unless prior arrangements have been made. We accept
                various payment methods as indicated during the payment process.
              </p>
              <p className="mb-6">
                For ongoing services, payment schedules will be established and communicated in advance. Late payments
                may incur additional fees.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">5. Confidentiality</h2>
              <p className="mb-6">
                We maintain strict confidentiality regarding all client information in accordance with applicable laws
                and regulations. Please refer to our Privacy Policy for more details on how we handle your personal
                information.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">6. Limitation of Liability</h2>
              <p className="mb-6">
                To the maximum extent permitted by law, Apex Vision MNS shall not be liable for any direct, indirect,
                incidental, special, consequential, or punitive damages arising out of or in any way connected with your
                use of our services.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">7. Changes to Terms</h2>
              <p className="mb-6">
                We reserve the right to update or modify these terms and conditions at any time without prior notice.
                Your continued use of our services after any changes indicates your acceptance of the revised terms.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">8. Contact Information</h2>
              <p className="mb-4">If you have any questions about these terms and conditions, please contact us:</p>
              <p>
                Apex Vision MNS
                <br />
                123 Business Avenue, Suite 200
                <br />
                Metropolitan City, State 12345
                <br />
                Email: legal@apexvisionmns.com
                <br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
