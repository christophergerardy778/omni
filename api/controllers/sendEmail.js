const nodemailer = require('nodemailer')

module.exports = (req, res) => {
  const { email } = req.body

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'chrtophergerardy778@gmail.com',
      pass: '123456',
    },
  })

  const mailOptions = {
    from: 'chrtophergerardy778@gmail.com',
    to: 'chrtophergerardy778@gmail.com',
    subject: 'Contacto',
    text: 'Contenido del email',
  }

  transporter.sendMail(mailOptions, (err) => {
    if (!err) {
      return res.status(200).json({ ok: true, message: 'OK' })
    }

    console.log(err);

    return res.status(500).json({
      ok: false,
      err,
      error: 'server error',
    })
  })
}
