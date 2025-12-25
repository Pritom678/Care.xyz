export const bookingInvoiceTemplate = ({
  bookingId,
  userName,
  serviceName,
  duration,
  pricePerDay,
  totalCost,
  location,
  status,
  bookingDate,
}) => {
  return `
    <div style="
      font-family: Arial, Helvetica, sans-serif;
      background-color: #f6f9fc;
      padding: 30px;
      color: #333;
    ">
      <div style="
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
      ">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 20px;">
          <img 
            src="https://res.cloudinary.com/do3iu9q7d/image/upload/v1766649641/care_tkynri.png" 
            alt="Care.xyz Logo"
            width="120"
            style="margin-bottom: 10px;"
          />
          <h2 style="margin: 0; color: #16a34a;">Care.xyz</h2>
          <p style="margin: 4px 0; color: #666;">
            Trusted Care Services at Your Doorstep
          </p>
        </div>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

        <!-- Booking Info -->
        <h3 style="color: #111;">🧾 Booking Invoice</h3>

        <p><strong>Booking ID:</strong> ${bookingId}</p>
        <p><strong>Customer:</strong> ${userName}</p>
        <p><strong>Booking Date:</strong> ${new Date(
          bookingDate
        ).toLocaleDateString()}</p>

        <!-- Service Table -->
        <table width="100%" cellspacing="0" cellpadding="10" style="
          border-collapse: collapse;
          margin-top: 16px;
        ">
          <thead>
            <tr style="background-color: #f1f5f9;">
              <th align="left">Service</th>
              <th align="center">Duration</th>
              <th align="right">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${serviceName}</td>
              <td align="center">${duration} day(s)</td>
              <td align="right">৳ ${pricePerDay} / day</td>
            </tr>
          </tbody>
        </table>

        <!-- Total -->
        <div style="
          margin-top: 20px;
          padding-top: 10px;
          border-top: 1px dashed #d1d5db;
        ">
          <h3 style="text-align: right; color: #16a34a;">
            Total: ৳ ${totalCost}
          </h3>
        </div>

        <!-- Location -->
        <p style="margin-top: 16px;">
          <strong>Service Location:</strong><br/>
          ${location.division}, ${location.district},<br/>
          ${location.city}, ${location.area}
        </p>

        <!-- Status -->
        <p>
          <strong>Status:</strong>
          <span style="
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
            background: ${
              status === "Pending" ? "#facc15" : "#4ade80"
            };
            color: #000;
          ">
            ${status}
          </span>
        </p>

        <!-- Footer -->
        <div style="
          margin-top: 30px;
          text-align: center;
          font-size: 13px;
          color: #6b7280;
        ">
          <p>
            Thank you for choosing <strong>Care.xyz</strong> 💚
          </p>
          <p>
            If you have any questions, contact us at  
            <a href="mailto:support@care.xyz" style="color: #16a34a;">
              support@care.xyz
            </a>
          </p>
        </div>

      </div>
    </div>
  `;
};
