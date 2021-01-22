

// more modern syntax
module.exports.some_middleware_arrow = (req, res, next) => {
    const arrow = req.cookies.arrow;
    console.log(req.cookies, arrow);
    next();
}

module.exports.some_middleware_classic = function (req, res, next) {
    const classic = req.cookies['classic'];
    console.log(req.cookies, classic);
    next();
}