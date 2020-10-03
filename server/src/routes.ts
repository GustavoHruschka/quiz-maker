import express from 'express'
import QuizzesController from './controllers/QuizzesController'

const routes = express.Router()

const quizzesController = new QuizzesController()

routes.get('/quizzes', quizzesController.index)
routes.post('/quizzes', quizzesController.create)

export default routes