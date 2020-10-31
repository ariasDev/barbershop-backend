const nodemailer = require('nodemailer');
const uuid = require('./uuid')
/* 
envia un correo electrónico con el código de verificación,
al usuario que desea cambiar su contraseña
*/
exports.sendVerificationCode = (userEmail, userName) => {
    try {
        let verificationCode = uuid.generateCode();
        let firstName = userName.split(' ')[0]
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'afrodita.develop@gmail.com',
            pass: 'afroditadmin'
            }
        });

        let mailOptions = {
            from: 'afrodita.develop@gmail.com',
            to: userEmail,
            subject: 'Código de verificación para reestablecer tu contraseña',
            html: `
            <p>
            Hola <strong>${firstName}</strong>, <br>
            ingresa este código de verificación en la app para reestablecer tu contraseña: <strong>${verificationCode}</strong>
            </p>`,
        };

        return transporter.sendMail(mailOptions)
        .then(resolve => {
            return {
                "response": "Se envió el email con exito",
                "verificationCode": verificationCode
            }
        })
        .catch(reject => {
            return {
                "error": "Algo salió mal",
                "errorDescription": reject
            }
        })  
    } catch (error) {
        return {
            "error": "Algo salió mal",
            "errorDescription": error
        }
    }
}