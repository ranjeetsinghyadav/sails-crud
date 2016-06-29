/**
 * TransactionDetails.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mysqlServer',

  attributes: {

    orderNumber: {
      type: 'string',
      primaryKey: true,
      defaultsTo: function() {
        return uuid.v4();
      }
    },

    txnAmount: {
      type: 'float',
      size: 128,
      required: true
    },

    status: {
      type: 'string',
      enum: ['pending', 'success', 'denied', 'failed']
    },

    sender: {
      model: 'person',
      required: true
    },

    receiver: {
      model: 'person',
      required: true
    }
  }
};
