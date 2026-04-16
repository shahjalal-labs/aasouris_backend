import { Router } from "express";

const stripeOnboardingSuccess = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Stripe Onboarding Success</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    * {
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f6f6;
      padding: 0;
      margin: 0;
    }
    .container {
      max-width: 400px;
      margin: 80px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #4caf50;
      text-align: center;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      color: #333;
      text-align: center;
      margin-bottom: 20px;
    }
    button {
      width: 100%;
      padding: 12px;
      background-color: #2563eb;
      color: #ffffff;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: #1d4ed8;
    }
    .note {
      font-size: 13px;
      color: #555;
      text-align: center;
      margin-top: 15px;
    }
</style>
</head>
<body>
<div class="container">
<h2>Onboarding Successful!</h2>
<p>You can now go back to the app and enjoy general use.</p>
</div>
</body>
</html>
 `;
};

const tapinPrivacyPolicy = () => {
  return `
  <!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Tapin — Privacy Policy</title>
<meta name="description" content="Full Privacy Policy for Tapin mobile application"/>
<style>
:root{
--bg:#f7f8fb;
--card:#ffffff;
--text:#0f172a;
--muted:#6b7280;
--accent:#2563eb;
font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
body{margin:0;background:var(--bg);padding:32px;color:var(--text);}
.wrap{max-width:1000px;margin:0 auto;}
.card{background:var(--card);border-radius:12px;padding:28px;
box-shadow:0 6px 18px rgba(0,0,0,0.05);margin-bottom:20px;}
h1{font-size:24px;margin:0 0 8px;color:var(--accent);}
h2{font-size:18px;margin-top:32px;margin-bottom:12px;}
h3{font-size:16px;margin-top:24px;margin-bottom:8px;}
p,li{font-size:15px;line-height:1.7;}
ul{margin-left:22px;margin-bottom:16px;}
table{width:100%;border-collapse:collapse;margin-top:12px;font-size:14px;}
th,td{border:1px solid #e5e7eb;padding:10px 12px;text-align:left;vertical-align:top;}
th{background:#f1f5f9;font-weight:600;}
.muted{color:var(--muted);}
footer{text-align:center;margin-top:40px;font-size:13px;color:var(--muted);}
strong{font-weight:600;}
</style>
</head>
<body>
<div class="wrap">
<header class="card">
<h1>Tapin Privacy Policy</h1>
<p class="muted"><strong>Version:</strong> 1.0</p>
<p class="muted"><strong>Last Updated:</strong> March 2, 2026</p>
<p class="muted"><strong>Effective Date:</strong> March 2, 2026</p>
</header>

<section class="card">

<h2>1. INTRODUCTION</h2>
<p>Welcome to Tapin ("we," "our," or "us"), where you can discover and join real-world activities and events happening around you. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, website, and services that connect people to discover, share, and participate in local activities and events. Undefined terms in this Privacy Policy will have the same definition as in our Terms of Service.</p>

<h2>2. INFORMATION WE COLLECT</h2>
<p>Some of the information we collect is necessary for you to create and maintain a Tapin account, and some voluntary. However, if you don't provide necessary information when requested, then we may not be able to provide you with access to the App or fulfill our obligations to you (such as providing services you request).</p>

<h3>Information You Provide</h3>
<ul>
<li>Contact information (e.g., name, email, phone number)</li>
<li>Profile details (e.g., age, gender, interests, bio)</li>
<li>Content you submit (e.g., messages, activities you create or join)</li>
<li>Images and photos you share in chat or on your profile</li>
<li>Profile picture(s) for verification purposes (to confirm you are real)</li>
<li>Referral information (e.g., how you heard about Tapin)</li>
<li>Location information you voluntarily share with other users (e.g., pin drops in chat)</li>
</ul>

<h3>Information We Collect Automatically</h3>
<ul>
<li><strong>Location Information:</strong> We collect location information through your device to show you nearby activities and events. You can limit this collection via your device controls.</li>
<li><strong>App Usage:</strong> We collect information about when and how you use Tapin, including what activities you view, which events you join, and how you interact with the community.</li>
<li><strong>Log Data and Device Information:</strong> We automatically collect certain technical information when you use Tapin to ensure proper functionality and improve performance. This may include your device model, operating system version, app version, language, time zone, IP address, and diagnostic data related to log-ins, crashes, or errors.</li>
</ul>

<h3>Profile Picture Verification</h3>
<p>When you create or update your Tapin profile, you may be asked to submit a profile picture for verification purposes. This verification helps confirm that your profile represents a real person and maintains the integrity of our community. Verification images are processed using AI-powered tools and may be compared with your primary profile picture. After verification is complete, verification images are retained only as long as necessary for safety and fraud prevention purposes, or as required by applicable law.</p>

<h3>Image Analysis</h3>
<p>All photos and images you upload—including profile pictures and images shared in chats or activities—are automatically analyzed using AI-powered tools to detect explicit, violent, or otherwise prohibited content. This helps maintain a safe community and uphold our Community Guidelines. In some cases, flagged images may be reviewed by trained human moderators under confidentiality obligations. We do not use these images to train external or internal AI models, and analysis is limited to safety and policy-enforcement purposes.</p>

<h2>3. HOW WE USE YOUR INFORMATION</h2>
<p>We use the personal information we collect mainly to provide Tapin to you and to improve it. Specifically, we may use the data we collect to:</p>
<ul>
<li>Provide the Products you requested, including discovery of nearby activities and events</li>
<li>Register your account and verify your identity</li>
<li>Develop, operate, improve, maintain, and protect Tapin</li>
<li>Manage and administer your subscription (if you have one)</li>
<li>Personalize Tapin, including to show nearby activities, nearby users with shared interests, and activity recommendations</li>
<li>Verify and enhance the safety and security of Tapin</li>
<li>Verify and analyze user engagement, trends, and usage</li>
<li>Handle and record user rights requests, including opt-ins and opt-outs</li>
<li>Prevent fraud or other unauthorized or illegal activity</li>
<li>Enforce, investigate, and report conduct violating our Terms of Service, Community Guidelines, or other policies</li>
<li>Respond to requests from law enforcement agencies or other government agencies, and comply with legal or regulatory requirements</li>
<li>Provide aggregated engagement analytics without sharing personal or identifiable user information</li>
</ul>

<h3>Location Data</h3>
<p>We collect your location to:</p>
<ul>
<li>Show you nearby activities and events relevant to your area</li>
<li>Calculate your distance from other users for the "People Here" list</li>
<li>Generate personalized recommendations</li>
<li>Enable the core discovery functionality of Tapin</li>
</ul>
<p>Your precise location is stored on our servers. When other users view the "People Here" list, they can see your distance from them (not your exact coordinates). When you choose to share your location with other users directly (e.g., by dropping a pin in chat when meeting up), that sharing is entirely voluntary and at your discretion.</p>
<p>You can disable location services for Tapin at any time through your device settings, though this may limit your ability to discover nearby activities and appear in the "People Here" list. You can also enable "Snooze Mode" to hide yourself from discovery features.</p>

<h3>Legal Bases</h3>
<p>The table below sets out a description of all the ways we use your personal data, and which of the justifications we rely on to do so. We have also identified what our legitimate interests are where we rely on that justification for processing.</p>

<table>
<thead>
<tr>
<th>Purpose</th>
<th>Legal Bases</th>
<th>Data Categories Used</th>
</tr>
</thead>
<tbody>
<tr>
<td>Create and maintain your account and enable account login/authentication</td>
<td>Contractual Necessity</td>
<td>Contact info; profile details; profile photos; verification images; device/log data</td>
</tr>
<tr>
<td>Verify your identity and authenticity</td>
<td>Contractual necessity; legitimate interests (platform safety)</td>
<td>Verification images; profile details; AI comparison data</td>
</tr>
<tr>
<td>Enable chat, groups, and activity participation</td>
<td>Contractual Necessity</td>
<td>Profile info; messages; group membership; device/log data</td>
</tr>
<tr>
<td>Display nearby users and activities</td>
<td>Consent (for location); legitimate interests (to provide core functionality)</td>
<td>Location grid data; profile info; activity participation</td>
</tr>
<tr>
<td>Personalize suggestions and activity recommendations</td>
<td>Legitimate interests (service improvement)</td>
<td>Location; interests; app usage data</td>
</tr>
<tr>
<td>Process subscriptions and payments</td>
<td>Contractual necessity; legal obligation (tax/audit)</td>
<td>Transaction identifiers; subscription status; email</td>
</tr>
<tr>
<td>Improve, troubleshoot, and secure the app</td>
<td>Legitimate interests</td>
<td>Analytics data; log data; crash reports</td>
</tr>
<tr>
<td>Investigate and act on policy violations or legal requests</td>
<td>Legal obligation; legitimate interests (platform safety)</td>
<td>Any relevant account, content, or log data</td>
</tr>
</tbody>
</table>

<h3>Automated Decision-Making</h3>
<p>Tapin does not make decisions with significant legal or similar effects based solely on automated processing. AI-based systems are used only to assist with moderation, recommendations, and safety features, under human oversight.</p>

<h2>4. HOW WE SHARE INFORMATION</h2>
<p>We may share Personal Information we collect about you:</p>
<ul>
<li>With other Tapin users, according to your account preferences and consistent with our Terms of Service and Community Guidelines</li>
<li>With service providers who help us operate Tapin (for example, for hosting, analytics, messaging, or customer support). These providers only access the information necessary to perform their services and are bound by confidentiality and data protection obligations</li>
<li>For legal, safety, and protection purposes, including to comply with law enforcement requests, subpoenas, or court orders, or to protect the rights, property, and safety of Tapin, our users, or the public</li>
<li>To enforce our rights, including investigating or preventing potential violations of our Terms of Service, Community Guidelines, or applicable law</li>
<li>In connection with a corporate transaction, such as a merger, acquisition, financing, or sale of assets. In such cases, any successor entity will be required to treat your information in a manner consistent with this Privacy Policy</li>
</ul>
<p>We do not sell your personal information and we do not share your personal information with third parties for cross-context behavioral advertising.</p>

<h3>Other Users and "People Here" List</h3>
<p>When you are in a given area, your public profile (including name, profile photo, age, and interests) may appear in the "People Here" list visible to other users in that area. When another user clicks on the "People Here" list, they can see your name and your distance from them. Your exact location is never shown to other users; instead, we show only the distance between you and them.</p>
<p>When you join an activity or event, your public profile may also be visible to other participants. You can disable visibility of your profile in certain activities through your privacy settings.</p>
<p>Users can enable "Snooze Mode" at any time to hide themselves from the "People Here" list, activity discovery, and the community map.</p>

<h3>Third-Party Service Providers</h3>
<p>We use third-party providers to enable essential app functions, such as analytics and messaging. Service Providers will have access to your Personal Information needed to perform their business functions, but may not use or share that Personal Information for purposes outside the scope of their functions related to Tapin:</p>
<ul>
<li>Cloud hosting and backend services (Firebase, AWS, or similar)</li>
<li>Chat and messaging functionality (Stream Chat or similar)</li>
<li>Analytics and crash reporting</li>
<li>Payment processing (Apple, Google, or Stripe)</li>
<li>AI-powered image moderation</li>
<li>Independent Moderators and Reviewers – In limited cases, we may engage independent contractors to assist with human review for content moderation. These contractors are bound by confidentiality agreements and data protection obligations and are only permitted to access the minimum information necessary to perform their assigned tasks</li>
</ul>

<h3>Legal Compliance</h3>
<p>We may share your information when required by law, including in response to:</p>
<ul>
<li>Law enforcement requests, subpoenas, or court orders</li>
<li>Legal obligations related to fraud prevention, financial regulations, or national security</li>
<li>Compliance with applicable data protection laws, including GDPR and CCPA/CPRA</li>
</ul>

<h3>Security &amp; Protection</h3>
<p>We may also process or share your information when necessary to:</p>
<ul>
<li>Detect, investigate, and prevent fraudulent activities, unauthorized access, or security threats</li>
<li>Enforce our Terms of Service and protect the rights, safety, and property of Tapin, our users, or the public</li>
<li>Respond to reports of inappropriate content or violations of our community guidelines</li>
</ul>

<h2>5. THIRD-PARTY SERVICES</h2>
<p>Parts of Tapin may link to or integrate with third-party services. Tapin does not own or control these third parties, and this Privacy Policy does not apply to their data practices. When you interact with these services or choose to link your Tapin account (for example, with a social network), you are providing your information directly to that third party. Please review their privacy policies before sharing any information.</p>

<h2>6. DATA SECURITY</h2>
<p>While no organization can guarantee perfect security, we are continuously implementing and updating administrative, technical, and physical security measures to help protect your information against unlawful or unauthorized access, loss, destruction, or alteration.</p>
<p>Access to personal data is restricted to authorized personnel and service providers under strict contractual and technical safeguards, and data is encrypted in transit and at rest where applicable.</p>

<h2>7. YOUR PRIVACY RIGHTS AND CHOICES</h2>
<p>You can control your experience on Tapin via the settings in the app, including by:</p>
<ul>
<li>Updating your contact information</li>
<li>Unsubscribing from marketing emails</li>
<li>Turning off push notifications</li>
<li>Restricting sharing of your location</li>
<li>Enabling "Snooze Mode" to hide your profile from discovery</li>
</ul>
<p>Depending on your location, you may have additional rights under local privacy laws:</p>

<h3>Access and Portability</h3>
<p>You may request certain copies of your personal information held by us. In certain instances, you also have the right to request copies of personal information that you have provided to us in a structured, commonly used, and machine-readable format and/or request us to transmit this information to another service provider (where technically feasible).</p>

<h3>Rectification</h3>
<p>You may ask us to correct inaccurate or incomplete personal information about you (and which you cannot update yourself within your Tapin account).</p>

<h3>Erasure</h3>
<p>We generally retain your personal information for as long as is necessary for the performance of the contract between you and us, to comply with our legal obligations, and as permitted by applicable law. You may ask us to delete your personal information, subject to certain limitations and restrictions. Verification images are retained only for as long as necessary for safety and fraud prevention purposes. You can request the deletion of your verification images at any time by contacting us at tapinappmobile@gmail.com.</p>
<p>Please note that if you request the erasure of your personal information, we may retain certain information about you:</p>
<ul>
<li>As necessary for our legitimate business interests and safety, such as prevention of money laundering, fraud detection and prevention, and enhancing safety</li>
<li>To the extent necessary to comply with our legal, tax, reporting, and auditing obligations</li>
</ul>

<h3>Withdrawing Consent</h3>
<p>If we are processing your personal information based on your consent, you can withdraw your consent at any time by changing your account settings or, consistent with applicable law, by emailing tapinappmobile@gmail.com specifying which consent you are withdrawing. Please note that the withdrawal of your consent does not affect the lawfulness of any processing activities based on such consent before its withdrawal.</p>

<h3>Restriction of Processing</h3>
<p>You may ask us to limit the ways in which we use your personal information, in particular where (i) you contest the accuracy of your personal information, (ii) the processing is unlawful and you oppose the erasure of your personal information, (iii) we no longer need your personal information for the purposes of the processing, but you require the personal information for the establishment, exercise, or defence of legal claims, or (iv) you have objected to the processing and pending the verification whether the legitimate grounds of Tapin override your own.</p>

<h3>Objection to Processing</h3>
<p>You may contact us to tell us that you object to the processing of your personal information based on grounds specific to your situation if such processing is for direct marketing or is for a purpose based on a legitimate interest or public interest. If you object to processing based on legitimate or public interests, we will no longer process your personal information for these purposes unless we have compelling legitimate grounds for such processing or where the processing is otherwise lawful or required for the establishment, exercise, or defence of legal claims. To submit an objection, you may send us an email at tapinappmobile@gmail.com.</p>

<h3>Opting Out of Personalized Advertising</h3>
<p>We do not show personalized ads in the Tapin app and we do not sell or share personal information for cross-context behavioral advertising.</p>

<h3>Opt-Out Signals</h3>
<p>We strive to honor opt-out preference signals where required by applicable law. When we detect an opt-out preference signal, we will make reasonable efforts to honor such opt outs for jurisdictions that require them. Please note that your opt-out preference signal might only apply to the particular browser, device, or technology that you use to opt-out.</p>

<h2>8. DATA RETENTION</h2>
<p>We retain personal information for as long as needed or as permitted in light of the purpose(s) for which it was obtained and further processed and consistent with applicable law. The criteria used to determine our retention periods include:</p>
<ul>
<li>The length of time we have an ongoing relationship with you and provide services to you, what activities you engage in on the platform, and the length of time during which we may have a legitimate need to retain your personal information, such as to manage and protect our business, to address issues or defend claims that may arise</li>
<li>Whether there is a legal, tax, reporting, or auditing obligation to which we are subject, such as anti-money laundering requirements that requires us to keep records for a certain period of time before we can delete them</li>
<li>Whether retention is advisable in light of our legal position or to protect the safety of individuals, which includes retention that is required or prudent in accordance with applicable statutes of limitations, litigation, or regulatory investigations</li>
</ul>

<h3>Residual Copies</h3>
<p>Because we take measures to protect data from accidental or malicious loss and destruction, residual copies of your personal information may not be removed from our backup systems for a limited period of time.</p>

<h2>9. INTERNATIONAL DATA TRANSFERS</h2>
<p>As a global platform, we may transfer, store, and process your information with partners and service providers based in Europe, Asia Pacific, and North and South America, including the United States. Laws in these countries may differ from the laws applicable to your country of residence. In certain circumstances, courts, law enforcement agencies, regulatory agencies, or security authorities in these other countries may be entitled to access your personal information. Where necessary, measures have been taken pursuant to applicable data protection law, such as standard contractual clauses, to protect this personal data. When we transfer personal data from the EEA/UK to countries without an adequacy decision (e.g., the U.S.), we rely on the European Commission’s Standard Contractual Clauses (and the UK IDTA/Addendum, as applicable).</p>

<h2>10. CALIFORNIA "SHINE THE LIGHT" LAW</h2>
<p>California residents may request information about whether we disclose personal data to third parties for their direct marketing purposes. Tapin does not sell or share personal data with third parties for their direct marketing purposes.</p>
<p>If you have questions about how we handle your data, contact us at tapinappmobile@gmail.com.</p>

<h2>11. CHILDREN'S PRIVACY</h2>
<p>Our service is not intended for users under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware of such collection, we will delete the information promptly.</p>

<h2>12. CHANGES TO THIS PRIVACY POLICY</h2>
<p>We may modify this Privacy Policy at any time in accordance with applicable law. When we do, we will post the revised version within the app and on our website and update the "Last Updated" date at the top. For material changes, we may also notify you by email, in-app message, or other reasonable means. Your continued use of Tapin after the updated version is posted constitutes your acceptance of the revised Privacy Policy.</p>

<h2>13. CONTACT INFORMATION</h2>
<p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:</p>
<p><strong>Email:</strong> tapinappmobile@gmail.com</p>
<p><strong>Mailing Address:</strong><br>
OfftheGrid App LLC<br>
1700 Willow Creek Dr<br>
Austin, Texas 78741<br>
United States of America</p>

<p><strong>For Users in the EU/EEA</strong><br>
OfftheGrid App LLC is the data controller responsible for your personal data. EU users may contact us at tapinappmobile@gmail.com for any privacy-related questions or to exercise their data rights. You also have the right to lodge a complaint with your local supervisory authority.</p>

</section>

<footer>
© 2026 OfftheGrid App LLC — Tapin Privacy Policy
</footer>
</div>
</body>
</html>
`;
};

const tapinTermsOfService = () => {
  return `
  <!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Tapin — Terms of Service</title>
<meta name="description" content="Full Terms of Service for Tapin mobile application"/>
<style>
:root{
--bg:#f7f8fb;
--card:#ffffff;
--text:#0f172a;
--muted:#6b7280;
--accent:#2563eb;
font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
body{margin:0;background:var(--bg);padding:32px;color:var(--text);}
.wrap{max-width:1000px;margin:0 auto;}
.card{background:var(--card);border-radius:12px;padding:28px;
box-shadow:0 6px 18px rgba(0,0,0,0.05);margin-bottom:20px;}
h1{font-size:24px;margin:0 0 8px;color:var(--accent);}
h2{font-size:18px;margin-top:32px;margin-bottom:12px;}
h3{font-size:16px;margin-top:24px;margin-bottom:8px;}
p,li{font-size:15px;line-height:1.7;}
ul{margin-left:22px;margin-bottom:16px;}
table{width:100%;border-collapse:collapse;margin-top:12px;font-size:14px;}
th,td{border:1px solid #e5e7eb;padding:10px 12px;text-align:left;vertical-align:top;}
th{background:#f1f5f9;font-weight:600;}
.muted{color:var(--muted);}
footer{text-align:center;margin-top:40px;font-size:13px;color:var(--muted);}
strong{font-weight:600;}
</style>
</head>
<body>
<div class="wrap">
<header class="card">
<h1>Tapin Terms of Service</h1>
<p class="muted"><strong>Version:</strong> 1.0</p>
<p class="muted"><strong>Last Updated:</strong> March 2, 2026</p>
<p class="muted"><strong>Effective Date:</strong> March 2, 2026</p>
</header>

<section class="card">

<h2>1. INTRODUCTION</h2>
<p>Welcome to Tapin.</p>
<p>OfftheGrid App LLC is a company registered in the United States that provides a social discovery platform that helps users discover, see on a community map, join, and host real-world activities and events happening nearby. Tapin connects people who share common interests through in-person meetups and shared experiences, rather than just online conversation. Tapin offers both free and premium features that enable users to explore activities, connect with others, and meet in real life.</p>
<p>By using Tapin, you acknowledge you have read, understood, and agreed to these Terms.</p>
<p>The terms "us", "we", "Company" and/or "Tapin" refer to OfftheGrid App LLC. Together you and Tapin may be referred to as the "Parties" or separately as "Party".</p>
<p>As used in this Agreement, the terms "Tapin," "us," "we," the "Company", and "our" shall refer to OfftheGrid App LLC. By accessing or using our Services on the Tapin mobile application (the "App"), or any other platforms or services Tapin may offer (collectively, the "Service" or our "Services"), you agree to, and are bound by this Agreement. This Agreement applies to anyone who accesses or uses our Services, regardless of registration or subscription status.</p>
<p>Your access and use of our Services is also subject to our Privacy Policy, Community Guidelines, and Safety Tips (if applicable), and any terms disclosed and agreed to by you when you purchase additional features, products, or services from Tapin ("Additional Terms Upon Purchase"), which are incorporated into this Agreement by reference. If you do not wish to be bound by this Agreement, do not access or use our Services.</p>
<p>Subject to applicable law, we reserve the right to modify, amend, or change the Terms at any time. Notice of material changes will be posted on this page with an updated effective date. In certain circumstances, we may notify you of a change to the Terms via email or other means; however, you are responsible for regularly checking this page for any changes. Your continued access or use of our Services constitutes your ongoing consent to any changes, and as a result, you will be legally bound by the updated Terms. If you do not accept a change to the Terms, you must stop accessing or using our Services immediately. Notwithstanding the foregoing, any material changes to the Limitation of Liability in Section 13 and the Dispute Resolution provisions in Section 14 below will require your affirmative acceptance. Further, we reserve the right to change the availability of features in our subscription plans.</p>

<h2>2. ACCOUNT ELIGIBILITY; YOUR RESPONSIBILITIES</h2>
<p>Before you create an account on Tapin, make sure you are eligible to use our Services. This Section also details what you can and can't do when using the Services, as well as the rights you grant Tapin.</p>
<p>You are not authorized to create an account or use the Services unless all of the following are true, and by using our Services, you represent and warrant that:</p>
<ul>
<li>You are an individual (i.e., not any body corporate, partnership or other business entity) at least 18 years old;</li>
<li>You are legally qualified to enter a binding contract with Tapin;</li>
<li>You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country;</li>
<li>You are not on any list of individuals prohibited from conducting business with the United States (for example, the U.S. Treasury Department's list of Specially Designated Nationals or any similar government agency list) nor do you face any other similar prohibition;</li>
<li>You are not prohibited by law from using our Services;</li>
<li>You have not committed, been convicted of, or pled no contest to a felony or indictable offense (or crime of similar severity), a sex crime, or any crime involving violence or a threat of violence, unless you have received clemency for a non-violent crime and we have determined that you are not likely to pose a threat to other users of our Services;</li>
<li>You are not required to register as a sex offender with any state, federal or local sex offender registry;</li>
<li>You do not have more than one account on our Services; and</li>
<li>You have not previously been removed from our Services or our affiliates' services by us or our affiliates, unless you have our express written permission to create a new account.</li>
<li>You consent to Tapin collecting and processing your profile picture verification data (submitted images) for the purposes of verifying that you are a real person and maintaining the integrity of our community.</li>
</ul>
<p>If at any time you cease to meet these requirements, all authorization to access our Services or systems is automatically revoked, and you must immediately delete your account, and we retain the right to remove your access to our Services without warning.</p>
<p>You agree to:</p>
<ul>
<li>Comply with these Terms, and check this page from time to time to ensure you are aware of any changes;</li>
<li>Comply with all applicable laws, including without limitation, privacy laws, intellectual property laws, anti-spam laws, and regulatory requirements;</li>
<li>Use the latest version of the App;</li>
<li>Review any Safety Tips we provide;</li>
<li>Review and comply with our Community Guidelines, as updated from time to time;</li>
<li>Take reasonable measures to protect the security of your login information.</li>
</ul>
<p>You agree that you will not:</p>
<ul>
<li>Misrepresent your identity, age, or affiliations with a person or entity;</li>
<li>Use the Services in a way that damages the Services or prevents their use by other users;</li>
<li>Use our Services in a way to interfere with, disrupt or negatively affect the platform, the servers, or our Services' networks;</li>
<li>Use our Services for any harmful, illegal, or nefarious purposes;</li>
<li>Harass, bully, stalk, intimidate, assault, defame, harm or otherwise abuse or cause psychological harm;</li>
<li>Post or share Prohibited Content (see below);</li>
<li>Solicit passwords for any purpose, or personal identifying information for commercial or unlawful purposes from other users or disseminate another person's personal information without his or her permission;</li>
<li>Solicit money or other items of value from another user, whether as a gift, loan, or form of compensation;</li>
<li>Use another user's account;</li>
<li>Use our Services in relation to fraud, a pyramid scheme, or other similar practice;</li>
<li>Use our Services in relation to any political campaign financing or for the purpose of influencing any election, other than sharing your own personal political opinions;</li>
<li>Violate the terms of the license granted to you by Tapin (see Section 6 below);</li>
<li>Disclose private or proprietary information that you do not have the right to disclose;</li>
<li>Copy, modify, transmit, distribute, or create any derivative works from, any Member Content or Our Content, or any copyrighted material, images, trade names, service marks, or other intellectual property, content or proprietary information accessible through our Services without Tapin's prior written consent;</li>
<li>Express or imply that any statements you make are endorsed by Tapin;</li>
<li>Use any robot, crawler, site search/retrieval application, proxy or other manual or automatic device, method or process to access, retrieve, index, "data mine," or in any way reproduce or circumvent the navigational structure or presentation of our Services or its contents;</li>
<li>Upload viruses or other malicious code or otherwise compromise the security of our Services;</li>
<li>Forge headers or otherwise manipulate identifiers to disguise the origin of any information transmitted to or through our Services;</li>
<li>"Frame" or "mirror" any part of our Services without Tapin's prior written authorization;</li>
<li>Use meta tags or code or other devices containing any reference to Tapin or the platform (or any trade name, service mark, logo or slogan of Tapin) to direct any person to any other website for any purpose;</li>
<li>Modify, adapt, sublicense, translate, sell, reverse engineer, decipher, decompile or otherwise disassemble any portion of our Services, or cause others to do so;</li>
<li>Use or develop any third-party applications that interact with our Services or Member Content or information without our written consent, including but not limited to artificial intelligence or machine learning systems;</li>
<li>Use, access, or publish the Tapin application programming interface without our written consent;</li>
<li>Probe, scan or test the vulnerability of our Services or any system or network;</li>
<li>Encourage, promote, or agree to engage in any activity that violates these Terms;</li>
<li>Create a new account after we suspend or terminate your account, unless you receive our express permission; or</li>
<li>Submit a report about a member's behavior or content that is false, misleading, or otherwise manifestly unfounded, or abuse any Tapin reporting or appeals request system made available.</li>
</ul>
<p>The license granted to you under these Terms and any authorization to access the Services is automatically revoked in the event that you do any of the above.</p>

<h3>Prohibited Content</h3>
<p>Tapin prohibits uploading or sharing content that:</p>
<ul>
<li>Could reasonably be deemed to be offensive or to harass, abuse or cause psychological distress to another person;</li>
<li>Is obscene, pornographic, violent or contains nudity;</li>
<li>Is abusive, threatening, discriminatory or that promotes or encourages racism, sexism, hatred or bigotry;</li>
<li>Encourages or facilitates any illegal activity including, without limitation, terrorism, inciting racial hatred or the submission of which in itself constitutes committing a criminal offense;</li>
<li>Encourages or facilitates any activity that may result in harm to the user or another person, including, but not limited to, promotion of self-harm, eating disorders, dangerous challenges, violent extremism;</li>
<li>Is defamatory, libelous, or untrue;</li>
<li>Relates to commercial activities (including, without limitation, sales, competitions, promotions, and advertising, solicitation for services or transactional relationships not aligned with the purpose of the platform);</li>
<li>Involves or facilitates the transmission of spam;</li>
<li>Contains any spyware, adware, viruses, corrupt files, worm programs or other malicious code designed to interrupt, damage or limit the functionality of or disrupt any software, hardware, telecommunications, networks, servers or other equipment, Trojan horse or any other material designed to damage, interfere with, wrongly intercept or expropriate any data or personal information whether from Tapin or otherwise;</li>
<li>Infringes upon any third party's rights (including, without limitation, intellectual property rights and privacy rights);</li>
<li>Was not created by you, unless you have their permission;</li>
<li>Includes the image or likeness of another person without that person's consent (or in the case of a minor, the minor's parent or guardian);</li>
<li>Includes an image or likeness of a minor who is unaccompanied by the minor's parent or guardian or not fully clothed or otherwise depicts or implies a minor engaged in sexual activity;</li>
<li>Is inconsistent with the intended use of the Services; or</li>
<li>May harm the reputation of Tapin or its affiliates, meaning the uploading or sharing of content on the Tapin platform that is defamatory to Tapin or its affiliates or advocates misuse of the Service or any service provided by Tapin's affiliates.</li>
</ul>
<p>The uploading or sharing of content that violates these Terms ("Prohibited Content") may result in the immediate suspension or termination of your account.</p>
<p>Our Community Guidelines form part of these Terms and outline what content and conduct is accepted on and off our App. You agree to comply with our Community Guidelines as may be updated from time to time. Please review the Community Guidelines carefully, because violating it could result in your removal or permanent ban from Tapin, or even legal action.</p>
<p>You can create an Account by signing in with your Apple account or with your Google account if you are on an Apple device or an Android device, respectively. When you create an Account using your Apple account or your Google account, you authorize us to access, display and use your name from your Apple account or your Google account.</p>
<p>We use a combination of automated systems, AI-powered moderation tools, and human review to monitor and review accounts and content for potential violations of these Terms or our Community Guidelines. Automated systems may flag messages or content that appear to violate our policies (for example, harassment, scams, or spam).</p>
<p>When content is flagged—either automatically or by another user—our moderation team may review the relevant messages, profile information, or activity history to determine whether a violation occurred. We do not read private messages except when they are flagged by our automated filters or reported by users.</p>
<p>To keep the platform safe, Tapin uses automated and human-assisted tools—including image analysis—to scan all photos and other images you upload for explicit or otherwise prohibited content (e.g., nudity/sexual content, exploitation, graphic violence, spam/scams). Uploading content may trigger automated actions (e.g., warning screens, removal, temporary holds) and human review. False positives can occur; if you believe we made a mistake, you may appeal through in-app support.</p>
<p>We maintain a zero-tolerance policy for child sexual abuse material. Where required by law, we report suspected CSAM to the National Center for Missing & Exploited Children (NCMEC) and/or law enforcement.</p>
<p>We reserve the right at our sole discretion to terminate or suspend any Account, restrict access to the App, or make use of any operational, technological, legal or other means available to enforce the Terms (including without limitation blocking specific IP addresses). For users residing in the European Union ("EU"), we will notify you when we take action against your Account or Your Content (defined below) unless it is not appropriate for us to do so (for example, where we are not permitted by law enforcement agencies). For all other users, we may take such action, at any time without liability and without the need to give you prior notice. Without limiting the foregoing in any way and unless otherwise prohibited by mandatory laws in the country in which you reside, we expressly reserve the right to terminate or suspend your Account without notice (1) for violating these Terms, (2) due to your conduct on the App, or your conduct with other users of the App (including your "offline" conduct), if we, in our sole discretion, determine your conduct was inappropriate or improper, or (3) for any reasons whatsoever that we deem, in our sole discretion, justifies termination. If your Account is terminated or suspended, you agree you will not receive a refund for any paid service or features you have already been charged for.</p>

<h2>3. CONTENT</h2>
<p>It is important that you understand your rights and responsibilities with regard to the content on our Services, including any content you provide or post. You are expressly prohibited from posting inappropriate content.</p>
<p>While using our Services, you will have access to: (i) content that you upload or provide while using our Services, even if suggested by our Services ("Your Content"); (ii) content that other users upload or provide while using our Services ("Member Content"); and (iii) content that Tapin provides on and through our Services ("Our Content"). In this agreement, "content" includes, without limitation, all text, images, video, audio, or other material on our Services, including information on users' profiles and in direct messages between users.</p>

<h3>3a. YOUR CONTENT</h3>
<p>You are responsible for Your Content. Don't share anything that you wouldn't want others to see, that would violate this Agreement, or that may expose you or us to legal liability.</p>
<p>You are solely responsible and liable for Your Content, and, therefore, you agree to indemnify, defend, release, and hold us harmless from any claims made in connection with Your Content.</p>
<p>You represent and warrant to us that the information you provide to us or any other user is accurate and that you will update your account information as necessary to ensure its accuracy.</p>
<p>The content included on your individual profile should be relevant to the intended use of our Services. You may not upload any Prohibited Content, and your content must further comply with our Community Guidelines. You may not display any personal contact, banking information, or peer-to-peer payment information, whether in relation to you or any other person (for example, names, home addresses or postcodes, telephone numbers, email addresses, URLs, credit/debit card, payment account information). If you choose to reveal any personal information about yourself to other users, you do so at your own risk. We strongly encourage you to use caution in disclosing any personal information online.</p>
<p>By uploading or sharing images on the Services, you consent to Tapin (and its service providers acting on its behalf) analyzing those images for safety, quality and policy-enforcement purposes, including detection of explicit content, spam, scams, and other violations. You grant Tapin the rights reasonably necessary to perform such analysis and enforcement as long as needed for moderation, appeals, compliance, and fraud prevention.</p>
<p>Tapin's use of image analysis is solely for safety, integrity, and policy enforcement on the Services. We do not use your images to train third-party models.</p>
<p>Your individual profile will be visible to other people around the world, so be sure that you are comfortable sharing Your Content before you post. You acknowledge and agree that Your Content may be viewed by other users, and, notwithstanding these Terms, other users may share Your Content with third parties. By uploading Your Content, you represent and warrant to us that you have all necessary rights and licenses to do so and automatically grant us a license to use Your Content as provided under Section 7 below.</p>
<p>We may provide tools and features to enhance individual expression through Your Content and Member Content, and we're constantly developing new technologies to improve our Services. Certain tools or features may allow you to generate or enhance content based on Your Content. This is still Your Content, and you are responsible for it and its accuracy, as well as your use of it on our Services and any and all decisions made, actions taken, and failures to take action based on Your Content. Be careful in choosing and sharing Your Content.</p>
<p>You understand and agree that we may monitor or review Your Content, and we have the right to remove, delete, edit, limit, or block or prevent access to any of Your Content at any time at our sole discretion. Furthermore, you understand and agree that we have no obligation to display or review Your Content.</p>

<h3>3b. MEMBER CONTENT</h3>
<p>While you will have access to Member Content, it is not yours and you may not copy or use Member Content for any purpose except as contemplated by these Terms.</p>
<p>Other users will also share content on our Services. Member Content belongs to the user who posted the content and is stored on our servers and displayed at the direction of that user.</p>
<p>You should always carefully review and independently verify Member Content for accuracy. Other users may use tools to generate or enhance content based on the Member Content they provide. Member Content may include biased, incorrect, harmful, offensive, or misleading information. Other users are responsible for their Member Content, as well as any and all decisions made, actions taken, and failures to take action based on their use of Member Content.</p>
<p>You do not have any rights in relation to Member Content, and, unless expressly authorized by Tapin, you may only use Member Content to the extent that your use is consistent with our Services' purpose. You may not copy the Member Content or use Member Content for commercial purposes, to spam, to harass, or to make unlawful threats. We reserve the right to terminate your account if you misuse Member Content.</p>

<h3>3c. OUR CONTENT</h3>
<p>Tapin owns or licenses all other content on our Services.</p>
<p>Any text, content, graphics, user interfaces, logos, sounds, artwork, images, and other intellectual property appearing on our Services is owned by, controlled by, or licensed to Tapin, and is protected by applicable copyright and intellectual property laws. All rights, title, and interest in and to this content remain with Tapin or its licensors.</p>
<p>Tapin grants you a limited license to access and use this content as provided under these Terms, and we reserve all other rights.</p>

<h2>4. INAPPROPRIATE CONTENT AND MISCONDUCT; REPORTING</h2>
<p>Tapin is a community built on respect and inclusion. We do not tolerate harassment, discrimination, scams, or any form of harmful behavior—on or off the platform.</p>
<p>You agree to:</p>
<ul>
<li>Use the Services in compliance with all applicable laws, including privacy, intellectual property, and anti-spam laws.</li>
<li>Treat others with respect and adhere to our Community Guidelines.</li>
<li>Use accurate information in your profile and avoid impersonation or misrepresentation.</li>
</ul>
<p>You must not:</p>
<ul>
<li>Harass, bully, stalk, threaten, or abuse others.</li>
<li>Post or share content that is fraudulent, hateful, or violates any law.</li>
<li>Solicit money or other items of value from other users.</li>
<li>Use automated tools, scrapers, or bots to access or collect data from Tapin.</li>
<li>Submit false or malicious reports or appeals.</li>
</ul>
<p>We reserve the right to remove content, suspend or terminate accounts, or take any other action necessary to protect users and the platform. This includes misconduct that occurs off-platform, such as at in-person meetups arranged through Tapin.</p>
<p>If you see something concerning, you can report a user directly via the "Report User" link on a profile or in chat, or contact us at tapinappmobile@gmail.com. We may cooperate with law enforcement when legally required.</p>
<p>Content may be automatically restricted or queued for human review based on our safety scans; repeat or severe violations may lead to account actions up to permanent removal.</p>
<p>Tapin does not conduct criminal background or identity-verification checks on users (unless explicitly required by law) and makes no guarantees about any user's conduct, intentions, or identity. You are solely responsible for your interactions with other users, both online and offline. Always use good judgment and follow any Safety Tips we provide.</p>
<p>If your account or content is restricted or removed, you may request a review within 30 days by contacting tapinappmobile@gmail.com.</p>

<h2>5. PRIVACY AND LOCATION SHARING</h2>
<p>Privacy is important to us. We have a separate policy about it that you should read.</p>
<p>For information about how Tapin and its affiliates collect, use, and share your personal data, please read our Privacy Policy. By using our Services, you agree that we may use your personal data in accordance with our Privacy Policy.</p>

<h2>6. RIGHTS YOU ARE GRANTED BY TAPIN</h2>
<p>Tapin grants you the right to use and enjoy our Services, subject to these Terms.</p>
<p>For as long as you comply with these Terms, Tapin grants you a personal, worldwide, royalty-free, non-assignable, non-exclusive, revocable, and non-sublicensable license to access and use our Services for purposes as intended by Tapin and permitted by these Terms and applicable laws. This license and any authorization to access the Service are automatically revoked in the event that you fail to comply with these Terms.</p>

<h2>7. RIGHTS YOU GRANT TAPIN</h2>
<p>You own all of the content you provide to Tapin, but you also grant us the right to use Your Content as provided in this Agreement.</p>
<p>By creating an account, you grant to Tapin a worldwide, perpetual, transferable, sub-licensable, royalty-free right and license to host, store, use, copy, display, reproduce, adapt, edit, publish, translate, modify, reformat, incorporate into other works, advertise, distribute and otherwise make available to the general public Your Content, in whole or in part, and in any way and in any format or medium currently known or developed in the future. Tapin's license to Your Content shall be non-exclusive, except that Tapin's license shall be exclusive with respect to derivative works created through use of our Services. For example, Tapin would have an exclusive license to screenshots of our Services that include Your Content.</p>
<p>In addition, so that Tapin can prevent the use of Your Content outside of our Services, you authorize Tapin to act on your behalf with respect to infringing uses of Your Content taken from our Services by other users or third parties. This expressly includes the authority, but not the obligation, to send notices pursuant to 17 U.S.C. § 512(c)(3) (i.e., DMCA Takedown Notices) on your behalf if Your Content is taken and used by third parties outside of our Services. Tapin is not obligated to take any action with regard to use of Your Content by other users or third parties.</p>
<p>Tapin's license to Your Content is subject to your rights under applicable law (for example, laws regarding personal data protection to the extent the content contains personal information as defined by those laws).</p>
<p>In consideration for Tapin allowing you to use our Services, you agree that we, our affiliates, and our third-party partners may place advertising on our Services, including sponsored activities and other paid or promoted listings displayed within the App. By submitting suggestions or feedback to Tapin regarding our Services, you agree that Tapin may use and share such feedback for any purpose without compensating you.</p>
<p>You agree that Tapin may access, preserve, and disclose your account information, including Your Content, if required to do so by law or upon a good faith belief that such access, preservation, or disclosure is reasonably necessary to: (i) comply with legal process; (ii) enforce these Terms; (iii) respond to claims that any content violates the rights of third parties; (iv) respond to your requests for customer service; (v) protect the rights, property or personal safety of the Company or any other person, or (vi) to investigate, prevent, or take other action regarding illegal activity, suspected fraud or other wrongdoing.</p>

<h2>8. PURCHASES AND AUTOMATICALLY RENEWING SUBSCRIPTIONS</h2>
<p>You will have the opportunity to purchase products and services from Tapin. If you purchase a subscription, it will automatically renew—and you will be charged—until you cancel.</p>
<p>Tapin may offer products and services for purchase through iTunes or Google Play.</p>
<p>If you purchase a subscription, it will automatically renew until you cancel, in accordance with the terms disclosed to you at the time of purchase, as further described below. If you cancel your subscription, you will continue to have access to your subscription benefits until the end of your subscription period, at which point it will expire.</p>
<p>Because our Services may be utilized without a subscription, canceling your subscription does not remove your profile from our Services. If you wish to fully terminate your account, you must terminate your account as set forth in Section 9.</p>
<p>If you do not timely cancel your subscription, your subscription will be renewed at the full price as indicated when the purchase was made, without any additional action by you, and you authorize us to charge your payment method for these amounts. To the extent permissible by law, we reserve the right, including without prior notice, to limit the available quantity of or discontinue making available any product, feature, service or other offering; to impose conditions on the honoring of any coupon, discount, offer or other promotion; to bar any user from making any transaction; and to refuse to provide any user with any product, service or other offering.</p>

<h3>8a. REFUNDS</h3>
<p>Generally, all purchases are final and non-refundable, and there are no refunds or credits for partially used periods, except as required by applicable law.</p>
<p>EU, EEA, UK, and Switzerland: In accordance with local law, you are entitled to a full refund during the 14 days after the subscription begins. Please note that this 14-day period starts when your subscription starts.</p>
<p>Germany: You may terminate your subscription after it renews with one-month notice. Your right to terminate for cause remains unaffected.</p>
<p>If any of the above apply to you and you subscribed using your Apple ID, your refund requests are handled by Apple, not Tapin. To request a refund, please contact iTunes directly; for example using your Apple device, go to Settings > [click on your Apple ID] > Media Purchases > Purchase History. Find the transaction and select "Report a Problem."</p>
<p>For any other purchase, please contact Customer Support (email tapinappmobile@gmail.com) with your order number (see your confirmation email) by mailing or delivering a signed and dated notice which states that you, the buyer, are canceling this Agreement, or words of similar effect. Please also include the email address or telephone number associated with your account along with your order number. This notice shall be sent to:</p>
<p>OfftheGrid App LLC<br>
1700 Willow Creek Dr<br>
Austin, Texas 78741</p>

<h2>9. ACCOUNT TERMINATION</h2>
<p>If you no longer wish to use our Services, or if we terminate your account for any reason, here's what you need to know.</p>
<p>You can delete your account at any time by logging into the App, going to "Settings", clicking "Delete Account", and following the instructions to complete the deletion process. However, you will need to cancel / manage any purchases through iTunes or Google Play to avoid additional billing.</p>
<p>Tapin reserves the right to investigate and, if appropriate, suspend or terminate your account without a refund if Tapin believes that you have violated these Terms, misused our Services, or behaved in a way that Tapin regards as inappropriate or unlawful, on or off our Services. We reserve the right to make use of any personal, technological, legal, or other means available to enforce the Terms, at any time without liability and without the obligation to give you prior notice, including, but not limited to, preventing you from accessing the Services.</p>
<p>If your account is terminated by you or by Tapin for any reason, these Terms continue and remain enforceable between you and Tapin, and you will not be entitled to any refund for purchases made. Your information will be maintained and deleted in accordance with our Privacy Policy.</p>

<h2>10. PROFILE VERIFICATION AND IDENTITY CHECKS</h2>
<p>Tapin requires profile picture verification to confirm that you are a real person. This verification process uses submitted profile pictures and does not involve formal criminal background checks or review of external identity databases. Though Tapin strives to encourage a respectful user experience through verification, it is not responsible for the conduct of any user on or off the Service. Use your best judgment when interacting with others and review any Safety Tips we provide.</p>
<p>YOU UNDERSTAND THAT TAPIN DOES NOT CONDUCT CRIMINAL BACKGROUND OR IDENTITY VERIFICATION CHECKS ON ITS USERS OR OTHERWISE INQUIRE INTO THE BACKGROUND OF ITS USERS. TAPIN MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE CONDUCT, IDENTITY, HEALTH, PHYSICAL CONDITION, INTENTIONS, LEGITIMACY, OR VERACITY OF USERS. TAPIN RESERVES THE RIGHT TO CONDUCT—AND YOU AUTHORIZE TAPIN TO CONDUCT—ANY CRIMINAL BACKGROUND CHECK OR OTHER SCREENINGS (SUCH AS SEX OFFENDER REGISTER SEARCHES) AT ANY TIME USING AVAILABLE PUBLIC RECORDS, AND YOU AGREE THAT ANY INFORMATION YOU PROVIDE MAY BE USED FOR THAT PURPOSE. IF THE COMPANY DECIDES TO CONDUCT ANY SCREENING THROUGH A CONSUMER REPORTING AGENCY, YOU HEREBY AUTHORIZE THE COMPANY TO OBTAIN AND USE A CONSUMER REPORT ABOUT YOU TO DETERMINE YOUR ELIGIBILITY UNDER THESE TERMS.</p>
<p>YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER USERS. WE CANNOT AND DO NOT GUARANTEE YOUR SAFETY AND ARE NOT A SUBSTITUTE FOR FOLLOWING SENSIBLE SAFETY PRECAUTIONS. ALWAYS USE YOUR BEST JUDGMENT AND TAKE APPROPRIATE SAFETY PRECAUTIONS WHEN COMMUNICATING WITH OR MEETING NEW PEOPLE. COMMUNICATIONS RECEIVED THROUGH THE SERVICE, INCLUDING AUTOMATIC NOTIFICATIONS SENT BY TAPIN, MAY RESULT FROM USERS ENGAGING WITH THE SERVICE FOR IMPROPER PURPOSES, INCLUDING FRAUD, ABUSE, HARASSMENT, OR OTHER SUCH IMPROPER BEHAVIOR.</p>

<h2>11. DISCLAIMER</h2>
<p>Tapin's Services are provided "as is" and we do not make, and cannot make, any representations about the content or features of our Services or Member Content.</p>
<p>TAPIN PROVIDES OUR SERVICES ON AN "AS IS" AND "AS AVAILABLE" BASIS AND TO THE EXTENT PERMITTED BY APPLICABLE LAW, GRANTS NO WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE WITH RESPECT TO OUR SERVICES (INCLUDING ALL CONTENT CONTAINED THEREIN), INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. TAPIN DOES NOT REPRESENT OR WARRANT THAT (A) OUR SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR FREE, (B) ANY DEFECTS OR ERRORS IN OUR SERVICES WILL BE DISCOVERED OR CORRECTED, OR (C) THAT ANY CONTENT OR INFORMATION YOU OBTAIN ON OR THROUGH OUR SERVICES WILL BE ACCURATE, COMPLETE, CURRENT OR APPROPRIATE FOR YOUR PURPOSES. FURTHERMORE, TAPIN MAKES NO GUARANTEES AS TO THE NUMBER OF ACTIVE USERS AT ANY TIME; USERS' ABILITY OR DESIRE TO COMMUNICATE WITH OR MEET YOU, OR THE ULTIMATE COMPATIBILITY WITH OR CONDUCT BY USERS YOU MEET THROUGH THE SERVICES.</p>
<p>TAPIN ASSUMES NO RESPONSIBILITY FOR ANY CONTENT THAT YOU OR ANOTHER USER OR THIRD PARTY POSTS, SENDS, RECEIVES, OR ACTS ON THROUGH OUR SERVICES, NOR DOES TAPIN ASSUME ANY RESPONSIBILITY FOR THE IDENTITY, INTENTIONS, LEGITIMACY, OR VERACITY OF ANY USERS WITH WHOM YOU MAY COMMUNICATE WITH THROUGH TAPIN. ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF OUR SERVICES IS ACCESSED AT YOUR OWN DISCRETION AND RISK. TAPIN IS NOT RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER HARDWARE, COMPUTER SOFTWARE, OR OTHER EQUIPMENT OR TECHNOLOGY INCLUDING, BUT WITHOUT LIMITATION, DAMAGE FROM ANY SECURITY BREACH OR FROM ANY VIRUS, BUGS, TAMPERING, HACKING, FRAUD, ERROR, OMISSION, INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER LINE OR NETWORK FAILURE, OR ANY OTHER TECHNICAL OR OTHER DISRUPTION OR MALFUNCTION.</p>

<h2>12. DIGITAL MILLENNIUM COPYRIGHT ACT</h2>
<p>We take copyright infringement very seriously. We ask you to help us to ensure we address it promptly and effectively.</p>
<p>Tapin has adopted the following policy towards copyright infringement in accordance with the Digital Millennium Copyright Act (the "DMCA"). If you believe any Member Content or Our Content infringes upon your intellectual property rights, please submit a notification alleging such infringement ("DMCA Takedown Notice") including the following:</p>
<ul>
<li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
<li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works;</li>
<li>Identification of the material claimed to be infringing or to be the subject of infringing activity and that is to be removed or access disabled and information reasonably sufficient to permit the service provider to locate the material;</li>
<li>Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and, if available, an electronic mail;</li>
<li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</li>
<li>A statement that, under penalty of perjury, the information in the notification is accurate and you are authorized to act on behalf of the owner of the exclusive right that is allegedly infringed.</li>
</ul>
<p>Any DMCA Takedown Notices should be sent to tapinappmobile@gmail.com or via mail to the following address:</p>
<p>OfftheGrid App LLC<br>
1700 Willow Creek Dr<br>
Austin, Texas 78741</p>
<p>Tapin will terminate the accounts of repeat infringers.</p>

<h2>13. LIMITATION OF LIABILITY</h2>
<p>Tapin's liability is limited to the maximum extent allowed by applicable law.</p>
<p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL TAPIN, ITS AFFILIATES, EMPLOYEES, LICENSORS, OR SERVICE PROVIDERS BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, PUNITIVE, FIXED, OR ENHANCED DAMAGES, INCLUDING, WITHOUT LIMITATION, LOSS OF PROFITS, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES, (II) THE CONDUCT OR CONTENT OF ANY USERS OR THIRD PARTIES ON OR THROUGH ANY OF OUR AFFILIATES' SERVICES OR IN CONNECTION WITH THE SERVICES; OR (III) ANY UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR CONTENT, EVEN IF TAPIN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL TAPIN'S AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS RELATING TO THE SERVICES EXCEED THE GREATER OF (A) $100 USD OR (B) THE AMOUNT PAID, IF ANY, BY YOU TO TAPIN FOR THE SERVICES DURING THE TWENTY-FOUR (24) MONTH PERIOD IMMEDIATELY PRECEDING THE DATE THAT YOU FIRST FILE A LAWSUIT, ARBITRATION OR ANY OTHER LEGAL PROCEEDING AGAINST TAPIN, WHETHER STATUTORY, IN LAW OR IN EQUITY, IN ANY TRIBUNAL.</p>
<p>THE DAMAGES LIMITATION SET FORTH IN THE IMMEDIATELY PRECEDING SENTENCE APPLIES (i) REGARDLESS OF THE GROUND UPON WHICH LIABILITY IS BASED (WHETHER DEFAULT, CONTRACT, TORT, STATUTE, OR OTHERWISE), (ii) IRRESPECTIVE OF THE TYPE OF BREACH OF RIGHTS, PRIVILEGES, OR OBLIGATIONS, AND (iii) WITH RESPECT TO ALL EVENTS, THE SERVICE, AND THIS AGREEMENT.</p>
<p>THE LIMITATION OF LIABILITY PROVISIONS SET FORTH IN THIS SECTION 13 SHALL APPLY EVEN IF YOUR REMEDIES UNDER THIS AGREEMENT FAIL WITH RESPECT TO THEIR ESSENTIAL PURPOSE.</p>
<p>SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF CERTAIN DAMAGES, SO SOME OR ALL OF THE LIMITATIONS IN THIS SECTION MAY NOT APPLY TO YOU.</p>

<h2>14. DISPUTE RESOLUTION SECTION</h2>
<p>In the unlikely event that we have a legal dispute, here is how the Parties agree to proceed, except where prohibited by applicable law.</p>
<p>Any Subsection in this Dispute Resolution Section that is prohibited by law shall not apply to the users residing in that jurisdiction. The online dispute settlement platform of the European Commission is available at http://ec.europa.eu/odr. Tapin does not take part in dispute settlement procedures in front of a consumer arbitration entity for users residing in the EU, EEA, UK, or Switzerland.</p>

<h3>14a. INFORMAL DISPUTE RESOLUTION PROCESS</h3>
<p>If you are dissatisfied with our Services for any reason, please contact tapinappmobile@gmail.com first so we can try to resolve your concerns without the need of outside assistance.</p>
<p>If you choose to pursue a dispute, claim or controversy against Tapin, these terms will apply. For purposes of this Dispute Resolution Process and Arbitration Procedures set forth in Section 14, "Tapin" shall include our affiliates, employees, licensors, and service providers.</p>
<p>Tapin values its relationship with you and appreciates the mutual benefit realized from informally resolving Disputes. "Dispute" is any dispute, claim, or controversy between you and Tapin that arises from or related in any way to this Agreement (including any alleged breach of this Agreement), the Service, or our relationship with you. "Dispute" as used in this Agreement shall have the broadest possible meaning and include claims that arose before the existence of this or any prior Agreement and claims that arise during the term of this Agreement or after the termination of this Agreement (unless this Agreement is superseded by a subsequent Agreement entered into by you and Tapin).</p>
<p>If you have a Dispute with Tapin ("Your Dispute"), before formally pursuing Your Dispute in arbitration or small claims court, you agree to first send a detailed notice ("Notice") to:</p>
<p>OfftheGrid App LLC<br>
1700 Willow Creek Dr<br>
Austin, Texas 78741</p>

</section>

<footer>
© 2026 OfftheGrid App LLC — Tapin Terms of Service
</footer>
</div>
</body>
</html>
`;
};

const dataDelete = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Delete Data</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    * {
      box-sizing: border-box;
    }
 
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f6f6;
      padding: 0;
      margin: 0;
    }
 
    .container {
      max-width: 400px;
      margin: 80px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
 
    h2 {
      color: #d32f2f;
      text-align: center;
      margin-bottom: 20px;
    }
 
    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
    }
 
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 14px;
    }
 
    button {
      width: 100%;
      padding: 12px;
      background-color: #d32f2f;
      color: #ffffff;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
 
    }
 
    button:hover {
      background-color: #b71c1c;
    }
 
    .note {
      font-size: 13px;
      color: #555;
      text-align: center;
      margin-top: 15px;
    }
</style>
</head>
<body>
 
<div class="container">
<h2>Delete Your Data</h2>
  <form onsubmit="handleDelete(event)">
<label for="email">Email</label>
<input type="email" id="email" name="email" required>
    <label for="password">Password</label>
<input type="password" id="password" name="password" required>
    <button type="submit">Confirm</button>
</form>
 
  <div class="note">
    This action is irreversible. Please confirm carefully.
</div>
</div>
 
<script>
 
  function handleDelete(e) {
 
    e.preventDefault();
 
    const email = document.getElementById("email").value.trim();
 
    const password = document.getElementById("password").value.trim();
 
    if (!email || !password) {
 
      alert("Please fill in both fields.");
 
      return;
 
    }
 
    const confirmed = confirm(Are you sure you want to delete the account?);
 
    if (confirmed) {
 
      // TODO: Send deletion request to server here
 
      alert("Your account has been marked for deletion.");
 
    }
 
  }
</script>
 
</body>
</html>
 
 `;
};

const accountDelete = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Account Delete</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    * {
      box-sizing: border-box;
    }
 
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f6f6;
      padding: 0;
      margin: 0;
    }
 
    .container {
      max-width: 400px;
      margin: 80px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
 
    h2 {
      color: #d32f2f;
      text-align: center;
      margin-bottom: 20px;
    }
 
    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
    }
 
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 14px;
    }
 
    button {
      width: 100%;
      padding: 12px;
      background-color: #d32f2f;
      color: #ffffff;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
 
    }
 
    button:hover {
      background-color: #b71c1c;
    }
 
    .note {
      font-size: 13px;
      color: #555;
      text-align: center;
      margin-top: 15px;
    }
</style>
</head>
<body>
 
<div class="container">
<h2>Delete Your Account</h2>
  <form onsubmit="handleDelete(event)">
<label for="email">Email</label>
<input type="email" id="email" name="email" required>
    <label for="password">Password</label>
<input type="password" id="password" name="password" required>
    <button type="submit">Confirm</button>
</form>
 
  <div class="note">
    This action is irreversible. Please confirm carefully.
</div>
</div>
 
<script>
 
  function handleDelete(e) {
 
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
 
    const confirmed = confirm(Are you sure you want to delete the account?);
    if (confirmed) {
      // TODO: Send deletion request to server here
      alert("Your account has been marked for deletion.");
    }
  }
</script>
</body>
</html>
 `;
};

export const configRoutes = Router();

configRoutes.get("/privacy-policy", (_req, res) => {
  res.type("html").send(tapinPrivacyPolicy());
});

configRoutes.get("/terms-condition", (_req, res) => {
  res.type("html").send(tapinTermsOfService());
});

configRoutes.get("/data-delete", (_req, res) => {
  res.type("html").send(dataDelete());
});

configRoutes.get("/account-delete", (_req, res) => {
  res.type("html").send(accountDelete());
});

configRoutes.get("/stripe-onboarding-success", (_req, res) => {
  res.type("html").send(stripeOnboardingSuccess());
});
