var orm = require('../config/orm.js');

var burger = {
	all: function(response) {
		orm.selectAll('burgers', function(res) {
			console.log(repsonse);
		});
	},

	new: function(objCol, objData, res) {
		orm.insertOne('burgers', objCol, objData, function(res) {
			console.log(response);
		});
	},

	devour: function(objCol, objData, conditionCol, conditionData,res) {
		orm.updateOne('burgers', objCol, objData, conditionCol, conditionData, function(res) {
			console.log(response);
		});
	}
};

module.exports = burger;
