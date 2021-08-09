const Sugar = require('../models/sugar');

module.exports = {
    index,
    new: newSugar,
}
// else the validator should say please enter in mmol/L or offer up a conversion if reading is out of bounds

function newSugar(req, res) {
    // let newRecord = await Sugar.
    res.render('sugars/new', 
        { 
            title: 'Add a Sugar Reading',
        }
    );
}

async function index(req, res) {
    try{
        let sugars = await Sugar.find({});
        res.render('sugars/index', {
            title: 'Sugar Records Analysis3',
            sugars,
        });
    } catch(err) {
        console.log(err);
        res.redirect('/index');
    }
}