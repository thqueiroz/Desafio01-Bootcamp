const projects = require('../models/projects');

function checkProjectExists(req, res, next) {
    const { id } = req.params;
    const project = projects.find(p => p.id == id);

    if(!project){
        return res.status(400).json('We didn`t find the project');
    }

    next();
}

module.exports = checkProjectExists;