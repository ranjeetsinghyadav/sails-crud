module.exports = {
  getSuccessfulTxns: function(next) {
    TransactionDetails.find({ status: 'success' }).populate(['sender','receiver']).exec(function(err, transactions) {
      if(err) throw err;
      next(transactions);
    });
  },

  getFailedTxns: function(next) {
    TransactionDetails.find({ status: 'failed' }).populate(['sender','receiver']).exec(function(err, transactions) {
      if(err) throw err;
      next(transactions);
    });
  },

  getFilteredTxns: function(amount, next) {
    TransactionDetails.find({ txnAmount: { '>=': amount } }).populate(['sender','receiver']).exec(function(err, transactions) {
      if(err) throw err;
      next(transactions);
    });
  }
}
