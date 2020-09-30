import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('questions_options', table => {
        table
            .integer('question_id')
            .references('id')
            .inTable('questions')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable()
        table
            .integer('option_id')
            .references('id')
            .inTable('options')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable()
    })    
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('questions_options')
}