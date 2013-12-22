/*pra02*/
var count=0;
exports.info = function(req, res){
	count+=1;
	var obj={
    "server": "Moco's Server",
    "Time": new Date().toISOString(),
    "Count": count
};
  res.send(obj);
};
/*pra03
var person ={
	tel:""
};
exports.creat = function(req, res){
	console.log(">>>>>creat");
	person.tel ="12345678";
	res.end();
};
exports.read = function(req, res){
	console.log(">>>>>read");
	res.send(person);
	res.end();
};
exports.upload = function(req, res){
	console.log(">>>>>upload");
	console.log(req.query);
	person.tel =req.query.tel;
	res.end();
};
exports.delete = function(req, res){
	console.log(">>>>>delete");
	person.tel ="";
	res.end();
};
*/

/*pra04*/
var arrays = [];

exports.creat1 = function(req, res){
	
	var person ={
	name:"",
	tel:""
};

	person.name=req.query.name;
	person.tel =req.query.tel;
	arrays.push(person);
	res.end();
};


exports.read1 = function(req, res){
	res.send(arrays);
	res.end();
};