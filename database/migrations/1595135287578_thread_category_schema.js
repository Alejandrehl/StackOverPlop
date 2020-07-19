'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ThreadCategorySchema extends Schema {
  up () {
    this.create('thread_categories', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('thread_categories')
  }
}

module.exports = ThreadCategorySchema
