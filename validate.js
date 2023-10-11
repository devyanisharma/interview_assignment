module.exports = {
    validate : function(req, res, next) {
        let { fname, lname, email } = req.body
        console.log(req.body)
        if(fname.length >3 && lname.length>=3 && email.includes('.') && email.includes('@')){
        
            next();
        }else{
            res.status(400).send({"message":"invalid input"})
        }

    }
}