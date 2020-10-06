import db from '../database/connections'
import { Request, Response } from 'express'

class LandingQuizzesController {
    async index(request: Request, response: Response) {
        try {
            const data = await db
                .select()
                .table('quizzes')
                .orderBy('id', 'desc')
                .limit(20)

            return response.status(200).send(data)
        }

        catch (error) {
            console.log(error)
            return response.send('An error occured')
        }
    }

    async create(request: Request, response: Response) {
        return response.status(400).send("You can't make a POST request here")
    }
}

export default LandingQuizzesController
