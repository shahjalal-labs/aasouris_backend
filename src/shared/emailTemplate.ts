// account verification email template while create user
export const accountVerification = (fullname: string, otp: string) => {
  return `
  <div style="
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    background-color: #f4f6f8;
    padding: 24px;
  ">
    <div style="
      max-width: 480px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      color: #333;
    ">
      <h2 style="
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 22px;
        font-weight: 600;
        color: #abc346;
      ">
        Smiley Account verification
      </h2>

      <p style="margin: 0 0 12px; font-size: 15px;">
        Hi <b>${fullname}</b>,
      </p>

      <p style="margin: 0 0 20px; font-size: 15px; color: #555;">
        Your OTP for account verification is:
      </p>

      <div style="
        text-align: center;
        margin: 24px 0;
      ">
        <span style="
          display: inline-block;
          font-size: 32px;
          letter-spacing: 6px;
          font-weight: 700;
          color: #007BFF;
          padding: 12px 20px;
          border-radius: 6px;
          background-color: #f0f7ff;
        ">
          ${otp}
        </span>
      </div>

      <p style="margin: 0 0 16px; font-size: 14px; color: #555;">
        This OTP is valid for <b>5 minutes</b>. If you did not request this, please ignore this email.
      </p>

      <p style="margin: 24px 0 0; font-size: 14px; color: #555;">
        Thanks,<br>
        <span style="font-weight: 600; color: #333;">The Support Team</span>
      </p>
    </div>
  </div>
`;
};

// forgot pass email template

export const forgotPasswordOtp = (otp: string) => {
  return `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Password Reset Request</h2>
          <p>Hi,</p>
          <p>Your password reset OTP is: </p>
          <h1 style="color: #007BFF;">${otp}</h1>
          <p>This OTP is valid for <b>5 minutes</b>. If you did not request this, please ignore this email.</p>
          <p>Thanks, <br>The Support Team</p>
        </div>
      `;
};

//w: (start)╭──────────── changePassword ────────────╮
export const changePassword = (fullname: string) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Password Changed</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px 0;">
    <tr>
      <td align="center">

        <!-- Main container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:6px; overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#1f2937; padding:20px; text-align:center;">
              <h1 style="margin:0; font-size:20px; color:#ffffff;">
                Password Changed
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#111827; font-size:14px; line-height:1.6;">
              <p style="margin-top:0;">Hello${fullname ? " " + fullname : ""},</p>

              <p>
                This is a confirmation that the password for your account was
                successfully changed.
              </p>

              <table cellpadding="0" cellspacing="0" style="margin:20px 0; font-size:13px;">
                <tr>
                  <td style="padding:4px 0; color:#6b7280;">Date &amp; Time:</td>
                  <td style="padding:4px 0 4px 10px; font-weight:600;">
                    {{DateTime}}
                  </td>
                </tr>
              </table>

              <p>
                If you made this change, no further action is required.
              </p>

              <p style="color:#b91c1c; font-weight:600;">
                If you did NOT change your password, please take action immediately:
              </p>

              <ul style="padding-left:18px;">
                <li>Reset your password using the “Forgot Password” option</li>
                <li>
                  Contact our support team at
                  <a href="mailto:support@livraico.org" style="color:#2563eb;">
                    support@livraico.org
                  </a>
                </li>
              </ul>

              <p>
                For your security, we recommend using a strong, unique password and
                never sharing your login details with anyone.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb; padding:15px; text-align:center; font-size:12px; color:#6b7280;">
              © 2026 Liv raico. All rights reserved.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
};
//w: (end)  ╰──────────── changePassword ────────────╯
