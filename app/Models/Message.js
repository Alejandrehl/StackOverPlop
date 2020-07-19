'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {
    thread () {
        return this.belongsTo('APp/Models/Thread')
    }
}

module.exports = Message
