const Sugar = require('../models/sugar');

module.exports = {
    index,
}
// else the validator should say please enter in mmol/L or offer up a conversion if reading is out of bounds

async function index(req, res) {
    try{
        let sugars = await Sugar.find({});
        res.render('sugars/index', {
            title: 'Sugar Records Analysis',
            sugars,
        });
    } catch(err) {
        console.log(err);
        res.redirect('/index');
    }
}