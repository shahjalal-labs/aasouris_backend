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

const smilelyPrivacyPolicy = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Smilely — Privacy Policy</title>
<style>
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    background: #f7f8fb;
    margin: 0;
    padding: 32px;
    color: #0f172a;
    line-height: 1.7;
  }
  .wrap {
    max-width: 1000px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  }
  h1 { font-size: 26px; color: #2563eb; margin-bottom: 8px; }
  .last-updated { font-size: 14px; color: #64748b; margin-bottom: 24px; font-weight: 500; }
  h2 { font-size: 19px; margin: 28px 0 12px; color: #1e293b; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
  h3 { font-size: 16px; margin: 20px 0 8px; color: #334155; }
  p, li { font-size: 15px; color: #334155; }
  ul { padding-left: 24px; margin-bottom: 16px; }
  li { margin-bottom: 6px; }
  .contact-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 16px 20px;
    margin-top: 12px;
  }
  .contact-box p { margin: 6px 0; }
  a { color: #2563eb; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .footer { text-align: center; margin-top: 40px; font-size: 13px; color: #6b7280; }
</style>
</head>
<body>
<div class="wrap">
  <h1>Smilely Privacy Policy</h1>
  <div class="last-updated">Last Updated: September 10, 2026</div>

  <p>Smilely (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains how information is collected, used, and protected when you use the Smilely application.</p>

  <h2>1. Information We Collect</h2>
  <p>Depending on how you use Smilely, we may collect information such as:</p>
  <ul>
    <li>Email address and account information</li>
    <li>Information associated with Apple or Google sign-in, when you choose those login methods</li>
    <li>Brushing goals and completed brushing sessions</li>
    <li>Streaks, points, achievements, and progress information</li>
    <li>Notification/reminder preferences</li>
  </ul>

  <h2>2. How We Use Information</h2>
  <p>We use information to:</p>
  <ul>
    <li>Provide and maintain the Smilely service</li>
    <li>Manage your account</li>
    <li>Track your brushing goals and progress</li>
    <li>Calculate streaks, points, and achievements</li>
    <li>Provide reminders and notifications</li>
    <li>Provide customer support</li>
    <li>Improve the application</li>
  </ul>

  <h2>3. Notifications</h2>
  <p>Smilely may send notifications to remind you about your brushing goals. You can enable or disable notifications through your device settings and the app&apos;s available settings.</p>

  <h2>4. Data Security</h2>
  <p>We take reasonable measures to protect information associated with your account. Passwords should never be stored in plain text and should be securely handled by our authentication system.</p>

  <h2>5. Third-Party Services</h2>
  <p>Smilely may use third-party services for authentication, cloud storage, analytics, notifications, or other functionality. Where applicable, information may be processed by those services according to their respective privacy policies.</p>

  <h2>6. Data Retention</h2>
  <p>We retain information for as long as necessary to provide the service or as required for legitimate business or legal purposes.</p>

  <h2>7. Account Deletion</h2>
  <p>Users can request or initiate deletion of their Smilely account where the functionality is provided within the application. Account deletion will remove associated account data according to our data retention practices.</p>

  <h2>8. Children&apos;s Privacy</h2>
  <p>Smilely is not intended to knowingly collect personal information from children in violation of applicable privacy laws. If you believe a child has provided personal information improperly, please contact us.</p>

  <h2>9. Changes to This Privacy Policy</h2>
  <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

  <h2>10. Contact Us</h2>
  <p>If you have questions about this Privacy Policy, please contact:</p>
  <div class="contact-box">
    <p><strong>Smilely Inc.</strong></p>
    <p>Email: <a href="mailto:support@smilelyapp.com">support@smilelyapp.com</a></p>
    <p>Website: <a href="https://smilelyapp.com" target="_blank" rel="noopener noreferrer">https://smilelyapp.com</a></p>
  </div>

  <div class="footer">&copy; 2026 Smilely Inc. All rights reserved.</div>
</div>
</body>
</html>
  `;
};

const smilelySupport = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Smilely Support</title>
<style>
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    background: #f7f8fb;
    margin: 0;
    padding: 32px;
    color: #0f172a;
    line-height: 1.7;
  }
  .wrap {
    max-width: 1000px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  }
  h1 { font-size: 26px; color: #2563eb; margin-bottom: 8px; }
  .subtitle { font-size: 16px; color: #475569; margin-bottom: 24px; line-height: 1.6; }
  h2 { font-size: 19px; margin: 28px 0 12px; color: #1e293b; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
  h3 { font-size: 16px; margin: 20px 0 8px; color: #334155; }
  p, li { font-size: 15px; color: #334155; }
  ul { padding-left: 24px; margin-bottom: 16px; }
  li { margin-bottom: 6px; }
  .contact-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px;
    margin: 20px 0;
  }
  .contact-box p { margin: 6px 0; }
  .email-link { font-size: 18px; font-weight: 600; color: #2563eb; display: inline-block; margin: 8px 0; }
  .email-btn {
    display: inline-block;
    margin-top: 14px;
    background-color: #2563eb;
    color: #ffffff !important;
    padding: 10px 22px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s ease;
  }
  .email-btn:hover {
    background-color: #1d4ed8;
  }
  a { color: #2563eb; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .footer { text-align: center; margin-top: 40px; font-size: 13px; color: #6b7280; }
</style>
</head>
<body>
<div class="wrap">
  <h1>Smilely Support</h1>
  <p class="subtitle">Need help with Smilely? We&apos;re here to help with account issues, reminders, brushing goals, progress, or any technical problems.</p>

  <h2>Contact Support</h2>
  <div class="contact-box">
    <p>For support, contact us at:</p>
    <p><a class="email-link" href="mailto:support@smilelyapp.com">support@smilelyapp.com</a></p>
    <p style="color: #64748b; font-size: 14px; margin-top: 8px;">Please include your device, app version, and a short description of the issue.</p>
    <a class="email-btn" href="mailto:support@smilelyapp.com?subject=Smilely%20Support%20Request">Email Support</a>
  </div>

  <h2>Common Help Topics</h2>
  <ul>
    <li><strong>Account &amp; Sign-In:</strong> Issues signing in with Apple, Google, or email.</li>
    <li><strong>Brushing Sessions &amp; Goals:</strong> Managing brushing routines, timers, and tracking daily sessions.</li>
    <li><strong>Streaks &amp; Achievements:</strong> Points, streaks, and achievement badges synchronization.</li>
    <li><strong>Reminders &amp; Notifications:</strong> Setting up or adjusting your daily brushing reminder schedule.</li>
    <li><strong>Account Deletion:</strong> Removing your account and personal data.</li>
  </ul>

  <div class="footer">&copy; 2026 Smilely Inc. All rights reserved.</div>
</div>
</body>
</html>
  `;
};

const smilelyMarketing = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Smilely — Build Better Brushing Habits</title>
<style>
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    background: #f7f8fb;
    margin: 0;
    padding: 32px;
    color: #0f172a;
    line-height: 1.7;
  }
  .wrap {
    max-width: 1000px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  }
  .hero {
    text-align: center;
    padding: 20px 0 30px;
    border-bottom: 1px solid #f1f5f9;
  }
  h1 { font-size: 30px; color: #2563eb; margin: 0 0 10px; }
  .tagline { font-size: 18px; color: #475569; font-weight: 500; margin: 0; }
  h2 { font-size: 20px; margin: 32px 0 14px; color: #1e293b; }
  p, li { font-size: 15px; color: #334155; }
  ul { padding-left: 24px; margin-bottom: 20px; }
  li { margin-bottom: 10px; }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
    margin: 20px 0;
  }
  .feature-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 20px;
  }
  .feature-card h3 {
    margin: 0 0 8px;
    font-size: 17px;
    color: #2563eb;
  }
  .feature-card p {
    margin: 0;
    font-size: 14px;
    color: #475569;
  }
  .cta-box {
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border: 1px solid #bfdbfe;
    border-radius: 10px;
    padding: 24px;
    text-align: center;
    margin-top: 36px;
  }
  .cta-box h3 {
    margin: 0 0 8px;
    font-size: 18px;
    color: #1e40af;
  }
  .cta-box p {
    margin: 0 0 16px;
    font-size: 14px;
    color: #3b82f6;
  }
  .btn {
    display: inline-block;
    background-color: #2563eb;
    color: #ffffff !important;
    padding: 10px 24px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s ease;
  }
  .btn:hover {
    background-color: #1d4ed8;
  }
  a { color: #2563eb; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .footer { text-align: center; margin-top: 40px; font-size: 13px; color: #6b7280; }
</style>
</head>
<body>
<div class="wrap">
  <div class="hero">
    <h1>Smilely</h1>
    <p class="tagline">Build Healthy Habits, One Smile at a Time</p>
  </div>

  <h2>About Smilely</h2>
  <p>Smilely is your personal oral health and daily brushing companion. Designed for everyday consistency, Smilely turns dental care into an engaging, rewarding routine that keeps your teeth clean, prevents dental problems, and helps you achieve a brighter smile.</p>

  <h2>Key Features</h2>
  <div class="features-grid">
    <div class="feature-card">
      <h3>Smart Brushing Sessions</h3>
      <p>Guided 2-minute brushing timer with gentle reminders to clean each quadrant evenly.</p>
    </div>
    <div class="feature-card">
      <h3>Daily Streaks &amp; Milestones</h3>
      <p>Build momentum by maintaining daily morning and evening brushing streaks.</p>
    </div>
    <div class="feature-card">
      <h3>Points &amp; Badges</h3>
      <p>Earn reward points and unlock achievement badges as you hit your oral hygiene goals.</p>
    </div>
    <div class="feature-card">
      <h3>Smart Reminders</h3>
      <p>Customizable morning and bedtime notifications tailored to your routine so you never miss a brush.</p>
    </div>
    <div class="feature-card">
      <h3>Progress Analytics</h3>
      <p>Track your completion history, consistency rate, and oral health habits over time.</p>
    </div>
    <div class="feature-card">
      <h3>Cloud Sync</h3>
      <p>Sign in with Apple or Google to keep your brushing streak and progress synchronized safely.</p>
    </div>
  </div>

  <h2>Why Oral Health Matters</h2>
  <p>Consistent, thorough brushing is the cornerstone of dental hygiene. Smilely helps individuals and families build lasting oral care habits that prevent cavities, gum disease, and long-term dental complications.</p>

  <div class="cta-box">
    <h3>Ready to transform your daily routine?</h3>
    <p>Download Smilely today and start your journey towards healthier brushing habits.</p>
    <a class="btn" href="mailto:support@smilelyapp.com">Contact Us</a>
  </div>

  <div class="footer">&copy; 2026 Smilely Inc. All rights reserved.</div>
</div>
</body>
</html>
  `;
};

const smilelyHomeLandingPage = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Smilely — Daily Dental Habit Tracker</title>
<meta name="description" content="Smilely is your daily dental companion for building consistent, rewarding brushing habits with smart timers, streaks, and achievements.">
<style>
  :root {
    --primary: #2563eb;
    --primary-hover: #1d4ed8;
    --text-main: #0f172a;
    --text-muted: #64748b;
    --bg-main: #f8fafc;
    --card-bg: #ffffff;
    --border: #e2e8f0;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--bg-main);
    color: var(--text-main);
    line-height: 1.6;
    padding: 0;
  }
  header {
    background: #ffffff;
    border-bottom: 1px solid var(--border);
    padding: 16px 24px;
  }
  .nav-container {
    max-width: 1040px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--primary);
    font-size: 22px;
    font-weight: 700;
  }
  .brand-icon {
    font-size: 24px;
  }
  nav {
    display: flex;
    gap: 20px;
  }
  nav a {
    color: #475569;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  nav a:hover {
    color: var(--primary);
  }
  .container {
    max-width: 1040px;
    margin: 0 auto;
    padding: 48px 24px;
  }
  .hero {
    text-align: center;
    padding: 40px 0 50px;
  }
  .badge {
    display: inline-block;
    background: #dbeafe;
    color: #1e40af;
    font-size: 13px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 9999px;
    margin-bottom: 18px;
  }
  .hero h1 {
    font-size: 42px;
    line-height: 1.2;
    color: var(--text-main);
    margin-bottom: 18px;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
  .hero h1 span {
    color: var(--primary);
  }
  .hero p {
    font-size: 18px;
    color: var(--text-muted);
    max-width: 680px;
    margin: 0 auto 30px;
  }
  .cta-group {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .btn {
    display: inline-block;
    padding: 12px 26px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  .btn-primary {
    background-color: var(--primary);
    color: #ffffff;
  }
  .btn-primary:hover {
    background-color: var(--primary-hover);
  }
  .btn-secondary {
    background-color: #ffffff;
    color: #334155;
    border: 1px solid var(--border);
  }
  .btn-secondary:hover {
    background-color: #f1f5f9;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin: 40px 0;
  }
  .card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }
  .card-icon {
    font-size: 28px;
    margin-bottom: 12px;
  }
  .card h3 {
    font-size: 18px;
    margin-bottom: 8px;
    color: #1e293b;
  }
  .card p {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.6;
  }
  .links-section {
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    margin-top: 40px;
  }
  .links-section h2 {
    font-size: 18px;
    color: #1e293b;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .status-pill {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #10b981;
  }
  .link-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .link-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: #f1f5f9;
    border-radius: 6px;
    color: #334155;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.2s ease, color 0.2s ease;
  }
  .link-pill:hover {
    background: #e2e8f0;
    color: var(--primary);
  }
  footer {
    border-top: 1px solid var(--border);
    text-align: center;
    padding: 32px 24px;
    font-size: 13px;
    color: var(--text-muted);
    background: #ffffff;
    margin-top: 60px;
  }
  footer a {
    color: #475569;
    text-decoration: none;
    margin: 0 8px;
  }
  footer a:hover {
    color: var(--primary);
    text-decoration: underline;
  }
  @media (max-width: 640px) {
    .hero h1 { font-size: 30px; }
    .hero p { font-size: 16px; }
    nav { display: none; }
  }
</style>
</head>
<body>

<header>
  <div class="nav-container">
    <a href="/home" class="brand">
      <span class="brand-icon">✨</span> Smilely
    </a>
    <nav>
      <a href="/marketing">About</a>
      <a href="/support">Support</a>
      <a href="/privacy-policy">Privacy</a>
      <a href="/terms-condition">Terms</a>
    </nav>
  </div>
</header>

<div class="container">
  <section class="hero">
    <div class="badge">Healthy Smiles Start Here</div>
    <h1>Build Better Brushing Habits with <span>Smilely</span></h1>
    <p>Your intelligent daily dental care companion. Track your daily brushing routines, earn achievements, and maintain streaks for a healthier, brighter smile.</p>
    <div class="cta-group">
      <a href="/marketing" class="btn btn-primary">Discover Features</a>
      <a href="/support" class="btn btn-secondary">Support Center</a>
    </div>
  </section>

  <div class="grid">
    <div class="card">
      <div class="card-icon">⏱️</div>
      <h3>Smart Timer</h3>
      <p>Follow a dentists-recommended 2-minute brushing routine with real-time feedback and clean quadrant pacing.</p>
    </div>
    <div class="card">
      <div class="card-icon">🔥</div>
      <h3>Streaks &amp; Habits</h3>
      <p>Keep your daily morning and night brushing streaks alive to build lifelong dental hygiene habits.</p>
    </div>
    <div class="card">
      <div class="card-icon">🏆</div>
      <h3>Points &amp; Milestones</h3>
      <p>Earn points for every completed session and unlock milestone badges as your consistency grows.</p>
    </div>
    <div class="card">
      <div class="card-icon">🔔</div>
      <h3>Custom Reminders</h3>
      <p>Tailored morning and bedtime notifications ensure you never miss a brushing session.</p>
    </div>
  </div>

  <section class="links-section">
    <h2><span class="status-pill"></span> Smilely Application &amp; API Services</h2>
    <div class="link-pills">
      <a class="link-pill" href="/marketing">📢 Marketing &amp; Overview</a>
      <a class="link-pill" href="/privacy-policy">🛡️ Privacy Policy</a>
      <a class="link-pill" href="/support">💬 Support Page</a>
      <a class="link-pill" href="/terms-condition">📄 Terms of Service</a>
      <a class="link-pill" href="/account-delete">🗑️ Account Deletion</a>
    </div>
  </section>
</div>

<footer>
  <p style="margin-bottom: 8px;">
    <a href="/home">Home</a> &bull;
    <a href="/marketing">Marketing</a> &bull;
    <a href="/privacy-policy">Privacy Policy</a> &bull;
    <a href="/support">Support</a> &bull;
    <a href="/terms-condition">Terms of Service</a> &bull;
    <a href="/account-delete">Account Deletion</a>
  </p>
  <p>&copy; 2026 Smilely Inc. All rights reserved.</p>
</footer>

</body>
</html>
  `;
};

const smilelyTermsOfService = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Smilely — Terms of Service</title>
<meta name="description" content="Terms of Service for Smilely mobile application and services">
<style>
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    background: #f7f8fb;
    margin: 0;
    padding: 32px;
    color: #0f172a;
    line-height: 1.7;
  }
  .wrap {
    max-width: 1000px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  }
  h1 { font-size: 26px; color: #2563eb; margin-bottom: 8px; }
  .last-updated { font-size: 14px; color: #64748b; margin-bottom: 24px; font-weight: 500; }
  h2 { font-size: 19px; margin: 28px 0 12px; color: #1e293b; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
  h3 { font-size: 16px; margin: 20px 0 8px; color: #334155; }
  p, li { font-size: 15px; color: #334155; }
  ul { padding-left: 24px; margin-bottom: 16px; }
  li { margin-bottom: 6px; }
  .alert-box {
    background: #eff6ff;
    border-left: 4px solid #2563eb;
    border-radius: 6px;
    padding: 16px 20px;
    margin: 20px 0;
  }
  .alert-box p { margin: 0; color: #1e40af; font-size: 14px; font-weight: 500; }
  .contact-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 16px 20px;
    margin-top: 12px;
  }
  .contact-box p { margin: 6px 0; }
  a { color: #2563eb; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .footer { text-align: center; margin-top: 40px; font-size: 13px; color: #6b7280; }
</style>
</head>
<body>
<div class="wrap">
  <h1>Smilely Terms of Service</h1>
  <div class="last-updated">Last Updated: September 10, 2026</div>

  <p>Welcome to <strong>Smilely</strong>. These Terms of Service (&ldquo;Terms&rdquo;) constitute a binding legal agreement between you (&ldquo;User&rdquo;, &ldquo;you&rdquo;) and <strong>Smilely Inc.</strong> (&ldquo;Smilely&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). These Terms govern your access to and use of the Smilely mobile application, website, and related services (collectively, the &ldquo;Service&rdquo;).</p>

  <p>By creating an account, downloading, or using Smilely, you agree to comply with and be legally bound by these Terms. If you do not agree to these Terms, please do not use the Service.</p>

  <h2>1. Eligibility and Account Registration</h2>
  <p>To use Smilely, you represent and warrant that:</p>
  <ul>
    <li>You are at least 13 years of age (or the minimum legal age required in your country). If you are under 18, you may only use Smilely with the consent and supervision of a parent or legal guardian.</li>
    <li>You have the legal capacity to enter into a binding agreement.</li>
    <li>You will provide accurate, current, and complete information when registering an account.</li>
    <li>You are responsible for maintaining the confidentiality of your credentials (including Apple Sign-In, Google Sign-In, and email authentication) and for all activity under your account.</li>
  </ul>

  <h2>2. The Smilely Service &amp; Dental Disclaimer</h2>
  <p>Smilely is designed to help users establish consistent, healthy oral hygiene routines through smart brushing timers, habit streaks, points, achievements, and notifications.</p>

  <div class="alert-box">
    <p><strong>IMPORTANT DENTAL &amp; HEALTH DISCLAIMER:</strong> Smilely is a habit-tracking and motivational lifestyle tool. It is NOT a medical device, diagnostic system, or healthcare service. Smilely does not provide medical or dental advice. Always consult a licensed dentist or medical professional for the diagnosis, treatment, or prevention of any oral health or dental conditions.</p>
  </div>

  <h2>3. User Conduct and Acceptable Use</h2>
  <p>You agree to use Smilely solely for lawful and personal purposes. You agree not to:</p>
  <ul>
    <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Service.</li>
    <li>Interfere with, damage, or disrupt the operation of our servers, networks, or APIs.</li>
    <li>Use automated bots, scripts, or scrapers to access the Service or manipulate brushing data, points, or streaks.</li>
    <li>Attempt to gain unauthorized access to any accounts, computer systems, or networks connected to Smilely.</li>
    <li>Use the Service for any fraudulent, abusive, or harmful activities.</li>
  </ul>

  <h2>4. Gamification, Points, and Streaks</h2>
  <p>Smilely incorporates motivational features including brushing streaks, levels, milestone badges, and reward points. You acknowledge and agree that:</p>
  <ul>
    <li>Points, streaks, and achievements are virtual indicators created solely for personal motivation and gamification.</li>
    <li>They have no monetary, cash, or property value, and cannot be purchased, sold, transferred, or exchanged for currency.</li>
    <li>Smilely reserves the right to manage, regulate, modify, or reset points and streaks if necessary for balance, updates, or anti-tampering enforcement.</li>
  </ul>

  <h2>5. Push Notifications &amp; Reminders</h2>
  <p>With your permission, Smilely may send push notifications to remind you to complete your morning and evening brushing sessions. You can enable, customize, or disable these reminders at any time through the app settings or your device operating system notification settings.</p>

  <h2>6. Intellectual Property Rights</h2>
  <p>All rights, title, and interest in and to Smilely—including its design, trademarks, service marks, graphics, artwork, audio cues, software code, and user interface—are owned by or licensed to <strong>Smilely Inc.</strong> and are protected by applicable intellectual property and copyright laws. You are granted a limited, personal, non-exclusive, non-transferable, and revocable license to use the app for personal use.</p>

  <h2>7. In-App Purchases and Subscriptions</h2>
  <p>If Smilely introduces optional premium subscriptions or in-app features:</p>
  <ul>
    <li>Payments will be processed securely through the Apple App Store or Google Play Store in accordance with their respective billing terms.</li>
    <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing cycle.</li>
    <li>You can manage or cancel subscriptions through your Apple ID or Google Play account settings.</li>
  </ul>

  <h2>8. Account Deletion &amp; Termination</h2>
  <p>You may terminate your account at any time by navigating to <strong>Settings &gt; Delete Account</strong> within the app or visiting our <a href="/account-delete">Account Deletion</a> page. Upon deletion, your personal account data will be removed in accordance with our <a href="/privacy-policy">Privacy Policy</a>.</p>
  <p>Smilely reserves the right to suspend or terminate your account without prior notice if you violate these Terms or engage in conduct harmful to the platform or other users.</p>

  <h2>9. Disclaimer of Warranties</h2>
  <p>THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. SMILELY DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.</p>

  <h2>10. Limitation of Liability</h2>
  <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SMILELY INC., ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.</p>

  <h2>11. Changes to Terms</h2>
  <p>We may update these Terms from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of Smilely after changes are published constitutes your acceptance of the revised Terms.</p>

  <h2>12. Contact Us</h2>
  <p>If you have any questions or concerns regarding these Terms, please contact us:</p>
  <div class="contact-box">
    <p><strong>Smilely Inc.</strong></p>
    <p>Email: <a href="mailto:support@smilelyapp.com">support@smilelyapp.com</a></p>
    <p>Website: <a href="https://smilelyapp.com" target="_blank" rel="noopener noreferrer">https://smilelyapp.com</a></p>
  </div>

  <div class="footer">&copy; 2026 Smilely Inc. All rights reserved.</div>
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

configRoutes.get("/home", (_req, res) => {
  res.type("html").send(smilelyHomeLandingPage());
});

configRoutes.get("/privacy-policy", (_req, res) => {
  res.type("html").send(smilelyPrivacyPolicy());
});

configRoutes.get("/support", (_req, res) => {
  res.type("html").send(smilelySupport());
});

configRoutes.get("/marketing", (_req, res) => {
  res.type("html").send(smilelyMarketing());
});

configRoutes.get("/terms-condition", (_req, res) => {
  res.type("html").send(smilelyTermsOfService());
});

configRoutes.get("/terms", (_req, res) => {
  res.type("html").send(smilelyTermsOfService());
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

