var connection = require("./connection.js");

var orm = {
	selectAll: function(table,result) {
    
        var queryString = "SELECT * FROM ??";
        
        connection.query(queryString, [table], function(err, result) {
        
            console.log(result);
		});
	},
    
    
    insertOne: function(table, objCol, objData, result) {
    
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        
    
        connection.query(queryString, [table, objCol, objData], function(err, result) {
            
    console.log(result);
		});
	},
	updateOne: function(table, objCol, objData, conditionCol, conditionData, result) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        
        
        connection.query(queryString, [table, objCol, objData, conditionCol, conditionData], function(err, result) {
        
            console.log(result);
		});
	}
};

module.exports = orm;