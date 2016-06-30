/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mongodbServer',

  attributes: {

    firstName: {
      type: 'string',
      size: 128,
      required: true
    },
    lastName: {
      type: 'string',
      size: 128
    },
    phoneNumber: {
      type: 'string',
      required: true,
      unique: true
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },

    accounts: {
      collection: 'bankDetails',
      via: 'owner'
    }

  }
};
