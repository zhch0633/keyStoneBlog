/**
 * Created by 淡斋 on 02/02/16.
 * use this content to store my education level contnt 
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

var Education = new keystone.List('Education');

Education.add({
	school:{ type : Types.Text , index: true }
});

Education.register();
