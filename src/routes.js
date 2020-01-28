const {Router} = require('express');
const logRequests = require('./middlewares/LogRequests');
const checkProjectExists = require('./middlewares/CheckProjectExists');
const projectsController = require('./controllers/ProjectsController');
const taskController = require('./controllers/TaskController');

const routes = Router();

routes.use(logRequests)

routes.get("/projects", projectsController.index);

routes.post('/projects', projectsController.store);
routes.post('/projects/:id/tasks', checkProjectExists, taskController.store);

routes.put('/projects:id', checkProjectExists, projectsController.update);

routes.delete('/projects:id', checkProjectExists, projectsController.destroy);

module.exports = routes;



