import db from '../database/connections'
import { Request, Response } from 'express'

interface questionItem {
    questionText: string
    selectedRightOptionNumber: number
    optionsText: Array<string>
}

export default class QuizzesController {
    async index(request: Request, response: Response) {
        return response.send('Okay! You made a GET request')
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
                const question: questionItem = questions[questionNumber]

                const insertedQuestionId = await trx('questions').insert({
                    text: question.questionText,
                    right_option: question.selectedRightOptionNumber,
                    quiz_id: insertedQuizId[0]
                })

                await trx('quizzes_questions').insert({
                    quiz_id: insertedQuizId[0],
                    question_id: insertedQuestionId[0]
                })

                for (let optionNumber in question.optionsText) {
                    const optionText = question.optionsText[optionNumber]

                    const insertedOptionId = await trx('options').insert({
                        text: optionText,
                        quiz_id: insertedQuizId[0],
                        question_id: insertedQuestionId[0]
                    })

                    await trx('questions_options').insert({
                        question_id: insertedQuestionId[0],
                        option_id: insertedOptionId[0]
                    })
                }
            }

            await trx.commit()
            return response.status(200).send('POST done!')
        }

        catch (error) {
            console.log(error)
            await trx.rollback()
            return response.status(400).send('An error occured')
        }
    }
}
