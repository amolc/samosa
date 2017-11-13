
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : process.env.DB_NAME,
    user : process.env.DB_USER,
	password : process.env.DB_PASSWORD,
    host :process.env.DB_HOST,
 });

 var CRUD = require('mysql-crud');
 var postCRUD = CRUD(db, 'tbl_post');

exports.findAllPost = function(req, res) {
	postCRUD.load({}, function (err, val) {
		res.jsonp(val);
	});
};

/******************for create new post value in to data base*****************/


/**
 * @api {post} /addpost Request User information
 * @apiName Post
 * @apiGroup Post
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
exports.createNewPost = function (req, res) {
	var title = req.body.post_title;
	var content = req.body.post_content;
	var category = req.body.post_category;
    console.log(title);
    console.log(content);
    console.log(category);
	var datetime = new Date();

	postCRUD.create({'post_title': title, 'post_content': content, 'category_id': category, 'created_on': datetime}, function (err, vals) {
		console.log(err);
		if (parseInt(vals.affectedRows) > 0) {
			var resdata = {
				status: true,
				message: 'Post successfully added'
			};
			res.jsonp(resdata);
		} else {
			var resdata = {
				status: false,
				message: 'post not added '
			};
			res.jsonp(resdata);
		}
	});
};
     
/******************  End create *****************/


/******************for  delete data from  data base*****************/

exports.deletePost = function(req, res) {
	var post_id=parseInt(req.params.id);
	postCRUD.destroy({'post_id' : post_id}, function (err, vals) {
		console.log(vals.affectedRows);
		if(parseInt(vals.affectedRows)>0){
			var resdata={status:true,
				message:'post successfully deleted'};
			res.jsonp(resdata);
		}else{
			var resdata={status:false,
				message:'record not found '};
			res.jsonp(resdata);
		}
	});
};

/******************  End Delete *****************/

/******************for  update data in data base********/

exports.updatePost = function(req, res) {
	var title=req.body.post_title;
	var content=req.body.post_content;
	var post_id=req.body.post_id;
	postCRUD.update({'post_id' : post_id}, {post_title:title, post_content:content}, function (err, vals) {
		if(parseInt(vals.affectedRows)>0){
			var resdata={status:true,
				message:'post successfully updated'};
			res.jsonp(resdata);
		}else{
			var resdata={status:false,
				message:'record not updated'};
			res.jsonp(resdata);
		}
	});
};

/******************  End Update *****************/

/******************start Details ***************/

exports.postdetail = function(req, res) {
	var id = parseInt(req.params.id);
    console.log(id);
	postCRUD.load({post_id: id}, function (err, val) {
		res.jsonp(val[0]);
	});
};

/******************end Details ***************/