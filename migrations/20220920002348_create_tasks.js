/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
    .createTable("status", function (table) {
        table.increments("id_status");
        table.string("status", 255).notNullable();
      })

    .createTable("tasks", function (table) {
        table.increments("id_tasks");
        table.string("tasks", 255).notNullable();
        table.timestamp("entry_date").defaultTo(knex.fn.now());
        table.dateTime("deadline").notNullable();
        table.integer("id_status").unsigned().notNullable();
  
        table.foreign("id_status").references("id_status").inTable("status");
      })
  
    .createTable("comments", function (table) {
        table.increments("id_comments");
        table.string("comments", 255).notNullable();
        table.integer("id_tasks").unsigned().notNullable();
        table.foreign("id_tasks").references("id_tasks").inTable("tasks");
      })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
    .dropTable("status")
    .dropTable("tasks")
    .dropTable("comments")

};