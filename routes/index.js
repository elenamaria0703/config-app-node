const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const writeDataToYml = require('../utils/write-yml');

router.get('/', (req, res) => {
    res.render('form', {title: 'Configuration Step'});
});

router.post('/', [
    check('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    check('slogan')
      .isLength({ min: 1 })
      .withMessage('Please enter a slogan'),
    ], (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            writeDataToYml(req.body);
            res.send('You have successfully submmitted the configuration!');
        }else{
            res.render('form', {
              title: 'Configuration Step',
              errors: errors.array(),
              data: req.body,
            });
        }
        
    }
);

module.exports = router;