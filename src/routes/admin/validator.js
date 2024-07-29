const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class{
    validator(){
        return [
            check('title')
                .isString()
                .withMessage('title is invalid'),
            check('body')
                .isString()
                .not()
                .isEmpty()
                .withMessage('body cant be empty'),
            check('slug')
                .isString()
                .not()
                .isEmpty()
                .withMessage('slug cant be empty'),
            check("body_title")
                .isString()
                .not()
                .isEmpty()
                .withMessage("body title cant be empty"),
        ]
    }
}