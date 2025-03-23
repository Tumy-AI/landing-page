import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nombre, correo, mensaje } = body;

        if (!nombre || !correo || !mensaje) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            );
        }

        // Fecha formateada para mostrar en el correo
        const fecha = new Date().toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // 1. Email para el administrador (Tumy AI)
        const adminHtmlEmail = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nuevo mensaje de contacto</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; margin: 20px auto; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 30px 0; background-color: #000000; border-top-left-radius: 8px; border-top-right-radius: 8px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Nuevo Mensaje de Contacto</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding: 10px 0;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="30" valign="top">
                          <img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" alt="User Icon" width="24" height="24" style="display: block;">
                        </td>
                        <td style="padding-left: 15px;">
                          <p style="margin: 0; font-size: 16px;"><strong>Nombre:</strong> ${nombre}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 10px 0;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="30" valign="top">
                          <img src="https://cdn-icons-png.flaticon.com/128/561/561127.png" alt="Email Icon" width="24" height="24" style="display: block;">
                        </td>
                        <td style="padding-left: 15px;">
                          <p style="margin: 0; font-size: 16px;"><strong>Correo:</strong> <a href="mailto:${correo}" style="color: #000000; text-decoration: underline;">${correo}</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 10px 0;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="30" valign="top">
                          <img src="https://cdn-icons-png.flaticon.com/128/833/833602.png" alt="Calendar Icon" width="24" height="24" style="display: block;">
                        </td>
                        <td style="padding-left: 15px;">
                          <p style="margin: 0; font-size: 16px;"><strong>Fecha:</strong> ${fecha}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 20px 0 10px 0;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="30" valign="top">
                          <img src="https://cdn-icons-png.flaticon.com/128/2665/2665038.png" alt="Message Icon" width="24" height="24" style="display: block;">
                        </td>
                        <td style="padding-left: 15px;">
                          <p style="margin: 0 0 10px 0; font-size: 16px;"><strong>Mensaje:</strong></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; border-left: 4px solid #000000;">
                    <p style="margin: 0; line-height: 1.6; font-size: 15px;">${mensaje}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 20px; background-color: #f0f0f0; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #666666; font-size: 14px;">Este es un mensaje automático del sitio web <strong>Tumy AI</strong>.</p>
              <p style="margin: 10px 0 0 0; color: #666666; font-size: 14px;">© ${new Date().getFullYear()} Tumy AI. Todos los derechos reservados.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

        // 2. Email de confirmación para el usuario
        const userHtmlEmail = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de mensaje recibido</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; margin: 20px auto; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 30px 0; background-color: #000000; border-top-left-radius: 8px; border-top-right-radius: 8px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Confirmación de Mensaje</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 20px 0; font-size: 16px;">Hola <strong>${nombre}</strong>,</p>
              <p style="margin: 0 0 20px 0; font-size: 16px;">¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
              
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; border-left: 4px solid #000000; margin: 25px 0;">
                <p style="margin: 0 0 15px 0; font-weight: bold; font-size: 16px;">Resumen de tu mensaje:</p>
                <p style="margin: 0 0 10px 0; font-size: 15px;"><strong>Fecha:</strong> ${fecha}</p>
                <p style="margin: 0 0 10px 0; font-size: 15px;"><strong>Mensaje:</strong></p>
                <p style="margin: 0; line-height: 1.6; font-size: 15px;">${mensaje}</p>
              </div>
              
              <p style="margin: 20px 0 0 0; font-size: 16px;">Si tienes alguna otra pregunta, no dudes en contactarnos nuevamente.</p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 20px; background-color: #f0f0f0; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #666666; font-size: 14px;">Este es un mensaje automático del sitio web <strong>Tumy AI</strong>.</p>
              <p style="margin: 10px 0 0 0; color: #666666; font-size: 14px;">© ${new Date().getFullYear()} Tumy AI. Todos los derechos reservados.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

        // Enviar email al administrador
        const adminMailOptions = {
            from: `"Tumy AI" <${process.env.GMAIL_USER}>`,
            to: 'tumy.ai.pe@gmail.com',
            subject: `✉️ Nuevo mensaje de contacto de ${nombre}`,
            text: `
        Nombre: ${nombre}
        Correo: ${correo}
        Fecha: ${fecha}
        
        Mensaje:
        ${mensaje}
        
        Este es un mensaje automático del sitio web Tumy AI.
      `,
            html: adminHtmlEmail,
        };

        // Enviar email de confirmación al usuario
        const userMailOptions = {
            from: `"Tumy AI" <${process.env.GMAIL_USER}>`,
            to: correo,
            subject: `✅ Hemos recibido tu mensaje - Tumy AI`,
            text: `
        Hola ${nombre},
        
        ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
        
        Resumen de tu mensaje:
        Fecha: ${fecha}
        Mensaje:
        ${mensaje}
        
        Si tienes alguna otra pregunta, no dudes en contactarnos nuevamente.
        
        Este es un mensaje automático del sitio web Tumy AI.
      `,
            html: userHtmlEmail,
        };

        // Enviar ambos correos
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        return NextResponse.json({
            success: true,
            message: 'Correos enviados correctamente'
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Error al enviar los correos' },
            { status: 500 }
        );
    }
}