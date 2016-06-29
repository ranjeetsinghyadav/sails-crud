/**
 * BankDetails.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mongodbServer',

  attributes: {

    bankName: {
      type: 'string',
      size: 128,
      required: true
    },
    address: {
      type: 'string',
      size: 500
    },
    accountNumber: {
      type: 'string',
      size: 128,
      required: true,
      unique: true
    },
    accountType: {
      type: 'string',
      size: 50,
      required: true,
    },
    customerEmail: {
      type: 'email',
      required: true,
    },
    isActive: {
      type: 'boolean',
      required: true,
      defaultsTo: function() {
        return true;
      }
    },
    owner: {
      model: 'person',
      required: true,
    }

  }
};
