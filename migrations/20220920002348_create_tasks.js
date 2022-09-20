/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('tasks', function (table) {
            table.increments('id');
            table.string('task', 255).notNullable();
            table.string('entryDate', Date).notNullable();
            table.string('deadline', Date).notNullable();
            table.string('status', 255).notNullable();
            table.string('comments', 255).notNullable();
        })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable("tasks");

};