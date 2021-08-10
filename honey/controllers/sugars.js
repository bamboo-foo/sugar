const Sugar = require('../models/sugar');

module.exports = {
    index,
    new: newSugar,
    create,
}
// else the validator should say please enter in mmol/L or offer up a conversion if reading is out of bounds

async function create(req, res) {
    
    let valSugarData = validateSugarData(req.body);
     
    try{
        const newRecord = await new Sugar(valSugarData);
        newRecord.save( function(err) {
            if (err) return res.redirect('/sugars');
            console.log('Hi from create in sugarCtrl, success: ', newRecord);
            return res.redirect('/sugars');
        })
    } catch(err) {
        console.log('Hi from create in sugarCtrl, there was an error: ', err);
    }

}

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
            title: 'Sugar Records Analysis',
            sugars,
        });
    } catch(err) {
        console.log(err);
        res.redirect('/index');
    }
}


function validateSugarData(inputData) {
    let dataToBeValidated = inputData;
    
    
    dataToBeValidated.reading = parseFloat(inputData.reading);
    if (dataToBeValidated.reading > 25) {
        // TODO: [HON-18] this needs to be fixed, min max needs to be added
        console.log('Hi from sugarValidationService in sugarCtrl: We have failed with your input being high need unit prompt or conversion');
    } else {

        validatedData = dataToBeValidated;
    
        return validatedData;
        
    }

}