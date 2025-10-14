import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Configuration du transporteur email (utilise tes vraies credentials)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ex: smtp.gmail.com
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // ton email
        pass: process.env.SMTP_PASS, // ton mot de passe d'application
      },
    });

    // Template email pour l'admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Nouvelle Demande de Réservation</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0;">Airport Luxuria - Meet & Greet Premium</p>
        </div>
        
        <div style="padding: 30px; background: white;">
          <h2 style="color: #1e3a8a; border-bottom: 3px solid #dc2626; padding-bottom: 10px;">Détails du Voyage</h2>
          
          <table style="width: 100%; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f1f5f9; font-weight: bold; width: 30%;">Départ:</td>
              <td style="padding: 10px;">${formData.departureAirport}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f1f5f9; font-weight: bold;">Arrivée:</td>
              <td style="padding: 10px;">${formData.arrivalAirport}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f1f5f9; font-weight: bold;">Service Chauffeur:</td>
              <td style="padding: 10px;">
                ${formData.needsChauffeur ? `
                  <span style="color: #dc2626; font-weight: bold;">✅ OUI</span><br>
                  <strong>Adresse de départ:</strong> ${formData.departureAddress}
                ` : '<span style="color: #64748b;">❌ Non demandé</span>'}
              </td>
            </tr>
          </table>

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
          </table>

          ${formData.additionalNotes ? `
            <h2 style="color: #1e3a8a; border-bottom: 3px solid #dc2626; padding-bottom: 10px;">Notes Additionnelles</h2>
            <div style="background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <p style="margin: 0; line-height: 1.6;">${formData.additionalNotes}</p>
            </div>
          ` : ''}

          <div style="background: #1e3a8a; padding: 20px; margin: 30px 0; border-radius: 8px;">
            <h3 style="color: white; margin: 0 0 10px 0;">🚨 Action Requise</h3>
            <p style="color: #e2e8f0; margin: 0;">Contacter ce client dans les 2 heures pour la consultation personnalisée.</p>
          </div>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; color: #64748b; font-size: 14px;">
            Email généré automatiquement - Airport Luxuria © 2025
          </p>
        </div>
      </div>
    `;

    // Template email de confirmation pour le client
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Demande Reçue avec Succès</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0;">Airport Luxuria - Meet & Greet Premium</p>
        </div>
        
        <div style="padding: 30px; background: white;">
          <p style="font-size: 18px; color: #1e3a8a; margin: 0 0 20px 0;">Bonjour ${formData.firstName},</p>
          
          <p style="line-height: 1.6; margin: 0 0 20px 0;">
            Merci d'avoir choisi Airport Luxuria pour votre expérience aéroportuaire premium. 
            Nous avons bien reçu votre demande de réservation et nos experts vous contacteront 
            <strong style="color: #dc2626;">dans les 2 prochaines heures</strong> pour finaliser votre devis personnalisé.
          </p>

          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin: 0 0 15px 0;">📋 Récapitulatif de votre demande:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li style="margin: 8px 0;"><strong>Départ:</strong> ${formData.departureAirport}</li>
              <li style="margin: 8px 0;"><strong>Arrivée:</strong> ${formData.arrivalAirport}</li>
              <li style="margin: 8px 0;"><strong>Service Meet & Greet Premium:</strong> ✅ Inclus</li>
              <li style="margin: 8px 0;"><strong>Service Chauffeur:</strong> ${formData.needsChauffeur ? '✅ Demandé' : '❌ Non demandé'}</li>
            </ul>
          </div>

          <div style="background: #dc2626; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: white; margin: 0 0 10px 0;">🌟 Votre Expérience Premium Inclut:</h3>
            <ul style="color: white; margin: 0; padding-left: 20px;">
              <li style="margin: 5px 0;">Agent personnel dédié à votre arrivée</li>
              <li style="margin: 5px 0;">Accès Fast Track pour la sécurité</li>
              <li style="margin: 5px 0;">Accès VIP aux salons d'aéroport</li>
              <li style="margin: 5px 0;">Assistance bagages personnalisée</li>
              <li style="margin: 5px 0;">Support 24/7 en français et anglais</li>
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

    // Envoi de l'email à l'admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL, // ton email pour recevoir les demandes
      subject: `🚨 NOUVELLE RÉSERVATION - ${formData.firstName} ${formData.lastName} (${formData.departureAirport} → ${formData.arrivalAirport})`,
      html: adminEmailHtml,
    });

    // Envoi de l'email de confirmation au client
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: formData.email,
      subject: 'Demande reçue - Airport Luxuria Meet & Greet Premium',
      html: clientEmailHtml,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Booking request sent successfully' 
    });

  } catch (error) {
    console.error('Error sending booking email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send booking request' },
      { status: 500 }
    );
  }
}