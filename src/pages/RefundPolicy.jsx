import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BadgeSwissFranc } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy – IPTV Suisse</title>
        <meta name="description" content="Review the IPTV Suisse refund and cancellation policy. Understand eligibility for partial, full, and trial-period refunds. Compliant with Swiss consumer rights." />
        <link rel="canonical" href="https://iptvswitzerland.cloud/refund" />
      </Helmet>

      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="glass-panel" style={{ padding: '60px', borderTop: '4px solid var(--color-pink)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
              <div style={{ padding: '20px', background: 'rgba(232, 67, 147, 0.1)', borderRadius: '20px' }}>
                <BadgeSwissFranc size={48} color="var(--color-pink)" />
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: '800', margin: 0 }}>Refund & Cancellation Policy</h1>
            </div>

            <div className="markdown-content">
              <p>
                At IPTV Suisse, we are committed to fair, transparent, and subscriber-centred billing practices. This Refund and Cancellation Policy explains your rights as a subscriber, the circumstances under which refunds are issued, how to cancel your subscription, and how we handle billing disputes — all in compliance with Swiss consumer laws.
              </p>

              <h2>1. Understanding Digital Service Refund Law in Switzerland</h2>
              <p>
                IPTV Suisse operates as a digital streaming service provider under Swiss jurisdiction, governed by the Swiss Code of Obligations (OR) and applicable Swiss consumer protection legislation. Understanding how Swiss law applies to digital services is important context for our refund policy.
              </p>
              <p>
                Under Swiss law, digital content and streaming services that are activated and begin delivery immediately upon purchase — with the express, informed consent of the subscriber — may be exempt from the standard statutory withdrawal right that applies to physical goods. By completing registration and activating your IPTV Suisse subscription, you acknowledge that service delivery commences immediately and that you have been clearly informed of the applicable refund terms set out in this policy before completing your purchase.
              </p>
              <p>
                This policy is designed to go beyond minimum legal requirements and to treat every refund request with fairness, transparency, and genuine respect for your rights as a subscriber. Where Swiss consumer law provides protections that exceed the terms stated in this policy, those legal protections shall always take precedence.
              </p>

              <h2>2. Free Trial Policy</h2>
              <p>
                IPTV Suisse offers a risk-free free trial period to all new subscribers, allowing full access to the complete IPTV Suisse channel library, VOD content, and platform features before any financial commitment is required.
              </p>
              
              <h3>2.1 Free Trial Terms</h3>
              <ul>
                <li>No payment details are required to activate a free trial where applicable under the current offer</li>
                <li>Free trial access provides full, unrestricted access to all features available under the equivalent paid subscription tier</li>
                <li>The free trial period begins immediately upon account activation and expires at the stated trial end date</li>
                <li>No charge is applied during the free trial period under any circumstances</li>
              </ul>

              <h3>2.2 Trial-to-Paid Conversion</h3>
              <ul>
                <li>Where a payment method has been provided in connection with a free trial, you will receive a clear notification by email at least 48 hours before the trial period expires and any charge is processed</li>
                <li>If you do not wish to continue as a paid subscriber, you must cancel your subscription before the trial expiry date via your account dashboard or by contacting <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a></li>
                <li>Charges applied after the free trial period has converted to a paid subscription are subject to the refund eligibility criteria in Section 3</li>
              </ul>

              <h2>3. Refund Eligibility Criteria</h2>
              <p>
                IPTV Suisse will consider and process refund requests in the following documented circumstances. Each request is assessed individually and in good faith by our billing team.
              </p>

              <h3>3.1 Service Non-Delivery</h3>
              <p>
                If your IPTV Suisse subscription was successfully paid and charged but your account credentials were not delivered, your account was not activated, or access to the platform was never granted due to an error on our part — you are entitled to a full refund of the subscription amount paid. Refund requests for non-delivery must be submitted within 7 calendar days of the original purchase date.
              </p>

              <h3>3.2 Persistent Technical Failure</h3>
              <p>
                If the IPTV Suisse service fails to function as described — meaning core streaming functionality is consistently unavailable or severely degraded through no fault of your internet connection, device, or configuration — and our technical support team is unable to resolve the issue within 72 hours of a formal support ticket being raised, you may be eligible for a full or partial refund depending on the duration of the disruption.
              </p>
              <p>To qualify under this clause, you must:</p>
              <ul>
                <li>Have contacted our support team and raised a formal support ticket documenting the issue</li>
                <li>Have followed all troubleshooting guidance provided by our technical team</li>
                <li>Have confirmed that your internet connection meets the minimum speed requirements (10 Mbps for HD; 25 Mbps for 4K)</li>
              </ul>

              <h3>3.3 Duplicate Payment</h3>
              <p>
                If a technical or processing error resulted in your account being charged twice for the same subscription period, you are entitled to an immediate full refund of the duplicate charge. Duplicate payment refunds are processed within 5 business days upon confirmation.
              </p>

              <h3>3.4 Unauthorized Transaction</h3>
              <p>
                If you did not authorize the payment charged to your account and can provide evidence of unauthorized use, contact us immediately at <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a>. We will investigate the transaction and, where unauthorized access is confirmed, issue a full refund and close the compromised account within 5 business days.
              </p>

              <h3>3.5 Significant Service Misrepresentation</h3>
              <p>
                If the IPTV Suisse service you received is materially and demonstrably different from what was described on our website at the time of purchase — for example, a specific Swiss channel package was advertised but not delivered — you may submit a refund request with supporting evidence. These requests are reviewed by senior management and responded to within 10 business days.
              </p>

              <h2>4. Non-Refundable Circumstances</h2>
              <p>
                The following circumstances do not qualify for refunds under the IPTV Suisse Refund Policy. These exclusions are clearly stated to ensure full transparency before purchase.
              </p>

              <h3>4.1 Change of Mind</h3>
              <p>
                Refunds are not issued where a subscriber simply decides they no longer wish to use the service after activation, particularly where no technical fault has been reported and the service has been accessed.
              </p>

              <h3>4.2 Internet Connectivity Issues</h3>
              <p>
                IPTV Suisse delivers streams over your existing internet connection. Buffering, freezing, or degraded quality caused by insufficient internet speeds, unstable Wi-Fi connections, router issues, ISP throttling, or local network congestion are outside our control and do not constitute a service fault eligible for refund. We recommend testing your connection speed at fast.com before raising a refund claim.
              </p>

              <h3>4.3 Device Incompatibility Identified Post-Purchase</h3>
              <p>
                Our website clearly lists all supported devices and operating systems prior to purchase. Refunds are not issued where a user purchases a subscription for use on a device not listed as compatible on our website. We encourage all prospective subscribers to verify device compatibility or contact support before purchasing.
              </p>

              <h3>4.4 User Configuration Errors</h3>
              <p>
                Refunds are not issued for issues arising from incorrect app setup, misconfigured player settings, wrong credential entry, or failure to follow the installation instructions in our Setup Guide. Our 24/7 technical support team is available to resolve configuration issues at no cost.
              </p>

              <h3>4.5 Partially Used Subscription Periods</h3>
              <p>
                Where a subscription has been activated and the service has been used — even partially — for a portion of the billing period, refunds for the remaining unused period are not automatically issued unless the cancellation qualifies under the prorated refund consideration in Section 6.
              </p>

              <h3>4.6 Promotional, Discounted & Trial-Converted Plans</h3>
              <p>
                Subscriptions purchased at a promotional discount price or plans that converted from a free trial after the trial period expired are non-refundable once the billing period has commenced, unless a technical fault under Section 3.2 applies.
              </p>

              <h3>4.7 VPN or Proxy-Related Issues</h3>
              <p>
                IPTV Suisse does not require a VPN to function. Issues arising from the use of VPN, proxy, or anonymization services that interfere with stream delivery are excluded from refund eligibility.
              </p>

              <h2>5. Auto-Renewal Refund Window</h2>
              <p>
                IPTV Suisse subscription plans auto-renew at the end of each billing period unless cancelled in advance. The following protections apply to subscribers regarding auto-renewal charges:
              </p>
              <ul>
                <li>A renewal reminder email is sent to your registered address no fewer than 7 calendar days before any auto-renewal charge is processed</li>
                <li>If you did not intend to renew and were charged due to missing the cancellation window, you may submit a refund request within 48 hours of the renewal charge being processed</li>
                <li>Auto-renewal refund requests submitted within the 48-hour window where the renewed subscription has not been actively accessed will be reviewed and, where confirmed, refunded within 5 business days</li>
                <li>Auto-renewal refund requests submitted after 48 hours of the charge date are assessed on a case-by-case basis at our billing team's discretion</li>
              </ul>
              <p>
                To avoid unintended renewal charges, we recommend disabling auto-renewal through your account dashboard if you are uncertain about continuing your subscription.
              </p>

              <h2>6. Partial & Prorated Refund Consideration</h2>
              <p>
                IPTV Suisse does not issue automatic prorated refunds for mid-period cancellations as standard policy, given the digital and immediately accessible nature of streaming services. However, we recognize that exceptional circumstances may arise.
              </p>
              <p>
                Prorated refund requests may be considered at the sole discretion of our billing management team in the following circumstances:
              </p>
              <ul>
                <li>Verified extended service outage affecting your account for more than 72 consecutive hours caused by infrastructure failure on our side</li>
                <li>Documented medical emergency or serious personal circumstance preventing service use, supported by appropriate documentation</li>
                <li>Account closure required due to relocation to a country where the service is technically unavailable</li>
              </ul>
              <p>
                All prorated refund requests must be submitted to <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a> with supporting documentation. Our team will respond within 10 business days with a written decision.
              </p>

              <h2>7. Service Outage Compensation Policy</h2>
              <p>
                IPTV Suisse maintains a 99.9% server uptime commitment across all subscription tiers. In the event of a service outage or significant degradation caused by infrastructure failure on our side, the following compensation policy applies:
              </p>
              
              <div className="table-wrapper">
                <table className="glass-table">
                  <thead>
                    <tr>
                      <th>Outage Duration (Confirmed Provider-Side)</th>
                      <th>Compensation Offered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Under 2 hours</td>
                      <td>Within acceptable maintenance window — no compensation issued</td>
                    </tr>
                    <tr>
                      <td>2 to 12 hours</td>
                      <td>Account credit equivalent to 1 day of subscription value</td>
                    </tr>
                    <tr>
                      <td>12 to 24 hours</td>
                      <td>Account credit equivalent to 3 days of subscription value</td>
                    </tr>
                    <tr>
                      <td>24 to 72 hours</td>
                      <td>Account credit equivalent to 7 days of subscription value plus priority support</td>
                    </tr>
                    <tr>
                      <td>Over 72 hours</td>
                      <td>Full refund of the affected subscription period offered upon request</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Compensation is applied automatically to confirmed affected accounts. Outages caused by third-party CDN providers, upstream broadcast rights holders, force majeure events, or Swiss national internet infrastructure failures are excluded from this compensation schedule.
              </p>

              <h2>8. How to Submit a Refund Request</h2>
              <p>
                Submitting a refund request with IPTV Suisse is a straightforward four-step process designed to be as frictionless as possible.
              </p>
              
              <h3>Step 1 — Contact Our Billing Team</h3>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a></li>
                <li><strong>Subject Line:</strong> Refund Request — [Your Registered Email Address]</li>
              </ul>
              
              <h3>Step 2 — Include the Following Information</h3>
              <ul>
                <li>Full name as registered on your IPTV Suisse account</li>
                <li>Registered email address and username</li>
                <li>Date of purchase and subscription plan purchased</li>
                <li>Transaction reference number or payment confirmation email</li>
                <li>Clear description of the reason for your refund request</li>
                <li>Any relevant screenshots, error messages, or support ticket reference numbers</li>
              </ul>

              <h3>Step 3 — Await Acknowledgment</h3>
              <p>
                You will receive an acknowledgment email within 24 hours of submission confirming your request has been received and assigned a case reference number.
              </p>

              <h3>Step 4 — Review & Written Decision</h3>
              <p>
                Our billing team will review your request against the eligibility criteria in this policy and provide a written decision within the timeframes specified in Section 9 below.
              </p>

              <h2>9. Refund Processing Timeframes</h2>
              <p>
                IPTV Suisse is committed to processing all eligible refund requests promptly and transparently. The following timeframes apply from the date a refund is approved:
              </p>

              <div className="table-wrapper">
                <table className="glass-table">
                  <thead>
                    <tr>
                      <th>Refund Type</th>
                      <th>Decision Timeframe</th>
                      <th>Processing Timeframe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Duplicate payment</td>
                      <td>Within 24 hours</td>
                      <td>3–5 business days</td>
                    </tr>
                    <tr>
                      <td>Service non-delivery</td>
                      <td>Within 2 business days</td>
                      <td>5–7 business days</td>
                    </tr>
                    <tr>
                      <td>Persistent technical failure</td>
                      <td>Within 5 business days</td>
                      <td>5–7 business days</td>
                    </tr>
                    <tr>
                      <td>Auto-renewal (within 48-hour window)</td>
                      <td>Within 2 business days</td>
                      <td>5–7 business days</td>
                    </tr>
                    <tr>
                      <td>Unauthorized transaction</td>
                      <td>Within 3 business days</td>
                      <td>5–7 business days</td>
                    </tr>
                    <tr>
                      <td>Prorated / exceptional circumstances</td>
                      <td>Within 10 business days</td>
                      <td>7–10 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Refund Method:</strong> All approved refunds are returned exclusively to the original payment method used at the time of purchase. We are unable to issue refunds to a different card, bank account, or payment platform. Please allow up to 10 business days for the refund to appear on your statement depending on your bank or payment provider's processing time. IPTV Suisse does not charge any administrative fee for processing approved refunds.
              </p>

              <h2>10. Cancellation Procedure</h2>
              <p>
                You may cancel your IPTV Suisse subscription at any time using either of the following methods:
              </p>

              <h3>Method 1 — Self-Service Account Dashboard</h3>
              <p>
                Log in at https://iptvsuisse.online/, navigate to Account Settings → Subscription Management → Cancel Subscription, and follow the on-screen confirmation steps.
              </p>

              <h3>Method 2 — Email Cancellation Request</h3>
              <p>
                Send a cancellation request to <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a> with the subject line "Subscription Cancellation — [Your Registered Email]". Include your full name, registered email address, and username. Our team will confirm cancellation within 24 hours.
              </p>

              <h3>What Happens After Cancellation:</h3>
              <ul>
                <li>Your subscription remains fully active until the end of the current paid billing period</li>
                <li>No further charges will be applied after the current period ends</li>
                <li>Access to all IPTV Suisse services including live TV, VOD, and catch-up content ceases at midnight on the last day of your paid period</li>
                <li>Your account data is retained for 12 months post-cancellation per our Privacy Policy, then permanently deleted</li>
                <li>You may reactivate your subscription at any time by logging in and selecting a new plan</li>
              </ul>

              <h2>11. Chargeback & Payment Dispute Policy</h2>
              <p>
                IPTV Suisse handles payment disputes and chargeback requests transparently and fairly. We treat every billing concern as a legitimate issue deserving prompt attention.
              </p>

              <h3>11.1 Contact Us Before Initiating a Chargeback</h3>
              <p>
                We strongly encourage all subscribers to contact our billing team directly at <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a> before initiating a chargeback with their bank or payment provider. Most billing concerns are resolved within 24–48 hours through direct communication — faster than any chargeback process and without the delays introduced by bank processing timelines.
              </p>

              <h3>11.2 Chargeback Investigation Process</h3>
              <p>
                When a chargeback is initiated, IPTV Suisse will immediately investigate the disputed transaction against our billing and access records, respond to the chargeback with full transaction documentation as required by the payment processor, and suspend the associated account pending resolution to prevent continued unauthorized use.
              </p>

              <h3>11.3 Consequences of Fraudulent Chargebacks</h3>
              <p>
                Initiating a chargeback for a transaction that was authorized, where the service was delivered as described, and where no refund eligibility exists under this policy constitutes chargeback fraud. In confirmed cases, IPTV Suisse reserves the right to permanently terminate the associated account without refund and pursue recovery through appropriate legal channels.
              </p>
              <p>
                We want to be clear: this policy targets fraudulent chargebacks only. Legitimate billing disputes are always welcomed and handled respectfully through our direct support channels.
              </p>

              <h2>12. Escalation & Dispute Resolution</h2>
              <p>
                If you are dissatisfied with a refund decision made by our billing team, the following escalation options are available to you:
              </p>

              <h3>Internal Escalation</h3>
              <p>
                Submit a written escalation to <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a> with subject line "Refund Escalation — [Case Reference Number]". Escalated cases are reviewed by senior management and a final written decision is issued within 14 business days.
              </p>

              <h3>Swiss Consumer Mediation</h3>
              <p>
                Swiss consumers have the right to access accredited consumer mediation bodies for disputes that cannot be resolved directly with a service provider. Information on Swiss consumer mediation services is available through the Swiss State Secretariat for Economic Affairs (SECO) at <a href="http://www.seco.admin.ch" style={{ color: 'var(--color-green)' }} target="_blank" rel="noopener noreferrer">www.seco.admin.ch</a> and the Swiss Consumer Protection Foundation at <a href="http://www.konsumentenschutz.ch" style={{ color: 'var(--color-green)' }} target="_blank" rel="noopener noreferrer">www.konsumentenschutz.ch</a>.
              </p>

              <h3>Legal Proceedings</h3>
              <p>
                As a final resort, disputes may be brought before the competent civil courts of Switzerland in accordance with the jurisdiction clause in our Terms of Service.
              </p>

              <h2>13. Your Consumer Rights Under Swiss Law</h2>
              <p>
                Nothing in this Refund Policy diminishes or overrides your statutory rights as a consumer under Swiss law. The following legal frameworks provide baseline consumer protections that apply regardless of the terms of this policy:
              </p>
              <ul>
                <li><strong>Swiss Code of Obligations (OR)</strong> — governs contractual rights, service delivery obligations, and remedies for non-performance</li>
                <li><strong>Swiss Unfair Competition Act (UWG)</strong> — protects consumers against misleading commercial practices and deceptive billing</li>
                <li><strong>Swiss Price Disclosure Ordinance (PBV)</strong> — ensures all pricing is transparent and fully disclosed before purchase</li>
              </ul>
              <p>
                If you believe your statutory consumer rights have been violated beyond what our internal dispute process can resolve, you may seek independent guidance from the Swiss Consumer Protection Foundation at <a href="http://www.konsumentenschutz.ch" style={{ color: 'var(--color-green)' }} target="_blank" rel="noopener noreferrer">www.konsumentenschutz.ch</a> or contact the consumer protection authority of your canton.
              </p>

              <h2>14. Contact Information</h2>
              <p>
                For all refund requests, cancellation inquiries, billing disputes, and subscription management questions, contact the IPTV Suisse billing team:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:contact@iptvsuisse.online" style={{ color: 'var(--color-green)' }}>contact@iptvsuisse.online</a></li>
                <li><strong>Subject Format:</strong> Refund Request / Cancellation / Billing Dispute — [Your Registered Email]</li>
                <li><strong>Website:</strong> <a href="https://iptvsuisse.online/" style={{ color: 'var(--color-green)' }}>https://iptvsuisse.online/</a></li>
                <li><strong>Live Chat:</strong> Available 24/7 via our website chat widget</li>
                <li><strong>Response Guarantee:</strong> Acknowledgment within 24 hours; decision within timeframes specified per request type</li>
              </ul>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
