/**
 * PersonController
 *
 * @description :: Server-side logic for managing receivers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getPersons: function(req, res) {
        PersonService.getPersons(function(persons) {
            res.json(persons);
        });
  }

};
