import { Footer } from "../Components";
const Terms = () => {
  return (
    <section className="">
      <h2 className="section-headers text-center mt-4">Terms Of Use</h2>
      <div className="container w-[80%] mx-auto my-7">
        <h3 className="font-bold text-xl py-2">Privacy Policy for Nile</h3>
        <p>
          <strong className="py-2">Effective Date: </strong>
          <span> 1st January, 2025.</span>
        </p>
        <p className="py-2">
          Nile Africa Technologies Limited ("Nile", "we", "us", or "our") is
          committed to protecting your privacy. This Privacy Policy outlines how
          we collect, use, store, and share your personal information when you
          use the Nile platform, website, and related services.
        </p>
        {/* main content */}
        <div className="mb-5">
          <strong className="block py-2">1. Information We Collect</strong>
          <span className="">We may collect the following types of data:</span>
          <ul className="pl-10">
            <li className="list-disc p-2">
              <strong className="py-2">Personal Information</strong> : Name,
              phone number, email address, business name, and other contact
              details.
            </li>
            <li className="list-disc p-2">
              <strong className="py-2">Business Data</strong> : Product
              listings, sales data, order records, and inventory details
            </li>
            <li className="list-disc p-2">
              <strong className="py-2">Device & Usage Data</strong> : IP
              address, device type, operating system, app usage metrics, and
              logs.
            </li>
            <li className="list-disc p-2">
              <strong className="py-2">Payment & Financial Information</strong>{" "}
              : Bank details for settlement, transaction records. Card details
              are handled via Paystack and not stored by us.
            </li>
          </ul>
          <strong className="block pt-4 pb-2">
            2. How We Use Your Information
          </strong>
          <span className=""> We use your information to:</span>
          <ul className="pl-10">
            <li className="list-disc py-2">Provide and improve our services</li>
            <li className="list-disc py-2">
              Process transactions and manage settlements
            </li>
            <li className="list-disc py-2">
              Communicate updates, support info, or promotional offers
            </li>
            <li className="list-disc py-2">
              Ensure platform security and fraud prevention
            </li>
            <li className="list-disc py-2">Comply with legal obligations</li>
          </ul>
          <strong className="pt-4 pb-2 block">3. Data Sharing</strong>
          <span>We only share your data with:</span>
          <ul className="pl-10">
            <li className="p-2 list-disc">
              Third-party service providers like Paystack or analytics tools
            </li>
            <li className="p-2 list-disc">Legal authorities when required</li>
            <li className="p-2 list-disc">
              Business partners if Nile is involved in a merger or acquisition
              (with notice)
            </li>
          </ul>
          <span className="block pt-4">We do not sell your personal data.</span>
          <p>
            <strong className="py-2 block"> 4. Security</strong>
            <span>
              We implement encryption, access control, and secure systems to
              protect your data. However, no system is 100% secure.
            </span>
          </p>
          <p>
            <strong className="py-2 block"> 5. Your Rights</strong>
            <span>
              {" "}
              You may request access, correction, or deletion of your data by
              contacting:
              <br /> <strong>support@nile.ng</strong>
            </span>
          </p>
          <p>
            <strong className="py-2 block"> 6. Data Retention</strong>
            <span>
              {" "}
              Your data will be retained only for as long as needed for service
              delivery, legal compliance, or dispute resolution.
            </span>
          </p>
          <p>
            <strong className="py-2 block"> 7. Children’s Privacy</strong>
            <span>
              {" "}
              Nile is not intended for use by individuals under 18 years of age.
            </span>
          </p>
          <p>
            <strong className="py-2 block">8. Changes to This Policy</strong>
            <span>
              {" "}
              We may update this policy from time to time. Significant changes
              will be communicated via email or in-app notification.
            </span>
          </p>
        </div>
        <hr />
        <article className="mb-5">
          <h3 className="font-bold text-xl py-2">
            Terms and Conditions for Nile
          </h3>
          <strong className="py-2">Effective Date: </strong>
          <span> 1st January, 2025.</span>
          <p>
            By accessing or using Nile’s platform or services, you agree to the
            following Terms and Conditions. Please
            <br /> read them carefully.
          </p>
          <p>
            <strong className="block py-2">1. Use of the Platform</strong>
            <span>
              Nile provides business tools, storefronts, invoicing, inventory
              tracking, and payment processing services to small and medium
              enterprises. You agree to use the platform only for lawful
              business purposes.
            </span>
          </p>
          <p>
            <strong className="block py-2">2. Account Responsibility</strong>
            <span>
              {" "}
              You are responsible for keeping your account credentials
              confidential. Nile is not liable for unauthorized access resulting
              from your failure to secure your account.
            </span>
          </p>
          <p>
            <strong className="block py-2">3. Payments and Transactions</strong>
            <span>
              All transactions are processed securely via Paystack. Nile does
              not store card details. Nile may earn transaction fees for
              payments processed through its platform.
            </span>
          </p>
          <div>
            <strong className="block pt-2">4. Acceptable Use</strong>
            <span className="block py-3">Users may not:</span>
            <ul className="pl-10">
              <li className="list-disc p-1">
                Use Nile to conduct illegal or fraudulent activities
              </li>
              <li className="list-disc p-1">
                Upload malicious software or content
              </li>
              <li className="list-disc p-1">
                Infringe on the intellectual property rights of others
              </li>
              <li className="list-disc p-1">
                Attempt to reverse engineer or disrupt the service
              </li>
            </ul>
          </div>
          <p>
            <span className="block py-3">
              Violation may result in suspension or termination of your account.
            </span>
            <strong className="block py-2">5. Intellectual Property</strong>
            <span>
              All content, branding, and technology on the platform belong to
              Nile Africa Technologies Limited. Users may not copy or reuse
              platform code or design elements.
            </span>
          </p>{" "}
          <p>
            <strong className="block py-2"> 6. Liability Disclaimer</strong>
            <span>
              Nile provides its services “as is” without warranties of any kind.
              We do not guarantee uninterrupted or error-free operation and are
              not responsible for any losses resulting from system downtime or
              service disruption.
            </span>
          </p>{" "}
          <p>
            <strong className="block py-2">7. Termination</strong>
            <span>
              We may suspend or terminate your account at our discretion if
              these terms are violated or for other business or legal reasons.
            </span>
          </p>{" "}
          <p>
            <strong className="block py-2">8. Governing Law</strong>
            <span>
              These terms are governed by the laws of the Federal Republic of
              Nigeria.
            </span>
          </p>{" "}
          <p>
            <strong className="block py-2"> 9. Contact</strong>
            <span>
              If you have any questions or concerns:
              <br />
              <strong>Email:</strong> support@nile.ng
            </span>
          </p>
        </article>
      </div>
      <Footer />
    </section>
  );
};

export default Terms;
