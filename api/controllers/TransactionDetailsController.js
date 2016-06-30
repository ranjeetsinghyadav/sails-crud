/**
 * TransactionDetailsController
 *
 * @description :: Server-side logic for managing transactiondetails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	success: function(req, res) {
        TransactionDetailsService.getSuccessfulTxns(function(transactions) {
            res.json(transactions);
        });
  },

	failed: function(req, res) {
        TransactionDetailsService.getFailedTxns(function(transactions) {
            res.json(transactions);
        });
  },

	filter: function(req, res) {
				var amount = req.query.amountGreaterThan;
        TransactionDetailsService.getFilteredTxns(amount, function(transactions) {
            res.json(transactions);
        });
  }

};
