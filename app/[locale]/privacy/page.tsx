import ServerIntlProvider from "@/components/serverIntlProvider";
import Link from "next/link";
import React from "react";
import getIntl from "../intl";

export const metadata = {
  title: "Privacy Policy",
};

const PrivacyPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale: sLocale } = await params;

  const { locale, messages } = await getIntl(sLocale);

  return (
    <ServerIntlProvider messages={messages} locale={locale}>
      <div className="max-w-[1280px] mx-auto px-10 flex flex-col gap-5 mb-[100px]">
        <h1 className="text-center text-[36px] font-[700]">Privacy Policy </h1>

        <p>
          This Privacy Policy governs the manner in which LoveDrama (“We” /
          “Our” / “Us”) collects, uses, stores, maintains, secures, and
          discloses information collected from users (each, a “User” / “You” /
          “Your”) of LoveDrama apps and the https://lovedrama.tv website. This
          Privacy Policy is part of and shall be read with the Terms of Service.
          This Privacy Policy applies to all present and future LoveDrama apps
          and websites (“LoveDrama”).{" "}
        </p>

        <p className="font-[700] text-[20px]">Collection, Use & Retention</p>

        <p className="subtitle">Personal Information </p>

        <p>
          We may collect information capable of identifying an individual or
          connected to the individual (“Personal Information”), such as name,
          email address, contact number, display picture, as well as other
          details such as gender and date of birth. Users provide this
          information in various ways, including but not limited to visiting Our
          Apps or Website, registering on the Platforms, contacting Us, and
          engaging in activities, services, features, or resources made
          available on Our Apps or Website.{" "}
        </p>

        <p className="subtitle">Non-Personal Information </p>

        <p>
          We may also collect information that cannot directly identify an
          individual (“Non-Personal Information”) whenever Users interact with
          Our Apps or Website. Non-Personal Information may include language
          preferences, country, browser name, device type, operating system,
          Internet service provider details, and other technical information
          about Users’ connection to Our Apps or Website.{" "}
        </p>

        <p className="subtitle">Use of Information </p>

        <p>
          We may use the Personal Information and Non-Personal Information that
          We collect from You in the following ways:
        </p>

        <ul className="pl-10 list-decimal">
          <li>
            To enable You to use Our Apps and Website and enforce Our Terms of
            Service.
          </li>
          <li>
            To personalize Your experience and deliver content and product
            offerings aligned with Your interests.
          </li>
          <li>
            To improve troubleshooting, functionality, and security measures of
            the Platforms.
          </li>
          <li>
            To communicate with You and better address Your customer service
            requests.
          </li>
          <li>To ask for ratings and reviews of services or products. </li>
          <li>
            To comply with applicable laws and legal or regulatory obligations.
          </li>
          <li>
            To send periodic emails: We may use the email address to send
            information and updates about Your order or respond to inquiries,
            questions, or other requests.
          </li>
        </ul>

        <p className="subtitle">Security </p>

        <p>
          We take reasonable precautions to protect Your Personal and
          Non-Personal Information using industry-standard technical and
          administrative security measures to minimize the risk of loss, misuse,
          unauthorized access, disclosure, or alteration. All Personal
          Information is securely stored on our own servers, managed and
          maintained by our dedicated infrastructure team to ensure the highest
          levels of data protection.{" "}
        </p>
        <p>
          We use regular Malware Scanning and other security protocols; however,
          we do not use vulnerability scanning to PCI standards. We never ask
          for credit card numbers through our Platforms.{" "}
        </p>

        <p className="subtitle">Sharing & Disclosure </p>

        <p>
          We do not sell, trade, rent, or otherwise transfer Your Personal
          Information to third parties. However, we may engage trusted
          third-party service providers (“Service Providers”) to assist in
          providing services such as advertising, infrastructure, IT services,
          and payment processing. These Service Providers may have access to
          Your Personal and Non-Personal Information solely for providing their
          services. Examples include:
        </p>

        <table>
          <thead>
            <tr>
              <td className="subtitle py-2">Third Party Service Provider</td>
              <td className="subtitle py-2">Link to Privacy Policy </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Adapty</td>
              <td>
                <Link
                  target="_blank"
                  href="https://adapty.io/privacy/"
                  className="gradient-link"
                >
                  https://adapty.io/privacy/
                </Link>
              </td>
            </tr>
            <tr>
              <td className="py-2">Amplitude </td>
              <td>
                <Link
                  target="_blank"
                  href="https://amplitude.com/privacy"
                  className="gradient-link"
                >
                  https://amplitude.com/privacy{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          We may disclose certain Personal or Non-Personal Information to comply
          with legal obligations, enforce Our Terms of Service, or during
          mergers, acquisitions, or asset sales.
        </p>

        <p className="subtitle">Consent </p>

        <p>
          We collect Personal Information only when voluntarily provided by
          Users. Users may modify or delete their profiles or withdraw consent.
          We may retain Personal Information for up to 180 days to comply with
          legal obligations and use anonymized information to improve Our
          services.{" "}
        </p>

        <p>
          Users may revoke their consent at any time by writing
          to drama@ktrend.ae. Upon revocation, Users will no longer have access
          to services on the Platforms.{" "}
        </p>

        <p className="subtitle">Changes to this Privacy Policy </p>

        <p>
          LoveDrama may update this Privacy Policy at any time. When updated, a
          notification will be posted on the main page of our Website. Users are
          encouraged to review this page periodically to stay informed about
          updates. Continued use of Our Platforms after changes to this Privacy
          Policy constitutes acceptance of those changes.
        </p>

        <p className="subtitle">Grievance Redressal </p>

        <p>
          If you are affected by any content that violates these Terms of
          Service you can write to Our Grievance Officer at:{" "}
        </p>

        <ul className="pl-10 list-disc">
          <li>
            Email:{" "}
            <a href="mailto:drama@ktrend.ae" className="gradient-link">
              drama@ktrend.ae
            </a>
          </li>
        </ul>

        <p>Please include: </p>

        <ul className="pl-10 list-decimal">
          <li>
            A description of the content violating the Terms or Community
            Guidelines.
          </li>
          <li>The URL or location of the content. </li>
          <li>Supporting documents or sources, if applicable. </li>
          <li>
            Your physical or electronic signature (type your full legal name).{" "}
          </li>
        </ul>

        <p>Grievance Process: </p>
        <ul className="pl-10 list-decimal">
          <li>
            Acknowledgment: Receipt of grievances will be acknowledged within 24
            hours.
          </li>
          <li>
            Ticket Number: A unique ticket number will be issued to track the
            grievance.{" "}
          </li>
          <li>
            Resolution: Based on Our review, content violating Our Terms or
            Guidelines may be taken down within 15 days of receiving the
            grievance.{" "}
          </li>
        </ul>

        <p className="subtitle">Contacting Us </p>

        <p>
          For any questions about this Privacy Policy, please email{" "}
          <a href="mailto:drama@ktrend.ae" className="gradient-link">
            drama@ktrend.ae
          </a>
          .{" "}
        </p>

        <p className="subtitle">
          This document was last updated on 21 April, 2025.
        </p>
      </div>
    </ServerIntlProvider>
  );
};

export default PrivacyPage;
