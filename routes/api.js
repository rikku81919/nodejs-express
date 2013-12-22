var calledTime=0;
exports.info = function(req, res){
	calledTime+=1;
	var obj1={
    "server": "Moco's Server",
    "Time": new Date().toISOString(),
    "Count": calledTime
};
  res.send(obj1);
};
