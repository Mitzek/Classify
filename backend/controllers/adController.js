const Advert = require("../models/adModel")

module.exports.createAd = async (req, res, next) => { 
    
try {
    const { _id, productTitle,  productDescription, productPrice, sellerContact, name, productCity, imgLink } = req.body;
    const userId = _id;
    const sellerName = name;

    const advert = Advert.create(
        {userId, productTitle,  productDescription, productPrice, sellerContact, sellerName, productCity, imgLink}
    )
        
    res.json({status: true, advert})

} catch (error) {
    next(error)
}

}

module.exports.displayAd = async (req, res, next) => {
    
    try {
        const ads = await Advert.find()
        return res.json({status: true, ads });
    } catch (error) {
        next(error)
    }
}