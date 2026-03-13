import { Helmet } from 'react-helmet-async';
// motion removed for performance
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service — IPTV Suisse</title>
        <meta name="description" content="Read the Terms of Service for IPTV Suisse. Understand your rights, our service limitations, subscription terms, and refund policy under Swiss jurisdiction." />
        <link rel="canonical" href="https://iptvswitzerland.cloud/terms" />
      </Helmet>

      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="glass-panel fade-in" style={{ padding: '60px', borderTop: '4px solid var(--color-yellow)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
              <div style={{ padding: '20px', background: 'rgba(241, 196, 15, 0.1)', borderRadius: '20px' }}>
                <FileText size={48} color="var(--color-yellow)" />
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: '800', margin: 0 }}>Terms of Service</h1>
            </div>

            <div className="markdown-content">
              <p>
                Please read these Terms of Service carefully before using the IPTV Suisse platform. By accessing our website at <a href="https://iptvsuisse.online/" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/</a> or activating any subscription, you confirm that you have read, understood, and agreed to be bound by these Terms in their entirety.
              </p>

              <h2>1. Legal Identity of the Provider</h2>
              <p>
                This website, accessible at <a href="https://iptvsuisse.online/" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/</a> (the "Website"), is operated by IPTV Suisse (the "Provider"), a digital media and streaming technology service provider operating under Swiss jurisdiction.
              </p>
              <ul>
                <li><strong>Trade Name:</strong> IPTV Suisse</li>
                <li><strong>Registered Country:</strong> Switzerland</li>
                <li><strong>Primary Contact Email:</strong> <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a></li>
                <li><strong>Customer Support:</strong> Available 24/7 via live chat and email</li>
                <li><strong>Applicable Legal Framework:</strong> Swiss Code of Obligations (OR), Swiss Federal Act on Data Protection (DSG/nDSG), and where applicable, the EU General Data Protection Regulation (GDPR)</li>
              </ul>
              <p>All legal communications and notices directed to the Provider must be submitted in writing to the contact email address listed above.</p>

              <h2>2. Scope of Application</h2>
              <p>
                These Terms of Service (the "Terms") constitute a legally binding agreement between IPTV Suisse ("Provider," "we," "our," or "us") and any individual or entity ("User," "you," or "your") who accesses, browses, registers, or subscribes to any service offered through the Website.
              </p>
              <p>These Terms govern:</p>
              <ul>
                <li>Access to and use of the <a href="https://iptvsuisse.online/" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/</a> website and all subdomains</li>
                <li>Registration of user accounts and management of subscription plans</li>
                <li>Purchase, activation, and use of IPTV Suisse digital streaming services</li>
                <li>Access to live television channels, Video-on-Demand (VOD) content, and Electronic Programme Guide (EPG) features</li>
                <li>All commercial transactions, billing interactions, and customer support communications</li>
                <li>Any promotional offers, free trials, or discounted subscription arrangements</li>
              </ul>
              <p>
                By accessing this Website or activating an IPTV Suisse subscription, you unconditionally accept these Terms and our Privacy Policy. If you do not agree with any provision contained herein, you must immediately cease use of the Website and all associated services.
              </p>

              <h2>3. Service Description</h2>
              <p>
                IPTV Suisse provides subscribers with access to a digital streaming interface delivering live television channels, Video-on-Demand libraries, catch-up TV functionality, and Electronic Programme Guide (EPG) integration via Internet Protocol Television (IPTV) technology.
              </p>
              <p>Current service offering includes:</p>
              <ul>
                <li>10,000+ live TV channels — Swiss national, European, and international networks</li>
                <li>Swiss channels: SRF 1, SRF zwei, SRF info, RTS Un, RTS Deux, RSI LA 1, RSI LA 2, and regional Swiss broadcasters</li>
                <li>50,000+ on-demand movies, series, and documentaries updated daily</li>
                <li>7-day catch-up TV on all supported broadcast channels</li>
                <li>Full EPG programme guide with search and scheduling functionality</li>
                <li>HD, Full HD (1080p), and 4K Ultra HD streaming where technically available</li>
                <li>Multi-device streaming support across Android, iOS, Smart TV, Fire TV, Windows, macOS, and more</li>
              </ul>
              <p><strong>Service Limitations:</strong></p>
              <p>
                The Provider does not guarantee uninterrupted, error-free service availability at all times. Scheduled maintenance windows, emergency technical interventions, upstream content provider restrictions, and force majeure events may temporarily affect service access. The Provider will make reasonable efforts to notify subscribers of planned downtime with adequate advance notice wherever possible.
              </p>
              <p>
                The availability of specific channels, VOD content, or catch-up programmes may vary over time due to licensing agreements, content provider decisions, or regional broadcast restrictions outside the Provider's direct control.
              </p>

              <h2>4. User Eligibility & Account Registration</h2>
              <h3>4.1 Age Requirement</h3>
              <p>
                Use of IPTV Suisse services is strictly restricted to individuals who are 18 years of age or older. By registering an account, you confirm that you meet this minimum age requirement. The Provider reserves the right to request age verification documentation at any time and to immediately suspend accounts where age eligibility cannot be confirmed.
              </p>
              <h3>4.2 Account Registration Requirements</h3>
              <p>
                To access IPTV Suisse subscription services, users must create an account by providing accurate, complete, and up-to-date information including:
              </p>
              <ul>
                <li>A valid, actively monitored email address</li>
                <li>A secure password meeting minimum complexity requirements</li>
                <li>Accurate billing information where applicable</li>
              </ul>
              <h3>4.3 Account Security & Credential Confidentiality</h3>
              <p>
                You are solely responsible for maintaining the strict confidentiality of your IPTV Suisse account credentials, including your username and password. You must not share your login credentials with any third party beyond the number of simultaneous connections permitted under your active subscription plan. Any unauthorized use of your account must be reported to <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a> immediately upon discovery. The Provider shall not be liable for any loss or damage arising from unauthorized account access resulting from your failure to maintain credential security.
              </p>
              <h3>4.4 Account Suspension for Misuse</h3>
              <p>
                The Provider reserves the right to suspend or permanently terminate any account found to be in breach of these Terms, including but not limited to credential sharing beyond permitted limits, fraudulent registration information, or use of the service for unlawful purposes.
              </p>

              <h2>5. Acceptable Use Policy</h2>
              <p>
                By activating and using an IPTV Suisse subscription, you agree to use the service exclusively for lawful personal entertainment purposes in compliance with all applicable Swiss laws, EU regulations, and the laws of your country of residence.
              </p>
              <h3>5.1 Prohibited Activities</h3>
              <p>Users are strictly prohibited from:</p>
              <ul>
                <li>Using the IPTV Suisse platform for any unlawful, fraudulent, or unauthorized commercial purpose</li>
                <li>Redistributing, reselling, sublicensing, or commercially exploiting any IPTV Suisse service, content, or credential without prior written authorization from the Provider</li>
                <li>Sharing account credentials with individuals beyond the permitted simultaneous connection limit of your subscription plan</li>
                <li>Reverse engineering, decompiling, disassembling, or otherwise attempting to extract the source code or underlying architecture of the IPTV Suisse platform or any associated software</li>
                <li>Using automated bots, scrapers, crawlers, or any non-human access method to interact with the Website or its content delivery infrastructure</li>
                <li>Uploading, transmitting, or distributing malicious software, viruses, or any code designed to interfere with the normal operation of the Provider's servers, network, or user devices</li>
                <li>Circumventing any technical protection measures, geographic restrictions, or content access controls implemented by the Provider</li>
                <li>Impersonating IPTV Suisse, its staff, or other users in any communication channel</li>
              </ul>
              <h3>5.2 Consequences of Violation</h3>
              <p>
                Breach of this Acceptable Use Policy will result in immediate account suspension or permanent termination without prior warning and without entitlement to any refund for unused subscription periods. The Provider further reserves the right to pursue legal remedies against users whose violations cause measurable harm, financial loss, or reputational damage to the Provider or its content partners.
              </p>

              <h2>6. Subscription Plans & Pricing</h2>
              <p>
                IPTV Suisse offers multiple subscription tiers designed to accommodate a range of viewing needs and household sizes. Current available plans include monthly, quarterly, semi-annual, and annual subscription periods.
              </p>
              <ul>
                <li>All subscription prices are clearly displayed in Swiss Francs (CHF) and/or Euros (EUR) at the point of purchase</li>
                <li>Prices displayed on the Website are inclusive of all applicable fees unless explicitly stated otherwise</li>
                <li>The Provider reserves the right to modify subscription pricing at any time with a minimum of 14 days' prior written notice to active subscribers via the registered account email address</li>
                <li>Price modifications do not affect active subscription periods — revised pricing applies at the next renewal date only</li>
                <li>Promotional pricing, free trial offers, and discount codes are subject to their own specific terms and are available for a limited period only</li>
              </ul>

              <h2>7. Payment, Billing & Auto-Renewal</h2>
              <h3>7.1 Payment Processing</h3>
              <p>
                All payments for IPTV Suisse subscriptions are processed securely through PCI DSS-compliant third-party payment processors. The Provider does not store, log, or have direct access to your full payment card details at any point. By submitting payment, you authorize the processing of the stated subscription amount.
              </p>
              <h3>7.2 Accepted Payment Methods</h3>
              <p>
                Accepted payment methods are displayed at checkout and may include credit/debit cards, PayPal, and other digital payment options as made available by the Provider's payment partners.
              </p>
              <h3>7.3 Auto-Renewal</h3>
              <p>
                Where enabled, subscription plans auto-renew automatically at the end of each billing period at the then-current subscription rate. You will receive a renewal reminder notification to your registered email address no fewer than 7 days before any auto-renewal charge is processed. You may disable auto-renewal at any time through your account dashboard prior to the renewal date.
              </p>
              <h3>7.4 Failed Payments</h3>
              <p>
                In the event of a failed payment, the Provider will attempt to notify you via your registered email address. Service access may be suspended until outstanding payment is successfully processed.
              </p>

              <h2>8. Cancellation & Refund Policy</h2>
              <h3>8.1 Cancellation Rights</h3>
              <p>
                You may cancel your IPTV Suisse subscription at any time by accessing your account settings or by contacting our support team at <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a>. Upon cancellation, your subscription will remain active until the end of the current paid billing period, after which access will cease and no further charges will be applied.
              </p>
              <h3>8.2 Refund Eligibility</h3>
              <p>
                Given the digital and immediately accessible nature of IPTV Suisse services, refunds are governed as follows:
              </p>
              <ul>
                <li><strong>Free Trial Users:</strong> No charges are applied during the free trial period. Users who do not cancel before the trial expires will be charged at the applicable subscription rate.</li>
                <li><strong>New Subscriptions:</strong> Refund requests submitted within 72 hours of initial subscription activation, where the service has demonstrably failed to function as described, will be assessed on a case-by-case basis.</li>
                <li><strong>Renewal Charges:</strong> Refund requests for auto-renewal charges must be submitted within 48 hours of the renewal transaction date.</li>
                <li><strong>Promotional or Discounted Plans:</strong> Purchases made under promotional pricing are non-refundable once service activation has occurred.</li>
              </ul>
              <p>
                The Provider's refund decisions are made in good faith and in compliance with applicable Swiss consumer protection regulations under the Swiss Code of Obligations (OR).
              </p>

              <h2>9. Intellectual Property Rights</h2>
              <p>
                All content, technology, branding, trademarks, logos, software, databases, visual designs, and proprietary infrastructure associated with the IPTV Suisse platform (collectively, "Provider IP") are the exclusive intellectual property of IPTV Suisse or its licensed content and technology partners, and are protected under Swiss and international intellectual property law.
              </p>
              <p>
                Users are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the IPTV Suisse service solely for personal, non-commercial entertainment purposes during the active subscription period. This licence expressly does not permit:
              </p>
              <ul>
                <li>Downloading, recording, or archiving streamed content for redistribution</li>
                <li>Public performance or broadcast of any content accessed through IPTV Suisse</li>
                <li>Commercial use, resale, or sublicensing of any content or platform functionality</li>
                <li>Removal or alteration of any copyright, trademark, or proprietary notices</li>
              </ul>
              <p>
                Any unauthorized use of Provider IP will result in immediate account termination and may expose the infringing user to civil and criminal liability under Swiss Federal Act on Copyright and Related Rights (URG).
              </p>

              <h2>10. Data Protection & Privacy (Swiss DSG / GDPR)</h2>
              <p>
                IPTV Suisse is committed to protecting the personal data of all subscribers in full compliance with the Swiss Federal Act on Data Protection (nDSG/DSG) and, where applicable to EU-resident users, the EU General Data Protection Regulation (GDPR — Regulation 2016/679).
              </p>
              <h3>10.1 Data We Collect</h3>
              <p>
                We collect and process personal data including your name, email address, billing information, device identifiers, and usage data solely for the purposes of service delivery, account management, billing, and service improvement.
              </p>
              <h3>10.2 Legal Basis for Processing</h3>
              <p>
                Personal data is processed on the legal basis of contractual necessity (performance of the subscription agreement), legal obligation, and legitimate interest where applicable.
              </p>
              <h3>10.3 Your Data Rights</h3>
              <p>
                Depending on your country of residence, you hold the following rights regarding your personal data:
              </p>
              <ul>
                <li>Right of access — obtain a copy of data held about you</li>
                <li>Right to rectification — correct inaccurate personal data</li>
                <li>Right to erasure — request deletion of your personal data</li>
                <li>Right to restriction — limit how your data is used</li>
                <li>Right to data portability — receive your data in a portable format</li>
                <li>Right to object — object to processing based on legitimate interest</li>
              </ul>
              <p>
                To exercise any of these rights, submit a written request to <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a>. We will respond within the timeframe required by applicable law (maximum 30 days under GDPR; applicable period under Swiss nDSG).
              </p>
              <p>
                For full details on our data handling practices, please review our dedicated Privacy Policy page.
              </p>

              <h2>11. Third-Party Services & Disclosure</h2>
              <p>
                IPTV Suisse utilizes the following categories of third-party service providers in the operation of its platform. These providers process data and transactions on our behalf and are subject to their own privacy policies and terms of service:
              </p>
              <ul>
                <li><strong>Payment Processors:</strong> Secure PCI DSS-compliant payment processing partners</li>
                <li><strong>Content Delivery Networks (CDN):</strong> Infrastructure providers enabling global stream delivery and low-latency channel access</li>
                <li><strong>Customer Support Tools:</strong> Support ticket and live chat platform providers</li>
                <li><strong>Email Communication Services:</strong> Transactional and notification email delivery services</li>
                <li><strong>Analytics Providers:</strong> Anonymized platform performance and usage analytics</li>
              </ul>
              <p>
                The Provider does not sell, rent, or commercially transfer user personal data to any third party for marketing or advertising purposes. All third-party data sharing is limited strictly to operational necessity.
              </p>

              <h2>12. Limitation of Liability</h2>
              <p>To the maximum extent permitted under Swiss law and applicable consumer protection regulations:</p>
              <ul>
                <li>IPTV Suisse shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from use of or inability to use the service, including but not limited to loss of data, loss of profits, or service interruption</li>
                <li>The Provider's total aggregate liability to any individual user for claims arising under these Terms shall not exceed the total subscription fees paid by that user in the three (3) months immediately preceding the claim</li>
                <li>The Provider is not responsible for service interruptions, degraded stream quality, or content unavailability resulting from force majeure events including natural disasters, governmental actions, pandemic-related disruptions, cyberattacks beyond reasonable security measures, or failures of third-party infrastructure providers</li>
                <li>Internet connectivity quality, local network conditions, and device hardware limitations are the sole responsibility of the user and are expressly excluded from any liability claim against the Provider</li>
              </ul>
              <p>
                Nothing in these Terms excludes liability for death or personal injury caused by the Provider's negligence, or for fraudulent misrepresentation, to the extent such exclusion is prohibited under Swiss law.
              </p>

              <h2>13. Service Modifications & Availability</h2>
              <p>The Provider reserves the right to:</p>
              <ul>
                <li>Modify, update, upgrade, or reconfigure any aspect of the IPTV Suisse platform, channel lineup, VOD library, or technical infrastructure at any time</li>
                <li>Temporarily suspend access to all or part of the service for scheduled maintenance, emergency repairs, or infrastructure upgrades</li>
                <li>Permanently discontinue specific features, channels, or service tiers with reasonable prior notice to active subscribers</li>
                <li>Adjust stream quality parameters in response to network conditions, upstream provider changes, or technical requirements</li>
              </ul>
              <p>
                Where service modifications materially and negatively impact the core functionality of an active subscription, affected subscribers will be notified by email and may be entitled to a prorated credit or the option to cancel without early termination penalty.
              </p>

              <h2>14. Account Termination</h2>
              <h3>14.1 Termination by User</h3>
              <p>
                You may terminate your IPTV Suisse account at any time by contacting support at <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a> or through your account management dashboard. Account termination takes effect at the end of the current billing cycle unless immediate termination is requested.
              </p>
              <h3>14.2 Termination by Provider</h3>
              <p>The Provider reserves the right to suspend or permanently terminate user accounts, with or without prior notice, in cases of:</p>
              <ul>
                <li>Material breach of these Terms or the Acceptable Use Policy</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>Non-payment of subscription fees</li>
                <li>Provision of false or misleading registration information</li>
                <li>Unauthorized credential sharing or service resale</li>
              </ul>
              <p>
                Account termination by the Provider due to Terms violations does not entitle the user to any refund for unused subscription periods.
              </p>

              <h2>15. Dispute Resolution</h2>
              <p>
                In the event of any dispute, claim, or disagreement arising out of or relating to these Terms or the IPTV Suisse service, both parties agree to first attempt resolution through good-faith direct negotiation. Written notice of any dispute must be submitted to <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a>, and the Provider commits to responding substantively within 14 business days.
              </p>
              <p>
                If direct negotiation fails to resolve the dispute within 30 days of the initial written notice, either party may escalate the matter to the competent courts of Switzerland as specified in Section 16.
              </p>
              <p>
                Swiss consumer protection law preserves your right to access Swiss consumer mediation bodies where applicable.
              </p>

              <h2>16. Governing Law & Jurisdiction</h2>
              <p>
                These Terms of Service, and any dispute or claim arising from or in connection with them or their subject matter, are governed exclusively by the substantive laws of Switzerland, without regard to its conflict of law provisions.
              </p>
              <p>
                The exclusive place of jurisdiction for all legal proceedings arising from these Terms is Switzerland. Users who are consumers resident in an EU member state retain the right to bring proceedings before the courts of their country of habitual residence under applicable EU consumer protection directives.
              </p>

              <h2>17. Amendments to These Terms</h2>
              <p>
                IPTV Suisse reserves the right to update, modify, or replace any portion of these Terms at any time. When material changes are made, subscribers will be notified by email to their registered address and via a prominent notice on the Website at least 14 days before the changes take effect.
              </p>
              <p>
                Your continued use of the IPTV Suisse service following the effective date of any amendment constitutes your acceptance of the revised Terms. If you do not agree to the updated Terms, you must cancel your subscription before the effective date of the change.
              </p>
              <p>
                The most current version of these Terms is always accessible at <a href="https://iptvsuisse.online/terms-of-service" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/terms-of-service</a> and supersedes all previous versions.
              </p>

              <h2>18. Contact Information</h2>
              <p>
                For all legal inquiries, support requests, data protection questions, or billing disputes relating to your IPTV Suisse subscription, please contact us through the following channels:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a></li>
                <li><strong>Website:</strong> <a href="https://iptvsuisse.online/" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/</a></li>
                <li><strong>Live Chat:</strong> Available 24/7 via the chat widget on our website</li>
                <li><strong>Support Languages:</strong> English, German (Deutsch), French (Français), Italian (Italiano)</li>
                <li><strong>Response Time:</strong> Within 24 hours for general queries; within 72 hours for legal and data protection requests</li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
