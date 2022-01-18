const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')

module.exports = (req, res) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'webomni2022@gmail.com',
      pass: 'WEBOMNI2022',
    },
  })

  const mailOptions = {
    from: 'OMNI WEB SOLUTION BOT',
    to: 'sales@omniintllc.us',
    subject: req.body.type === 0 ? 'I need Quote service' : 'I wanna be part of the team',
    template: 'contact',
    context: req.body
  }

  transport.use(
    'compile',
    hbs({
      extName: '.hbs',
      viewPath: path.resolve(__dirname, '../email'),
      viewEngine: {
        extname: '.hbs',
        layoutsDir: path.resolve(__dirname, '../email/layouts'),
        defaultLayout: 'default',
      },
    })
  )

  transport.sendMail(mailOptions, (err) => {
    if (!err) {
      return res.status(200).json({
        ok: true,
        message: 'OK',
        data: path.resolve(__dirname, '../email/'),
      })
    }

    return res.status(200).json({
      ok: false,
      err: err.message,
      error: 'server error',
    })
  })
}
