function LogRequests(req, res, next) {

    console.count("Número de requisições");

    return next();

}

module.exports = LogRequests;