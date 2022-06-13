import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const VisionTitle = styled.div`
font-weight: bold;
font-size: 24px;
margin-top: 15px;
margin-bottom: 20px;
`;

const VisionContent = styled.div`
margin-top: 15px;
`;

const PrivacyPolicy = () => {


    return (
        <Container>
        
        <VisionTitle>Privacy Policy</VisionTitle>
        
        <VisionContent>
<p>1. What information do we collect and what do we do with it?</p>

<p>When you enroll as a student or subscriber (“learner”) on our Exo Solaria Union site or related courses, as part of the enrolling process, we collect the personal information you give us such as your name, email address, and country.

Email marketing: we may send you emails about our site and related course(s), registration, course content, your course progress or other updates. We may also use your email to inform you about changes to the course, survey you about your usage, or collect your opinion.
</p>
<p>2. How do you get my consent?</p>

<p>When you provide the Exo Solaria Union with personal information to become a learner on our site, make a purchase, or participate in a course or community, you imply that you consent to our collecting it and using it for that specific reason only.

If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.
</p>
<p>3. How do I withdraw my consent?</p>
<p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us through our CONTACT FORM.
</p>
<p>4. Disclosure</p>

<p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Use.</p>

<p>5. Thinkific</p>

<p>Our courses and site are hosted by Thinkific Labs Inc. (“Thinkific”). They provide us with the online course creation platform that allow us to sell our membership product/services to you.

Your data is stored through Thinkifics data storage, databases and the general Thinkific application. They store your data on a secure server behind a firewall.
</p>
<p>6. Payment:</p>

<p>If you make a purchase on our site, we use a third party payment processor known as Stripe. Payments are encrypted through the Payment Card Industry Data Security Standard (PCI-DSS). Your purchase transaction data is stored only as long as is necessary to complete your purchase transaction.

All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.

PCI-DSS requirements help ensure the secure handling of credit card information by our site and related courses and its service providers.

For more insight, you may also want to read Thinkific’s Privacy Statement here https://www.thinkific.com/resources/privacy-policy/ or Terms of Service here https://www.thinkific.com/resources/terms-of-service/.
</p>
<p>5. Third Party Services</p>

<p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.

However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.

For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.

Certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. If you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.

As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.

Once you leave our course website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.
</p>
<p>6. Links</p>

<p>When you click on links on our course site, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
</p>
<p>7. Security</p>

<p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.

If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption.  Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.
</p>
<p>8. Cookies</p>

<p>We collect cookies or similar tracking technologies. This means information that our website’s server transfers to your computer. This information can be used to track your session on our website. Cookies may also be used to customize our website content for you as an individual. If you are using one of the common Internet web browsers, you can set up your browser to either let you know when you receive a cookie or to deny cookie access to your computer.

We use cookies to recognize your device and provide you with a personalized experience.

We also use cookies to attribute visits to our websites to third-party sources and to serve targeted ads from Google, Facebook, Instagram and other third-party vendors.

Our third-party advertisers use cookies to track your prior visits to our websites and elsewhere on the Internet in order to serve you targeted ads. For more information about targeted or behavioral advertising, please visit https://www.networkadvertising.org/understanding-online-advertising.

Opting out: You can opt out of targeted ads served via specific third-party vendors by visiting the Digital Advertising Alliance’s Opt-Out page.

We may also use automated tracking methods on our websites, in communications with you, and in our products and services, to measure performance and engagement.

Please note that because there is no consistent industry understanding of how to respond to “Do Not Track” signals, we do not alter our data collection and usage practices when we detect such a signal from your browser.
</p>
<p>9. Web Analysis Tools</p>

<p>We may use web analysis tools that are built into the EXO SOLARIA UNION website to measure and collect anonymous session information.
</p>
<p>10. Age of Consent</p>

<p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence.
</p>
<p>11. Changes to this Privacy Policy</p>
<p>
We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.

If our site or course is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
</p>
<p>QUESTIONS AND CONTACT INFORMATION</p>
<p>
If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Founder through our CONTACT FORM.
</p>        
        </VisionContent>
    </Container>
    );
};

export default PrivacyPolicy;