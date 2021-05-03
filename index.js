const mongoose = require('mongoose');
const user=require("./models/user")

mongoose.connect('mongodb+srv://chili:lischirag@chilicluster.kios7.mongodb.net/dummy?retryWrites=true&w=majority&ssl=true',
                    {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once("open",function()
{
    console.log("Database Connection made");
}).on("error",function(err)
{
    console.log("ERROR :",err);
});

const u= new user({
    user_name: 'chili',
    full_name: 'ECP'
})
u.save();