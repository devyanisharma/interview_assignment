const { Users } = require('./schema')

module.exports = {
    getUser: async function (req, res, next) {
        let users;
        try {
            users = await Users.find({})
            console.log(users);
            if (!users) {
                res.status(404).send({ message: 'no user found' })
            } else {
                res.status(200).send({ message: "all users fetched successfully", userData: users })
            }

        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "internal server error" })
        }

    },

    postUser: async function (req, res, next) {
        try {
            const { fname, lname, email } = req.body;
            let user = new Users({
                firstname: fname, lastname: lname, email
            })
           const emailexists = Users.find({email})
            if(emailexists){
                res.status(400).json({ message: "email already exist "});
            }else{
                let newuser 
                await user.save().then((data)=>{
                    newuser = data
                    console.log(`newuser ${newuser}`)
                 res.status(201).json({ message: 'User registered successfully', "user": newuser });
    
                }).catch((error)=>{
                    console.log(error)
                    res.status(500).json({ message: 'Internal Server Error' });
    
                })
            }   
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Internal Server Error' });
        }

        

    }


}
