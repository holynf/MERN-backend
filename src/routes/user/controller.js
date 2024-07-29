const controller = require("./../controller");
const _ = require("lodash");


module.exports = new (class extends controller {

    async information(req, res) {
        this.response({res, data: _.pick(req.user, ["name", "email","isadmin"])});
    }

})();