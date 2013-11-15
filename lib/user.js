module.exports.show = function(req, res) {
  res.send(req.method + ' /users/' + req.param('user_id') + ' -> show');
};

module.exports.update = function(req, res) {
  res.send(req.method + ' /users/' + req.param('user_id') + ' -> update (user_id.name=' + req.user_id.name + ')');
};

module.exports.feed = function(req, res) {
  res.send(req.method + ' /users/' + req.param('user_id') + '/feed -> feed');
};

module.exports.addStar = function(req, res) {
  res.send(req.method + ' /users/' + req.param('user_id') + '/star -> addStar');
};

module.exports.messages = function(req, res) {
  res.send(req.method + ' /users/' + req.param('user_id') + '/messages[:format] -> messages (format=' + req.format + ')');
};

