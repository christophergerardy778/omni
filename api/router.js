const sendEmailController = require('./controllers/sendEmail')
const router = require('express').Router()

router.post('/email-contact-us', sendEmailController);

module.exports = router
