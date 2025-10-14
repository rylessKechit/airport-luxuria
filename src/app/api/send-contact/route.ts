import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email pour l'admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Nouveau Message de Contact</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0;">Airport Luxuria - Support Client</p>
        </div>
        
        <div style="padding: 30px; background: white;">
          <div style="background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin-bottom: 20px;">
            <h3 style="color: #92400e; margin: 0 0 5px 0;">Type de demande:</h3>
            <p style="margin: 0; font-weight: bold;">${formData.contactReason}</p>
          </div>

          <h2 style="color: #1e3a8a; border-bottom: 3px solid #dc2626; padding-bottom: 10px;">Informations Client</h2>
          
          <table style="width: 100%; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f1f5f9; font-weight: bold; width: 30%;">Nom:</td>
              <td style="padding: 10px;">${formData.firstName} ${formData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f1f5f9; font-weight: bold;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${formData.email}" style="color: #dc2626;">${formData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f1f5f9; font-weight: bold;">Téléphone:</td>
              <td style="padding: 10px;"><a href="tel:${formData.phone}" style="color: #dc2626;">${formData.phone}</a></td>
            </tr>
            ${formData.company ? `
            <tr>
              <td style="padding: 10px; background: #f1f5f9; font-weight: bold;">Entreprise:</td>
              <td style="padding: 10px;">${formData.company}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px; background: #f1f5f9; font-weight: bold;">Sujet:</td>
              <td style="padding: 10px;">${formData.subject}</td>
            </tr>
          </table>

          <h2 style="color: #1e3a8a; border-bottom: 3px solid #dc2626; padding-bottom: 10px;">Message</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
          </div>

          <div style="background: #1e3a8a; padding: 20px; margin: 30px 0; border-radius: 8px;">
            <h3 style="color: white; margin: 0 0 10px 0;">🚨 Action Requise</h3>
            <p style="color: #e2e8f0; margin: 0;">Contacter ce client dans les 2 heures selon notre engagement qualité.</p>
          </div>
        </div>
      </div>
    `;

    // Email de confirmation pour le client
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Message Reçu</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0;">Airport Luxuria - Support Premium</p>
        </div>
        
        <div style="padding: 30px; background: white;">
          <p style="font-size: 18px; color: #1e3a8a; margin: 0 0 20px 0;">Bonjour ${formData.firstName},</p>
          
          <p style="line-height: 1.6; margin: 0 0 20px 0;">
            Merci de nous avoir contactés. Nous avons bien reçu votre message concernant : 
            <strong style="color: #dc2626;">${formData.contactReason}</strong>
          </p>

          <p style="line-height: 1.6; margin: 0 0 20px 0;">
            Notre équipe d'experts vous contactera <strong style="color: #dc2626;">dans les 2 prochaines heures</strong> 
            pour discuter de vos besoins et vous proposer une solution personnalisée.
          </p>

          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin: 0 0 15px 0;">📋 Récapitulatif de votre demande:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li style="margin: 8px 0;"><strong>Type:</strong> ${formData.contactReason}</li>
              <li style="margin: 8px 0;"><strong>Sujet:</strong> ${formData.subject}</li>
              <li style="margin: 8px 0;"><strong>Contact préféré:</strong> ${formData.phone} ou ${formData.email}</li>
            </ul>
          </div>

          <div style="background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #92400e;">
              💡 Besoin d'assistance immédiate ? Appelez notre ligne directe 24/7 : +33 1 XX XX XX XX
            </p>
          </div>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 10px 0; color: #64748b;">
            Airport Luxuria - L'Élégance Française à Chaque Aéroport
          </p>
          <p style="margin: 0; color: #64748b; font-size: 14px;">
            © 2025 Airport Luxuria. Tous droits réservés.
          </p>
        </div>
      </div>
    `;

    // Envoi des emails
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `🔔 NOUVEAU CONTACT - ${formData.contactReason} - ${formData.firstName} ${formData.lastName}`,
      html: adminEmailHtml,
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: formData.email,
      subject: 'Message reçu - Airport Luxuria vous recontacte sous 2h',
      html: clientEmailHtml,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Contact message sent successfully' 
    });

  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send contact message' },
      { status: 500 }
    );
  }
}