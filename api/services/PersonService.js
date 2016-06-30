module.exports = {
  getPersons: function(next) {
    Person.find().populate('accounts').exec(function(err, persons) {
      if(err) throw err;
      next(persons);
    });
  }
}
