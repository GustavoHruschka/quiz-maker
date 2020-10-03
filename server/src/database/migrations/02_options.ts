import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('options', table => {
        table.increments('id').primary()
        table.string('text').notNullable()
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
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('options')
}
