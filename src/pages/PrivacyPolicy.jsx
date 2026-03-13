import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — IPTV Suisse</title>
        <meta name="description" content="Read the Privacy Policy for IPTV Suisse. Learn how we handle your data under Swiss nFADP 2023 and GDPR, and discover our stringent security measures." />
        <link rel="canonical" href="https://iptvswitzerland.cloud/privacy" />
      </Helmet>

      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="glass-panel" style={{ padding: '60px', borderTop: '4px solid var(--color-green)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
              <div style={{ padding: '20px', background: 'rgba(46, 204, 113, 0.1)', borderRadius: '20px' }}>
                <ShieldAlert size={48} color="var(--color-green)" />
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: '800', margin: 0 }}>Privacy Policy</h1>
            </div>

            <div className="markdown-content">
              <p>
                Your privacy is a fundamental right, not a checkbox. This Privacy Policy explains in clear, transparent language exactly what personal data IPTV Suisse collects, why we collect it, how we protect it, and what rights you hold as a subscriber or website visitor. If you have any questions after reading this policy, our data protection team is available at <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a>.
              </p>

              <h2>1. Who We Are & Our Data Protection Commitment</h2>
              <p>
                IPTV Suisse ("Provider," "we," "our," or "us") is a digital media streaming service provider operating under Swiss jurisdiction and accessible at <a href="https://iptvsuisse.online/" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/</a>. As the data controller for all personal information collected through our website and subscription services, we are bound by and fully committed to compliance with the Swiss Federal Act on Data Protection (nFADP / nDSG, effective September 1, 2023) and, where our services are accessed by individuals resident in European Union member states, the EU General Data Protection Regulation (GDPR — Regulation 2016/679).
              </p>
              <p>
                This Privacy Policy applies to every visitor of <a href="https://iptvsuisse.online/" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/</a>, every registered account holder, and every active IPTV Suisse subscriber worldwide. We do not treat privacy compliance as a legal formality — we treat it as a core business obligation and a fundamental commitment to the trust our Swiss and international subscribers place in us.
              </p>
              <p><strong>Data Controller:</strong></p>
              <ul>
                <li><strong>IPTV Suisse</strong></li>
                <li><strong>Website:</strong> <a href="https://iptvsuisse.online/" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/</a></li>
                <li><strong>Contact:</strong> <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a></li>
              </ul>

              <h2>2. Scope of This Privacy Policy</h2>
              <p>This Privacy Policy describes the personal data processing activities of IPTV Suisse across all touchpoints, including:</p>
              <ul>
                <li>Visits to <a href="https://iptvsuisse.online/" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/</a> and all associated subdomains</li>
                <li>Account registration and profile management</li>
                <li>Subscription purchase, renewal, and cancellation processes</li>
                <li>Active use of IPTV Suisse streaming services (live TV, VOD, catch-up TV, EPG)</li>
                <li>Customer support interactions via email, live chat, and support ticketing systems</li>
                <li>Marketing communications where consent has been obtained</li>
                <li>Technical monitoring and platform analytics used to maintain service quality</li>
              </ul>
              <p>
                This policy does not apply to third-party websites, applications, or services that may be linked to or integrated with our platform. We strongly encourage users to review the independent privacy policies of all third-party services they access.
              </p>

              <h2>3. Categories of Personal Data We Collect</h2>
              <p>
                IPTV Suisse collects the minimum personal data necessary to deliver, manage, and improve our Switzerland IPTV subscription service. We do not engage in unnecessary data collection and do not build behavioral advertising profiles on our users.
              </p>
              
              <h3>3.1 Identification & Account Data</h3>
              <ul>
                <li>Full name (or chosen display name)</li>
                <li>Email address (used for account access, billing notifications, and support)</li>
                <li>Account username and encrypted password hash</li>
                <li>Preferred language settings</li>
              </ul>

              <h3>3.2 Billing & Payment Data</h3>
              <ul>
                <li>Subscription plan selected and purchase history</li>
                <li>Transaction reference numbers and payment confirmation records</li>
                <li>Billing country and currency preference (CHF/EUR)</li>
              </ul>
              <p>
                We do not collect, store, or have access to full payment card numbers, CVV codes, or bank account details. All payment card processing is handled exclusively by our PCI DSS-certified third-party payment processors.
              </p>

              <h3>3.3 Technical & Device Data</h3>
              <ul>
                <li>IP address (used for geo-routing, fraud prevention, and abuse detection)</li>
                <li>Device type, operating system, and application version</li>
                <li>Browser type and version (for web portal users)</li>
                <li>Streaming session data including connection timestamps, stream quality metrics, and buffering events</li>
                <li>MAC address or device identifier (for certain IPTV player applications)</li>
              </ul>

              <h3>3.4 Usage & Behavioural Data</h3>
              <ul>
                <li>Channel viewing history and VOD content accessed (stored temporarily for catch-up TV and EPG functionality)</li>
                <li>Search queries within the IPTV Suisse platform</li>
                <li>Feature usage patterns used solely to improve service quality and user experience</li>
              </ul>

              <h3>3.5 Communications Data</h3>
              <ul>
                <li>Support ticket content and email correspondence with our team</li>
                <li>Live chat session transcripts (retained for quality assurance and dispute resolution purposes)</li>
                <li>Feedback, ratings, or survey responses submitted voluntarily</li>
              </ul>

              <h2>4. How We Collect Your Personal Data</h2>
              <p>We collect personal data through the following direct and automated methods:</p>
              <p><strong>Direct Collection (data you provide to us):</strong></p>
              <ul>
                <li>Account registration and subscription sign-up forms</li>
                <li>Payment and billing information submission</li>
                <li>Customer support requests and live chat interactions</li>
                <li>Email communications and feedback submissions</li>
              </ul>
              <p><strong>Automated Technical Collection:</strong></p>
              <ul>
                <li>Server logs capturing IP addresses, access timestamps, and request metadata</li>
                <li>IPTV application session data including device identifiers and stream quality metrics</li>
                <li>Website cookies and similar tracking technologies (see Section 11 for full Cookie Policy)</li>
                <li>Analytics platforms providing aggregated, anonymized platform performance data</li>
              </ul>
              <p>We do not purchase, rent, or acquire personal data about you from third-party data brokers or marketing list providers.</p>

              <h2>5. Legal Basis for Data Processing</h2>
              <p>
                Every personal data processing activity conducted by IPTV Suisse is grounded in a specific, documented legal basis as required by the Swiss nFADP 2023 and GDPR Article 6.
              </p>
              <div className="table-wrapper">
                <table className="glass-table">
                  <thead>
                    <tr>
                      <th>Processing Activity</th>
                      <th>Legal Basis</th>
                      <th>Applicable Law</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Account creation and management</td><td>Contract performance</td><td>Art. 31 nFADP / GDPR Art. 6(1)(b)</td></tr>
                    <tr><td>Subscription billing and payment processing</td><td>Contract performance</td><td>Art. 31 nFADP / GDPR Art. 6(1)(b)</td></tr>
                    <tr><td>Service delivery (streaming, VOD, EPG)</td><td>Contract performance</td><td>Art. 31 nFADP / GDPR Art. 6(1)(b)</td></tr>
                    <tr><td>Fraud prevention and abuse detection</td><td>Legitimate interest</td><td>Art. 31 nFADP / GDPR Art. 6(1)(f)</td></tr>
                    <tr><td>Platform security and intrusion monitoring</td><td>Legitimate interest</td><td>Art. 31 nFADP / GDPR Art. 6(1)(f)</td></tr>
                    <tr><td>Legal compliance and record-keeping</td><td>Legal obligation</td><td>Art. 31 nFADP / GDPR Art. 6(1)(c)</td></tr>
                    <tr><td>Marketing emails (where opted in)</td><td>Consent</td><td>Art. 31 nFADP / GDPR Art. 6(1)(a)</td></tr>
                    <tr><td>Website analytics (aggregated, anonymized)</td><td>Legitimate interest</td><td>Art. 31 nFADP / GDPR Art. 6(1)(f)</td></tr>
                    <tr><td>Customer support communications</td><td>Contract / Legitimate interest</td><td>Art. 31 nFADP / GDPR Art. 6(1)(b)(f)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Where processing is based on consent, you retain the absolute right to withdraw that consent at any time without affecting the lawfulness of processing conducted prior to withdrawal.
              </p>

              <h2>6. Purposes for Which We Use Your Data</h2>
              <p>IPTV Suisse uses collected personal data exclusively for the following documented purposes:</p>
              <ul>
                <li><strong>Service Delivery:</strong> Provisioning, activating, and maintaining your IPTV Suisse subscription and streaming access</li>
                <li><strong>Account Management:</strong> Processing registrations, credential resets, plan upgrades, and account modifications</li>
                <li><strong>Billing & Payment Administration:</strong> Processing subscription payments, generating invoices, managing renewals, and handling refund requests</li>
                <li><strong>Customer Support:</strong> Responding to technical queries, troubleshooting playback issues, and resolving billing disputes</li>
                <li><strong>Service Quality Improvement:</strong> Analyzing aggregated, anonymized usage patterns to optimize streaming performance, EPG accuracy, and VOD library curation</li>
                <li><strong>Security & Fraud Prevention:</strong> Detecting unauthorized account access, credential sharing violations, and fraudulent payment activity</li>
                <li><strong>Legal Compliance:</strong> Meeting obligations under Swiss law, responding to lawful governmental requests, and maintaining records required by applicable regulations</li>
                <li><strong>Service Communications:</strong> Sending subscription confirmations, renewal reminders, maintenance notifications, and material policy updates</li>
                <li><strong>Marketing Communications:</strong> Sending promotional offers and service updates exclusively to users who have explicitly opted in to marketing communications</li>
              </ul>
              <p>
                We do not use personal data for automated profiling that produces significant legal effects, for behavioral advertising targeted at individual users, or for any purpose not listed above without prior notice and, where required, renewed consent.
              </p>

              <h2>7. Data Retention Schedule</h2>
              <p>
                IPTV Suisse retains personal data only for as long as is strictly necessary to fulfill the purpose for which it was collected, to meet our legal and contractual obligations, or to defend legitimate legal claims. The following retention schedule applies:
              </p>
              <div className="table-wrapper">
                <table className="glass-table">
                  <thead>
                    <tr>
                      <th>Data Category</th>
                      <th>Retention Period</th>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Account & identification data</td><td>Duration of active subscription + 12 months post-cancellation</td><td>Account reactivation, dispute resolution</td></tr>
                    <tr><td>Billing & transaction records</td><td>10 years from transaction date</td><td>Swiss commercial law (OR Art. 958f)</td></tr>
                    <tr><td>Support ticket & chat records</td><td>24 months from ticket closure</td><td>Quality assurance, dispute resolution</td></tr>
                    <tr><td>Streaming session & technical logs</td><td>90 days rolling</td><td>Security monitoring, abuse detection</td></tr>
                    <tr><td>Marketing consent records</td><td>Until consent is withdrawn + 12 months</td><td>Legal proof of consent</td></tr>
                    <tr><td>Website analytics data</td><td>26 months (anonymized after 13 months)</td><td>Platform performance analysis</td></tr>
                    <tr><td>Data breach investigation records</td><td>5 years from incident date</td><td>Legal obligation</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Upon expiry of the applicable retention period, personal data is permanently deleted from all active systems and securely overwritten in archived storage using industry-standard data erasure protocols.
              </p>

              <h2>8. Data Security Measures</h2>
              <p>
                IPTV Suisse implements a comprehensive, layered security framework to protect your personal data against unauthorized access, disclosure, alteration, or destruction. Our security measures include both technical controls and organizational policies.
              </p>
              <p><strong>Technical Security Controls:</strong></p>
              <ul>
                <li><strong>TLS 1.3 Encryption:</strong> All data transmitted between your device and IPTV Suisse servers is encrypted using Transport Layer Security (TLS) 1.3 protocol</li>
                <li><strong>AES-256 Database Encryption:</strong> Sensitive personal data stored in our databases is encrypted at rest using Advanced Encryption Standard (AES) 256-bit encryption</li>
                <li><strong>Password Hashing:</strong> Account passwords are stored exclusively as salted cryptographic hashes using bcrypt — plain-text passwords are never stored or accessible</li>
                <li><strong>Firewall & Intrusion Detection:</strong> Multi-layer network firewalls and automated intrusion detection systems monitor all server infrastructure for unauthorized access attempts</li>
                <li><strong>Access Control & Least Privilege:</strong> Internal access to personal data systems is restricted on a strict need-to-know basis using role-based access controls</li>
                <li><strong>Two-Factor Authentication (2FA):</strong> Available for user accounts and mandatory for all internal administrative access to data systems</li>
                <li><strong>Vulnerability Scanning:</strong> Regular automated and manual security audits, penetration testing, and vulnerability assessments of all platform infrastructure</li>
              </ul>
              <p><strong>Organizational Security Measures:</strong></p>
              <ul>
                <li>All staff with access to personal data receive mandatory data protection and security training</li>
                <li>Data processing agreements are in place with all third-party processors</li>
                <li>Incident response procedures are documented and regularly tested</li>
              </ul>
              <p>
                Despite these measures, no internet transmission or digital storage system can be guaranteed absolutely secure. We encourage users to use strong, unique passwords and to enable two-factor authentication where available.
              </p>

              <h2>9. Third-Party Data Processors & Disclosure</h2>
              <p>
                IPTV Suisse works with carefully selected third-party service providers who process limited personal data on our behalf as data processors under binding Data Processing Agreements (DPAs) that comply with Swiss nFADP and GDPR requirements. We do not share personal data with third parties for their own commercial or marketing purposes.
              </p>
              <p>Categories of third-party processors we engage:</p>
              <ul>
                <li><strong>Payment processors (PCI DSS certified):</strong> Email, billing country, transaction amount (Secure payment processing)</li>
                <li><strong>Cloud hosting & infrastructure providers:</strong> Account data, streaming session data (Service delivery and uptime)</li>
                <li><strong>Content Delivery Network (CDN) providers:</strong> IP address, device type (Low-latency stream delivery)</li>
                <li><strong>Customer support platform providers:</strong> Name, email, support ticket content (Support ticket management)</li>
                <li><strong>Transactional email service providers:</strong> Email address, name (Subscription confirmations, notifications)</li>
                <li><strong>Anonymized analytics platforms:</strong> Aggregated usage data (Platform performance monitoring)</li>
              </ul>
              <p>
                All third-party processors are contractually prohibited from using your personal data for any purpose beyond the specific service they provide to IPTV Suisse. We conduct periodic due diligence reviews of all processor compliance.
              </p>
              <p>We will never:</p>
              <ul>
                <li>Sell, rent, or trade your personal data to any third party</li>
                <li>Share personal data with advertisers or data brokers</li>
                <li>Allow third parties to use your data for their own profiling or marketing activities</li>
              </ul>

              <h2>10. International Data Transfers</h2>
              <p>
                IPTV Suisse's primary operations and data storage are based within Switzerland. However, some of our third-party processors operate infrastructure in countries outside Switzerland and the European Economic Area (EEA). Where personal data is transferred internationally, we ensure that appropriate legal safeguards are in place to maintain the same level of data protection required by Swiss nFADP 2023 and GDPR.
              </p>
              <p>Legal mechanisms used for international transfers include:</p>
              <ul>
                <li><strong>EU Standard Contractual Clauses (SCCs)</strong> — for transfers to countries without an EU adequacy decision</li>
                <li><strong>Swiss Adequacy Decisions</strong> — transfers to countries recognized as adequate by the Swiss Federal Data Protection and Information Commissioner (FDPIC)</li>
                <li><strong>Binding Corporate Rules (BCRs)</strong> — where applicable for multinational processor groups</li>
                <li><strong>FDPIC-approved transfer mechanisms</strong> — for transfers governed exclusively by Swiss nFADP</li>
              </ul>
              <p>
                Switzerland has been recognized as providing an adequate level of data protection by the European Commission, meaning data transfers between Switzerland and the EU/EEA are permissible without additional safeguards. You may request information about the specific international transfer mechanisms applicable to your data by contacting <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a>.
              </p>

              <h2>11. Cookie Policy & Tracking Technologies</h2>
              <p>
                IPTV Suisse uses cookies and similar tracking technologies on <a href="https://iptvsuisse.online/" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/</a> to ensure the website functions correctly, to understand how users interact with our platform, and to improve our service.
              </p>
              
              <h3>11.1 What Are Cookies?</h3>
              <p>
                Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work more efficiently and to provide anonymized usage information to site operators.
              </p>

              <h3>11.2 Categories of Cookies We Use</h3>
              <div className="table-wrapper">
                <table className="glass-table">
                  <thead>
                    <tr>
                      <th>Cookie Category</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                      <th>Consent Required?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Strictly Necessary</td><td>Enable core functionality: login sessions, security tokens</td><td>Session / up to 1 year</td><td>No (legitimate interest)</td></tr>
                    <tr><td>Functional</td><td>Remember your language preference and display settings</td><td>Up to 1 year</td><td>Yes</td></tr>
                    <tr><td>Analytics</td><td>Anonymized data on page visits and traffic sources</td><td>Up to 26 months</td><td>Yes</td></tr>
                    <tr><td>Marketing / Retargeting</td><td>Used only if explicitly opted in to promotional communications</td><td>Up to 90 days</td><td>Yes (explicit opt-in)</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>11.3 Managing Cookie Preferences</h3>
              <p>You can manage, restrict, or delete cookies at any time through:</p>
              <ul>
                <li>The Cookie Preference Centre accessible via the cookie banner on our website</li>
                <li>Your browser settings — most modern browsers allow you to block or delete cookies</li>
                <li>Your device privacy settings for mobile applications</li>
              </ul>
              <p>
                Please note that disabling strictly necessary cookies may impair the functionality of certain website features including account login and checkout.
              </p>

              <h2>12. Your Rights Under Swiss nFADP 2023 & GDPR</h2>
              <p>
                As a data subject under Swiss nFADP 2023 and/or EU GDPR, you hold the following enforceable rights regarding your personal data processed by IPTV Suisse. We take these rights seriously and respond to all verified requests within the legally mandated timeframe.
              </p>
              <ul>
                <li><strong>✅ Right of Access (Art. 25 nFADP / GDPR Art. 15):</strong> You have the right to request a complete copy of all personal data we hold about you</li>
                <li><strong>✅ Right to Rectification (Art. 32 nFADP / GDPR Art. 16):</strong> You have the right to request correction of any inaccurate, outdated, or incomplete data</li>
                <li><strong>✅ Right to Erasure (Art. 32 nFADP / GDPR Art. 17):</strong> The "Right to be Forgotten"</li>
                <li><strong>✅ Right to Restriction of Processing (GDPR Art. 18):</strong> Temporarily restrict processing of your data while a rectification request is assessed</li>
                <li><strong>✅ Right to Data Portability (GDPR Art. 20):</strong> Receive a structured, machine-readable copy of your personal data</li>
                <li><strong>✅ Right to Object (Art. 32 nFADP / GDPR Art. 21):</strong> Object to processing of your personal data based on legitimate interest</li>
                <li><strong>✅ Right to Withdraw Consent (GDPR Art. 7(3)):</strong> You may withdraw consent at any time where applicable</li>
                <li><strong>✅ Right to Lodge a Complaint:</strong> Right to lodge a formal complaint with the Swiss Federal Data Protection and Information Commissioner or EU equivalent</li>
              </ul>
              <p><strong>How to Exercise Your Rights</strong></p>
              <p>Submit a written rights request to: <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a></p>
              <p>Include in your request:</p>
              <ul>
                <li>Your full name and registered email address</li>
                <li>The specific right(s) you wish to exercise</li>
                <li>Any relevant context to help us locate your data accurately</li>
              </ul>
              <p>
                <strong>Response Timeframe:</strong> We will acknowledge your request within 5 business days and provide a substantive response within 30 days of receipt. Identity verification may be required to protect against unauthorized data disclosure.
              </p>

              <h2>13. Children's & Minors' Data Protection</h2>
              <p>
                IPTV Suisse services are strictly intended for individuals who are 18 years of age or older. We do not knowingly collect, process, or store personal data belonging to children or minors under the age of 18.
              </p>
              <p>
                Our registration process includes an age confirmation requirement. If we become aware that personal data has been collected from an individual under the age of 18 without verified parental consent, we will take immediate steps to permanently delete that data from all our systems.
              </p>
              <p>
                If you are a parent or guardian and have reason to believe that a minor has registered for an IPTV Suisse account, please contact us immediately at <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a>.
              </p>

              <h2>14. Data Breach Notification Procedure</h2>
              <p>
                IPTV Suisse maintains a documented incident response and data breach notification procedure in compliance with GDPR Article 33/34 and Swiss nFADP 2023 obligations.
              </p>
              <p>In the event of a personal data breach that poses a risk to the rights and freedoms of affected individuals:</p>
              <ul>
                <li><strong>Supervisory Authority Notification:</strong> We will notify the Swiss FDPIC and/or relevant EU authorities within 72 hours</li>
                <li><strong>User Notification:</strong> Where a breach is likely to result in high risk to individual rights, we will notify affected subscribers directly</li>
                <li><strong>Breach Documentation:</strong> All data security incidents are documented in our internal breach register</li>
              </ul>

              <h2>15. Automated Decision-Making & Profiling</h2>
              <p>
                IPTV Suisse does not engage in automated decision-making or profiling activities that produce legal effects or similarly significant impacts on individual users as defined under GDPR Article 22.
              </p>
              <p>
                Our platform does use automated technical processes — such as adaptive bitrate streaming and content recommendation algorithms — that improve your viewing experience. These processes do not involve making decisions about you as an individual, and they do not produce any legal, financial, or similarly significant effects.
              </p>

              <h2>16. Data Protection Authority & Supervisory Body</h2>
              <p>The competent supervisory authority for data protection matters relating to IPTV Suisse is:</p>
              <p><strong>Swiss Federal Data Protection and Information Commissioner (FDPIC)</strong><br />
              Website: <a href="http://www.edoeb.admin.ch" style={{ color: 'var(--color-green)' }} target="_blank" rel="noopener noreferrer">www.edoeb.admin.ch</a><br />
              Address: Feldeggweg 1, 3003 Bern, Switzerland</p>
              <p>
                For users resident in EU member states, the competent supervisory authority is the data protection authority of your country of habitual residence.
              </p>

              <h2>17. Changes to This Privacy Policy</h2>
              <p>
                We reserve the right to update or modify this Privacy Policy at any time to reflect changes in applicable law, our data processing practices, or the services we offer. When material changes are made:
              </p>
              <ul>
                <li>We will update the "Last Updated" date at the top of this page</li>
                <li>We will notify active subscribers by email to their registered address at least 14 days before the changes take effect</li>
                <li>For significant changes affecting your rights, we will request renewed consent where legally required</li>
              </ul>
              <p>
                We encourage you to review this Privacy Policy periodically. Your continued use of IPTV Suisse services following the effective date of any update constitutes acceptance of the revised policy.
              </p>

              <h2>18. Contact & Data Protection Officer</h2>
              <p>
                For all privacy-related inquiries, data subject rights requests, consent withdrawals, or data protection concerns relating to IPTV Suisse, please contact our data protection team:
              </p>
              <p><strong>IPTV Suisse — Data Protection Contact</strong></p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a></li>
                <li><strong>Website:</strong> <a href="https://iptvsuisse.online/" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/</a></li>
                <li><strong>Response Guarantee:</strong> Acknowledgment within 5 business days; full response within 30 days</li>
                <li><strong>Support Languages:</strong> English | Deutsch | Français | Italiano</li>
              </ul>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
