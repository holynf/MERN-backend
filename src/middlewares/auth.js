const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("./../models/user");

async function isLogin(req, res, next) {
    let token;
    const authHeader = String(req.headers["authorization"] || "");
    if (authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7, authHeader.length);
    }

    if (!token) res.status(401).send("access denied");
    try {
        const decoded = jwt.verify(token, config.get("jwt_key"));
        req.user = await User.findById(decoded._id);
        next();
    } catch (ex) {
        res.status(400).send("invalid token");
    }
}

async function isAdmin(req, res, next) {
    if (!req.user.isadmin) res.status(403).send("access denied");
    next();
}

module.exports = {
    isLogin, isAdmin
};