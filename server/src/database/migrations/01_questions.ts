import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('questions', table => {
        table.increments('id').primary()
        table.string('text').notNullable()
        table.integer('question_number').notNullable()
        table.integer('right_option').notNullable()
        table
            .integer('quiz_id')
            .references('id')
            .inTable('quizzes')
            .notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('questions')
}
