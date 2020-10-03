import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('quizzes_questions', table => {
        table
            .integer('quiz_id')
            .references('id')
            .inTable('quizzes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable()
        table
            .integer('question_id')
            .references('id')
            .inTable('questions')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('quizzes-questions')
}
