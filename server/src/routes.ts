import express from 'express'
import QuizzesController from './controllers/QuizzesController'
import LandingQuizzesController from './controllers/LandingQuizzesController'

const routes = express.Router()

const quizzesController = new QuizzesController()
const landingQuizzesController = new LandingQuizzesController

routes.get('/quizzes', quizzesController.index)
routes.post('/quizzes', quizzesController.create)
routes.get('/landing', landingQuizzesController.index)
routes.post('/landing', landingQuizzesController.create)

export default routes
