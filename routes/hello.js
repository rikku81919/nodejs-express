
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('hello');
};

exports.moco = function(req, res){
  res.render('moco');
};

exports.mocos = function(req, res){
  res.render('mocos');
};