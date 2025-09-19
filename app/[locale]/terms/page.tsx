import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Terms and Conditions",
};

const TermsPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-10 flex flex-col gap-5 mb-[100px]">
      <h1 className="text-center text-[36px] font-[700]">
        Terms and Conditions{" "}
      </h1>

      <p className="subtitle">
        LoveDrama Terms and Conditions have two sections:{" "}
      </p>
      <ul className="pl-10 list-decimal">
        <li>General Terms and Conditions and </li>
        <li>LoveDrama Coins Terms and Conditions. </li>
      </ul>

      <p className="italic">
        Please read these Terms and Conditions carefully before using the
        services offered by LoveDrama. These Terms and Conditions apply as they
        are to all current and future apps and websites operated by Kedoo
        Limited (“LoveDrama”).
      </p>

      <p className="subtitle">Your Acceptance </p>

      <p>
        {`1. By using or visiting the LoveDrama website, applications, or any
        LoveDrama products, software, data feeds, and services provided through
       K Trend LLC-FZ’s apps and websites for smartphones, tablets, and other
        web-enabled devices (collectively the "Service"), you signify your
        agreement withK Trend LLC-FZ to:`}
      </p>
      <ul className="pl-10 list-disc">
        <li>These terms and conditions (the {`"Terms of Service"`}), </li>
        <li>
          The Privacy Policy, found at{" "}
          <Link href="privacy" className="gradient-link">
            https://lovedrama.tv/privacy
          </Link>{" "}
          and incorporated herein by reference, and{" "}
        </li>
      </ul>

      <p>
        If you do not agree with these Terms of Service, the Privacy Policy
        please do not use the Service. The service is provided byK Trend LLC-FZ,
        referred to as {`"LoveDrama"`} in these Terms of Service.{" "}
      </p>

      <p>
        2. While we will notify you periodically of significant changes to these
        Terms of Service, you should review the most recent version
        at https://lovedrama.tv/terms regularly. LoveDrama, at its sole
        discretion, may modify or revise these Terms of Service and related
        policies at any time, and you agree to be bound by such modifications or
        revisions. Nothing in these Terms of Service is intended to confer any
        third-party rights or benefits.{" "}
      </p>

      <p className="subtitle">Service </p>

      <p>1. These Terms of Service apply to all users of the Service. </p>
      <p>
        2. The Service may include links to third-party websites not owned or
        controlled by LoveDrama. LoveDrama assumes no responsibility for the
        content, privacy policies, or practices of these third-party websites.
        By using the Service, you release LoveDrama from any liability arising
        from your use of third-party websites.{" "}
      </p>
      <p>
        3. We encourage you to exercise caution when leaving the Service and to
        review the terms and privacy policies of any third-party websites you
        visit.{" "}
      </p>

      <p className="subtitle">LoveDrama Accounts </p>

      <p>
        1. To access certain features of the Service, you must create a
        LoveDrama account throughK Trend LLC-FZ apps and/or websites. You are
        prohibited from using another individual’s account without their
        permission. When creating your account, you must provide accurate and
        complete information. You are solely responsible for any activity on
        your account and must keep your password secure. Notify LoveDrama
        immediately of any unauthorized use or security breaches.{" "}
      </p>
      <p>
        2. While LoveDrama is not liable for losses resulting from unauthorized
        use of your account, you may be held responsible for losses incurred by
        LoveDrama or others due to such unauthorized use.{" "}
      </p>
      <p>
        3. The account you create must not be fake, meaning it should not
        contain false information or impersonate another person through the use
        of their name, photo, or other identifying details.{" "}
      </p>

      <p className="subtitle">Plans and Refunds </p>

      <p>
        Our subscription plans include recurring payments, granting you
        uninterrupted access to our services.{" "}
      </p>

      <ul>
        <li>
           All purchases, including subscriptions and coins, are processed
          through the App Store or Google Play and are subject to their
          respective refund policies. For more details, you can refer to{" "}
          <Link
            href="https://support.apple.com/en-ae/118223"
            target="_blank"
            className="gradient-link"
          >
            {`Apple's`} refund policy
          </Link>{" "}
          or{" "}
          <Link
            href="https://support.google.com/googleplay/answer/2479637?hl=en"
            target="_blank"
            className="gradient-link"
          >
            Google {`Play's`} refund policy
          </Link>
          .
        </li>
        <li>
            Users on a free trial are not eligible for refunds on their first
          auto-renewal, as governed by the App Store or Google Play policies
        </li>
        <li>
           A 3-day refund policy may apply to renewals following the initial
          paid subscription, as per the policies of the respective platform.
          Refund processing times are determined by Apple or Google Play.{" "}
        </li>
      </ul>
      <p>
        We strongly recommend that you review course details carefully before
        making a purchase. Our courses are crafted to provide meaningful and
        enriching experiences, and we are committed to delivering top-quality
        content. For any concerns or issues with your purchase, please contact
        our support team, and we will do our best to assist you.{" "}
      </p>

      <p>
        For further assistance, please reach out to our customer support team
        via email at 
        <a href="mailto:drama@ktrend.ae" className="gradient-link">
          drama@ktrend.ae
        </a>
        .
      </p>

      <p className="subtitle">Renewal and Cancellation </p>

      <p>
        Your payment to LoveDrama or the third party through which you purchased
        a Paid Subscription will automatically renew at the end of the
        applicable subscription period unless you cancel your subscription
        before the current period ends.
      </p>

      <p>
        To cancel your Paid Subscription, please contact our Customer Support
        team for detailed instructions.{" "}
      </p>

      <ul className="pl-10 list-disc">
        <li>
          Cancellation will take effect the day after the last day of the
          current subscription period.{" "}
        </li>
        <li>
          Upon cancellation, your account will be downgraded to the free version
          of LoveDrama apps and websites.{" "}
        </li>
      </ul>

      <p className="subtitle">Notification Permissions </p>

      <p>
        By agreeing to these Terms and Conditions, you authorize LoveDrama to
        send you push notifications, as well as SMS, emails, and other
        promotional or informational messages
      </p>

      <p className="subtitle">
        General Use of the Service—Permissions and Restrictions{" "}
      </p>

      <p>
        LoveDrama grants you permission to access and use the Service as
        described in these Terms of Service, provided that:{" "}
      </p>

      <ul className="pl-10 list-decimal">
        <li>
          You agree not to distribute any part of the Service or its content
          through any medium without prior written authorization from LoveDrama
          unless the Service itself provides functionality for such distribution
          (e.g., the embeddable player).{" "}
        </li>
        <li>You agree not to modify or alter any part of the Service. </li>
        <li>
          You agree not to access content through any unauthorized technology or
          means other than the audio/video playback pages of the Service, the
          embeddable player, or other explicitly approved methods designated by
          LoveDrama.
        </li>
        <li>
          You agree not to use the Service for the following commercial purposes
          unless you obtain prior written approval from LoveDrama:
          <ul className="pl-10 list-disc">
            <li>Selling access to the Service.</li>
            <li>
              Selling advertising, sponsorships, or Bonustions within the
              Service or its content.{" "}
            </li>
            <li>
              Selling advertising, sponsorships, or Bonustions on any ad-enabled
              blog or website that contains content delivered through the
              Service, unless the page also contains other materials not
              provided by LoveDrama that are of sufficient value to justify such
              sales.{" "}
            </li>
          </ul>
        </li>
        <li>
          The following are not considered prohibited commercial uses:
          <ul className="pl-10 list-disc">
            <li>
              Uploading original content to LoveDrama or maintaining an original
              channel on LoveDrama to Bonuste your business or creative
              endeavors.{" "}
            </li>
            <li>
              Embedding LoveDrama content on ad-enabled blogs or websites,
              provided the advertising complies with the restrictions outlined
              above or any explicit permissions granted in writing. <br />
              <br />
              If you use the embeddable player on your website or app, you must
              not modify, build upon, or disable any portion or functionality of
              the player, including but not limited to links back to LoveDrama’s
              apps or websites.{" "}
            </li>
          </ul>
        </li>
        <li>
          You agree not to use or deploy any automated systems, including but
          not limited to “robots,” “spiders,” or “offline readers,” to access
          the Service in a manner that generates more request messages to
          LoveDrama servers than a human could reasonably produce in the same
          timeframe using standard online browsing.{" "}
        </li>
        <li>
          You agree not to collect or harvest any personally identifiable
          information (e.g., account names) from the Service or use the
          communication systems provided by the Service (e.g., comments, email)
          for unsolicited commercial activities. Additionally, you agree not to
          solicit users of the Service for commercial purposes regarding its
          content. <br />
          <br />
          In using the Service, you must comply with all applicable laws.
          LoveDrama reserves the right to discontinue any aspect of the Service
          at its sole discretion.
        </li>
      </ul>

      <p className="subtitle">Use of Conten</p>

      <p>
        In addition to the general restrictions outlined above, the following
        specific restrictions and conditions apply to your use of content
        available on the Service:{" "}
      </p>

      <ul className="pl-10 list-decimal">
        <li>
          Some of the content on the Service is not owned by LoveDrama and may
          be provided by content partners or other users. Additionally,
          LoveDrama offers access to publicly available RSS podcast feeds on its
          platform. Such content is provided on an as-is, where-is basis.
          LoveDrama acts solely as a platform to facilitate access to this
          content in the manner authorized by the respective third parties.
          LoveDrama does not claim ownership rights over this content nor does
          it assume liability for its nature or use.{" "}
        </li>
        <li>
          Content is provided to you as is. You may access the content solely
          for your information and personal use as intended through the
          {`Service's`} functionality and as permitted under these Terms of
          Service. You are not permitted to download any content unless a
          “download” or similar link is explicitly displayed by LoveDrama on the
          Service. Without prior written consent from LoveDrama or the
          respective licensors, you must not:
          <ul className="pl-10 list-disc">
            <li>
              Copy, reproduce, or make the content available online or
              electronically.{" "}
            </li>
            <li>
              Transmit, publish, adapt, distribute, broadcast, display, sell,
              license, or otherwise exploit the content for any other purposes.{" "}
              <br />
              LoveDrama and its licensors reserve all rights not explicitly
              granted in these Terms of Service or the content provided through
              the Service.
            </li>
          </ul>
        </li>
        <li>
          You agree not to bypass, disable, or otherwise interfere with any
          security-related features of the Service. This includes features
          designed to prevent or restrict the unauthorized use or copying of
          content or to enforce limitations on the use of the Service or its
          content.{" "}
        </li>
        <li>
          By using the Service, you acknowledge that you may encounter content
          from various sources. LoveDrama is not responsible for the accuracy,
          usefulness, safety, or intellectual property rights of or associated
          with such content. If you come across content that you believe
          violates these Terms of Service, you may notify LoveDrama through the
          grievance redress mechanism provided below.{" "}
        </li>
      </ul>
      <p className="subtitle">Account Termination Policy </p>

      <p>
        LoveDrama reserves the right to terminate a {`user's`} access to the
        Service if they attempt to download content unlawfully, interfere with
        the proper functioning of the application, or engage in any other
        actions that violate these Terms and Conditions. In such cases, any
        active subscription fees or purchased coins will not be refunded. The
        subscription will remain active until the end of the paid period but
        will not be renewed automatically.{" "}
      </p>

      <p className="subtitle">Copyright Policy </p>

      <p>
        LoveDrama respects the intellectual property rights of others and
        expects users to do the same.{" "}
      </p>

      <p className="subtitle">Account Suspension or Termination </p>

      <p>
        Your account may be suspended or terminated for repeated copyright
        violations or other breaches of these Terms of Use.
      </p>

      <p className="subtitle">
        Copyright Infringement Notification (DMCA Notice){" "}
      </p>

      <p>
        If you believe that your copyright-protected work has been posted on
        LoveDrama’s apps or websites, or otherwise hosted by LoveDrama, without
        authorization, you may submit a copyright infringement notification to
        our grievance officer. Your notification must include the following
        details:{" "}
      </p>

      <ul className="pl-10 list-disc">
        <li>
          An email address, physical address, or phone number so that LoveDrama
          and the uploader of the allegedly infringing work can contact you.{" "}
        </li>
        <li>
          A clear and complete description of the work you believe has been
          infringed.{" "}
        </li>
        <li>
          The URL or other identifying location of the allegedly infringing
          work, along with details of the individual (if known) who is
          responsible for uploading it.{" "}
        </li>
        <li>
          A statement asserting your good faith belief that the use of the
          material in question is not authorized by the copyright owner, its
          agent, or the law.{" "}
        </li>
        <li>
          A statement, made under penalty of perjury, that the information
          provided in your notification is accurate and that you are the
          copyright owner or authorized to act on behalf of the copyright owner.
          This should also include evidence that you or the individual on whose
          behalf the notification is being made is the rightful owner of the
          copyright in the allegedly infringed work.{" "}
        </li>
        <li>
          An undertaking that you or the individual on whose behalf the
          notification is being made will file an infringement suit in the
          competent court against the person responsible for uploading the
          infringing work. You must also agree to provide the orders of the
          competent court having jurisdiction within 21 days of receiving this
          notification.{" "}
        </li>
        <li>
          The physical or electronic signature of the copyright owner or an
          authorized representative. You may type your full legal name (not the
          name of a company) to satisfy this requirement.{" "}
        </li>
      </ul>

      <p>Submit the above information to our grievance officer: </p>

      <ul className="pl-10 list-disc">
        <li>
          By Email:{" "}
          <a href="mailto:drama@ktrend.ae" className="gradient-link">
            drama@ktrend.ae
          </a>{" "}
        </li>
        <li>
          By Mail: K Trend LLC-FZ (Love Drama), Business Center 1, M Floor, The
          Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emitrates.{" "}
        </li>
      </ul>

      <p>
        All information submitted in your copyright infringement notification
        may be made public by LoveDrama group apps.{" "}
      </p>

      <p className="subtitle">Warranty Disclaimer </p>

      <p>
        You agree that your use of the services will be at your sole risk. To
        the fullest extent permitted by law of United Arab Emirates, LoveDrama,
        its officers, directors, employees, and agents disclaim all warranties,
        express or implied, in connection with the services and your use
        thereof.{" "}
      </p>

      <p>
        To the fullest extent permitted by law, LoveDrama excludes all
        warranties, conditions, terms, or representations regarding the accuracy
        or completeness of the content on this site or any content on sites
        linked to this site. LoveDrama assumes no liability or responsibility
        for:{" "}
      </p>

      <ul className="pl-10 list-decimal">
        <li>Errors, mistakes, or inaccuracies in the content. </li>
        <li>
          Personal injury or property damage of any nature whatsoever resulting
          from your access to or use of our services.{" "}
        </li>
        <li>
          Unauthorized access to or use of our secure servers and/or any
          personal or financial information stored therein.{" "}
        </li>
        <li>
          Interruptions or cessation of transmission to or from our services.{" "}
        </li>
        <li>
          Bugs, viruses, trojan horses, or other malicious code that may be
          transmitted to or through our services by any third party.{" "}
        </li>
        <li>
          Errors or omissions in any content or for any loss or damage of any
          kind incurred as a result of the use of any content posted, emailed,
          transmitted, or otherwise made available via the services.{" "}
        </li>
      </ul>

      <p>
        LoveDrama does not warrant, endorse, guarantee, or assume responsibility
        for any product or service advertised or offered by a third party
        through the services or any hyperlinked services.{" "}
      </p>

      <p>
        Through the services, any hyperlinked services, or advertisements
        featured in banners or other formats, LoveDrama will not be a party to
        or in any way responsible for monitoring any transaction between you and
        third-party providers of products or services. As with purchasing a
        product or service through any medium or environment, you are encouraged
        to exercise your best judgment and take appropriate precautions.{" "}
      </p>

      <p className="subtitle">Limitation of Liability </p>

      <p>
        To the fullest extent permitted by law, in no event shall LoveDrama, its
        officers, directors, employees, or agents be liable to you for any
        direct, indirect, incidental, special, punitive, losses, expenses, or
        consequential damages arising from:{" "}
      </p>

      <ul className="pl-10 list-decimal">
        <li>Errors, mistakes, or inaccuracies in the content. </li>
        <li>
          Personal injury or property damage of any kind resulting from your
          access to or use of our services.{" "}
        </li>
        <li>
          Unauthorized access to or use of our secure servers and/or any
          personal or financial information stored therein.{" "}
        </li>
        <li>
          Interruptions or cessation of transmission to or from our services.{" "}
        </li>
        <li>
          Bugs, viruses, trojan horses, or similar malicious code that may be
          transmitted to or through our services by any third party.{" "}
        </li>
        <li>
          Errors or omissions in any content or any loss or damage of any kind
          incurred as a result of using any content posted, emailed,
          transmitted, or otherwise made available through the services, whether
          based on warranty, contract, tort, or any other legal theory, and
          regardless of whether the company has been advised of the possibility
          of such damages.{" "}
        </li>
      </ul>

      <p>
        We acknowledge that some jurisdictions may enforce warranties,
        disclaimers, or conditions that cannot legally be excluded. If this
        applies in your jurisdiction, LoveDrama’s liability for any claims under
        those warranties or conditions is limited, to the extent permitted by
        law, to either re-supplying the services or covering the cost of
        re-supplying the services.{" "}
      </p>

      <p>
        You specifically acknowledge that LoveDrama shall not be liable for
        content, or the defamatory, offensive, or illegal conduct of any third
        party, and that the risk of harm or damage arising from such conduct
        lies solely with you.{" "}
      </p>

      <p>
        The Service is controlled and operated by K Trend LLC-FZ from its
        facilities in the United Arab Emirates. LoveDrama makes no
        representation that the Service is appropriate or available for use in
        other locations.{" "}
      </p>

      <p>
        Those accessing or using the Service from jurisdictions outside the
        United Arab Emirates do so at their own discretion and are responsible
        for compliance with local laws.
      </p>

      <p className="subtitle">Indemnity </p>

      <p>
        To the extent permitted by applicable law, you agree to defend,
        indemnify, and hold harmless LoveDrama, its parent company Kedoo
        Limited, officers, directors, employees, and agents, from and against
        any and all claims, damages, obligations, losses, liabilities, costs, or
        debts, and expenses (including but not limited to {`attorney's`} fees)
        arising from:{" "}
      </p>

      <ul className="pl-10 list-decimal">
        <li>Your use of and access to the Service. </li>
        <li>Your violation of any term of these Terms of Service. </li>
        <li>
          Your violation of any third-party rights, including but not limited to
          any copyright, property, or privacy rights.{" "}
        </li>
        <li>Your violation of any applicable laws. </li>
        <li>Any claim that your content caused damage to a third party. </li>
      </ul>

      <p>
        This defense and indemnification obligation will survive these Terms of
        Service and your use of the Service.{" "}
      </p>

      <p>
        We provide these Terms of Service to ensure you understand the terms
        governing your use of the Service. You acknowledge that we have given
        you a reasonable opportunity to review these terms and that you agree to
        them.{" "}
      </p>

      <p className="subtitle">Ability to Accept the Terms of Service </p>

      <p>
        You affirm that you are either over the age of 18, an emancipated minor,
        or possess legal parental or guardian consent, and are fully capable and
        competent to agree to the terms, conditions, obligations, affirmations,
        representations, and warranties outlined in these Terms of Service, and
        to abide by and comply with them.{" "}
      </p>

      <p>
        In any case, you affirm that you are over the age of 13, as the Service
        is not intended for children under the age of 13. If you are under 13
        years old, please do not use the Service. There are many other
        appropriate applications available for you. Discuss with your parents
        which websites and services are suitable for your use.{" "}
      </p>

      <p>
        We provide these Terms of Service so that you understand the conditions
        governing your use of the Service. You acknowledge that you have been
        given a reasonable opportunity to review these Terms of Service and
        agree to their provisions.{" "}
      </p>

      <p className="subtitle">Assignment </p>

      <p>
        These Terms of Service and any rights and licenses granted hereunder may
        not be transferred or assigned by you, but may be assigned by LoveDrama
        without restriction.{" "}
      </p>

      <p className="subtitle">General </p>

      <p>You agree that: </p>

      <ul className="pl-10 list-decimal">
        <li>The Service shall be deemed accessible worldwide; and </li>
        <li>
          The Service shall be deemed a passive website that does not give rise
          to personal jurisdiction over LoveDrama, either specific or general,
          in jurisdictions outside of its operations.{" "}
        </li>
      </ul>

      <p>
        You agree that the laws of the jurisdiction whereK Trend LLC-FZ is
        headquartered, excluding its conflict of law rules, will apply to these
        Terms of Service. For any dispute arising out of or related to the
        Service, the parties consent to personal jurisdiction in, and exclusive
        venue of, the courts whereK Trend LLC-FZ is headquartered.{" "}
      </p>

      <p>
        These Terms of Service, together with the Privacy Notice at{" "}
        <Link href="/privacy" className="gradient-link">
          https://lovedrama.tv/privacy
        </Link>{" "}
        and any other legal notices published by LoveDrama on the Service, shall
        constitute the entire agreement between you and LoveDrama concerning the
        Service. If a specific term is found to be unenforceable, this will not
        affect the validity of the remaining terms.{" "}
      </p>

      <p className="subtitle">LoveDrama Coins Terms and Conditions </p>

      <p>
        These Terms & Conditions (“Terms”) are provided to users
        (“you”/“User(s)”) byK Trend LLC-FZ (“LoveDrama,” “we,” “our,” and “us”)
        and apply to the access and use of LoveDrama Coins (“Coins”) made
        available through our website https://lovedrama.tv (“Website”) and
        applications LoveDrama (“Applications”). The Website and Applications
        shall be jointly referred to as the “Platforms.” These Terms are
        supplementary to our existing Terms and Conditions available on the
        LoveDrama Platforms.{" "}
      </p>

      <p>
        By receiving, purchasing, or redeeming any Coins, you agree to be bound
        by these Terms.{" "}
      </p>

      <p className="subtitle">Coins </p>

      <p>
        LoveDrama allows users to purchase Coins and use them to unlock episodes
        or other content of their choice on the Platforms The Platforms offer
        two types of Coins:{" "}
      </p>

      <ul className="pl-10 list-decimal">
        <li>
          Coins
          <p className="py-1">
            Coins can only be purchased using the available payment methods on
            the platform.
          </p>
          <p>
            Coins are non-refundable and do not expire. Once purchased, Coins
            remain in your account until they are used.
          </p>
        </li>
        <li>
          Bonuses
          <p>
            Bonuses are provided as a free reward for purchasing Coins and can
            also be earned through Bonus rewards, loyalty programs, or other
            activities on the platform.
          </p>
          <ul className="list-disc">
            <li>
              Bonuses expire 30 days after they are credited if they are not
              used.{" "}
            </li>
            <li>
              Bonuses cannot be sold, transferred to another account, or
              exchanged for cash.{" "}
            </li>
          </ul>
        </li>
      </ul>

      <p className="subtitle">Purchasing Coins </p>

      <p>
        You may purchase Paid Coins using any authorized payment method linked
        to your account. Paid Coins may be purchased through various
        subscription or one-time purchase packages available on the Platforms.
        These Coins may be offered under different pricing models and price
        points at LoveDrama’s sole discretion.{" "}
      </p>

      <ul className="list-disc">
        <li>
          <span className="font-bold">Finality of Purchases</span>: All
          purchases of Paid Coins are final. We do not accept returns or provide
          adjustments for Paid Coins except where required by law.{" "}
        </li>
        <li>
          <span className="font-bold">Redemption Restrictions</span>: Once Paid
          Coins have been redeemed for an in-app purchase or used to unlock a
          service, the benefits cannot be transferred, returned, or credited to
          another user or subscriber of the Platforms.{" "}
        </li>
        <li>
          <span className="font-bold">Credits</span>: If you believe that Paid
          Coins were not properly credited to your account, please contact our
          grievance officer or customer support at{" "}
          <a href="mailto:drama@ktrend.ae" className="gradient-link">
            drama@ktrend.ae
          </a>
          .
        </li>
      </ul>

      <p>
        LoveDrama reserves the right, at its sole discretion, to modify or
        discontinue discounts on Paid Coins at any time without prior notice.{" "}
      </p>

      <p className="subtitle">Redeeming Coins </p>

      <p>
        Paid Coins and/or Bonus Coins may only be redeemed for the purchase of
        eligible products and services through the Platforms within the
        timeframe specified by LoveDrama. Eligible products and services are
        subject to change at the sole discretion of LoveDrama. Not all apps or
        in-app products/services may support the use of Coins, and compatibility
        with devices may vary.{" "}
      </p>

      <p className="subtitle">Expiry of Coins </p>

      <ul className="list-disc">
        <li>
          <span className="font-bold">Paid Coins</span>: Paid Coins do not
          expire. However, LoveDrama reserves the right to suspend the use of
          Paid Coins if required by law.{" "}
        </li>
        <li>
          <span className="font-bold">Bonus Coins</span>: LoveDrama reserves the
          right to set an expiry date for Bonus Coins at its sole discretion.
          Any expiry details will be communicated to you via the Platforms.{" "}
          <br />
          Additionally, LoveDrama may revoke Bonus Coins at any time and without
          prior notice.
        </li>
        <li>
          <span className="font-bold">
            Cancellation of Coins for Unregistered Users
          </span>
          : If coins are purchased by a user who has not registered an account,
          such coins will be subject to cancellation. While unregistered users
          may use the coins within the Service, any unused coins cannot be
          returned or refunded, as we will not be able to identify the
          purchaser.
        </li>
      </ul>

      <p>
        LoveDrama also reserves the right to suspend the issuance of Paid Coins
        and/or Bonus Coins to specific users or to all users temporarily or
        permanently, at its sole discretion.{" "}
      </p>

      <p className="subtitle">Limitations </p>

      <ul className="list-decimal">
        <li>
          Neither Paid Coins nor Bonus Coins can be converted to cash or used as
          a substitute for cash on the Platforms.{" "}
        </li>
        <li>
          Both Paid Coins and Bonus Coins are non-transferable, non-replaceable,
          non-refundable, and non-returnable under any circumstance.{" "}
        </li>
        <li>
          LoveDrama may, at its sole discretion:
          <ul className="pl-10 list-disc">
            <li>
              Limit the number of Paid Coins and/or Bonus Coins you can purchase
              or receive within specific time periods.
            </li>
            <li>
              Implement other restrictions on the receipt or use of Paid Coins
              and/or Bonus Coins.{" "}
            </li>
          </ul>
        </li>
        <li>
          Users will not be eligible for monetary compensation as a settlement
          for Paid Coins and/or Bonus Coins, including in cases of loss of
          Coins.{" "}
        </li>
      </ul>

      <p className="subtitle">General </p>

      <p>You agree that: </p>

      <ul className="pl-10 list-decimal">
        <li>
          <span className="font-bold">Programme Changes</span>: We may change,
          suspend, or discontinue the Coins program, or any part of it, at any
          time without prior notice. In such an event, all Paid Coins and/or
          Bonus Coins will expire with immediate effect. We may amend these
          Terms at our sole discretion by posting the revised terms on the
          Platforms.{" "}
        </li>
        <li>
          <span className="font-bold">Limitation of Liability</span>: Without
          limiting the disclaimer of warranties and limitations of liability in
          our Terms, our total liability to you for all damages arising out of
          or related to Paid Coins will not exceed the amount you paid for any
          unredeemed Paid Coins.{" "}
        </li>
        <li>
          <span className="font-bold">Unauthorized Use</span>: We are not
          responsible for any Paid Coins and/or Bonus Coins used through your
          account without your permission.{" "}
        </li>
        <li>
          <span className="font-bold">Termination of Rights</span>:
          <ul className="pl-10 list-disc">
            <li>
              Your right to use Paid Coins and Bonus Coins will automatically
              terminate without notice if you fail to comply with these Terms.{" "}
            </li>
            <li>
              We may terminate your right to use Paid Coins and/or Bonus Coins
              at any time, including if we determine that your use violates
              these Terms or involves any fraud or misuse.{" "}
            </li>
            <li>
              In such cases, you must immediately cease all use of the Paid
              Coins and/or Bonus Coins. We may revoke your access to the Paid
              Coins and/or Bonus Coins without prior notice.{" "}
            </li>
            <li>
              If we determine that you have fraudulently obtained or used Paid
              Coins and/or Bonus Coins, we may revoke those Coins and charge
              your credit card or other payment method for purchases made using
              the fraudulently obtained Coins.{" "}
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Account Information</span>: You undertake
          to provide accurate information during the creation of your account
          and are solely responsible for updating any changes or revisions to
          that information.{" "}
        </li>
        <li>
          <span className="font-bold">Governing Law and Jurisdiction</span>: Any
          dispute or claim arising out of or in connection with these Terms
          (including their validity, termination, or enforceability, as well as
          non-contractual disputes or claims) shall be governed by and construed
          in accordance with the law of United Arab Emirates. The courts in
          Dubai, shall have exclusive jurisdiction over such matters.{" "}
        </li>
        <li>
          <span className="font-bold">Assignment</span>{" "}
        </li>
        <li>
          These Terms, and any rights and licenses granted hereunder, may not be
          transferred or assigned by you, but may be assigned by LoveDrama
          without restriction.{" "}
        </li>
        <li>
          <span className="font-bold">Customer Services</span>{" "}
        </li>
        <li>
          For any queries or concerns regarding payments and the use of Coins,
          please contact us via the in-app chat support or email us at{" "}
          <a href="mailto:drama@ktrend.ae" className="gradient-link">
            drama@ktrend.ae
          </a>
          .
        </li>
      </ul>

      <p className="subtitle">
        This document was last updated on 21 April, 2025.
      </p>
    </div>
  );
};

export default TermsPage;
