const express = require('express')
const homePageController = require('../contollers/homePageController')
const e = require('express')

const homePageRouter = express.Router()

homePageRouter.get('/',homePageController.displayHompage)
homePageRouter.get('/about',homePageController.displayAboutPage)
homePageRouter.get('/service',homePageController.displayServicePage)
homePageRouter.get('/contact',homePageController.displayContactpage)

module.exports = homePageRouter