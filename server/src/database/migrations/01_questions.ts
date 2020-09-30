import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('questions', table => {
        table.increments('id').primary()
        table.string('text').notNullable()
        table.integer('right-option').notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('questions')
}
