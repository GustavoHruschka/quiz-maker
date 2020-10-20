import db from '../database/connections'
import { Request, Response } from 'express'

interface questionData {
  questionText: string
  optionsText: Array<string>
  selectedRightOptionNumber: number
}

interface quizData {
  title: string
  description: string
  questions: Array<questionData>
}

export default class QuizzesController {
  async index(request: Request, response: Response) {
    try {
      const quizId = request.params.id

      const [{ title, description }] = await db('quizzes')
        .where({ id: quizId })
        .select('title', 'description')

      let questions: Array<questionData> = await db('questions')
        .where({ quiz_id: quizId })
        .select('text', 'right_option')

      for (let questionNumber in questions) {
        let options = await db('options')
          .where({
            quiz_id: quizId,
            question_number: questionNumber
          })
          .select('text')

        let optionsText = options.map(option => option.text)

        questions[questionNumber].optionsText = optionsText
      }

      const quizData: quizData = { title, description, questions }
      return response.send(quizData)
    }

    catch (error) {
      console.log(error)
      return response.status(400).send('An error occurred.')
    }
  }

  async create(request: Request, response: Response) {
    const trx = await db.transaction()

    try {
      const {
        title,
        description,
        questions,
      } = request.body

      const insertedQuizId = await trx('quizzes').insert({
        title,
        description,
      })

      for (let questionNumber in questions) {
        const question: questionData = questions[questionNumber]

        const insertedQuestionId = await trx('questions').insert({
          text: question.questionText,
          question_number: questionNumber,
          right_option: question.selectedRightOptionNumber,
          quiz_id: insertedQuizId[0],
        })

        for (let optionNumber in question.optionsText) {
          const optionText = question.optionsText[optionNumber]

          await trx('options').insert({
            text: optionText,
            question_number: questionNumber,
            quiz_id: insertedQuizId[0],
            question_id: insertedQuestionId[0]
          })
        }
      }

      await trx.commit()
      return response.status(200).send()
    }

    catch (error) {
      console.log(error)
      await trx.rollback()
      return response.status(400).send('An error occured.')
    }
  }
}
