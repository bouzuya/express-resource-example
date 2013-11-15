exports.index = function(req, res) { res.send(req.method + ' /groups -> index'); }
exports.new = function(req, res) { res.send(req.method + ' /groups/new -> new'); }
exports.create = function(req, res) { res.send(req.method + ' /groups -> create'); }
exports.show = function(req, res) { res.send(req.method + ' /groups/' + req.param('group') + ' -> show'); }
exports.edit = function(req, res) { res.send(req.method + ' /groups/' + req.param('group') + '/edit -> edit'); }
exports.update = function(req, res) { res.send(req.method + ' /groups/' + req.param('group') + ' -> update'); }
exports.destroy = function(req, res) { res.send(req.method + ' /groups/' + req.param('group') + ' -> destroy'); }

