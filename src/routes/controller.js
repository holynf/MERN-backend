const {validationResult} = require("express-validator");
const User = require("./../models/user");
const autoBind = require("auto-bind");

module.exports = class {
    constructor() {
        autoBind(this);
        this.User = User;
    }

    validationBody(req, res) {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            const errors = result.array();
            const messages = [];
            errors.forEach(err => messages.push(err.msg));
            this.response({res, code: 400, message: "validation error", data: messages});
            return false;
        }
        return true;
    }

    validate(req, res, next) {
        if (!this.validationBody(req, res)) {
            return;
        }
        next();
    }

    response({res, message, code: status = 200, data = {}, ...rest}) {
        res.status(status).json({
            message, data, status, ...rest
        });
    }

};