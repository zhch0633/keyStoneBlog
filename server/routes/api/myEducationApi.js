/**
 * Created by 淡斋 on 02/02/16.
 * a test api for react get info
 */
var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var education = keystone.list('Education').model.find(function (err,educations) {
		if(err) res.send("internal error");
		var finalcount = educations.length;
		var responseJson = {};
		for(var i= 0 ; i< finalcount; i++){
			responseJson[i] = {
				school: educations[i].school
			};
		}
		res.send(JSON.stringify(responseJson));
	});
};
