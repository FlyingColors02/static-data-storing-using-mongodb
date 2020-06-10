
    let mongoose = require("mongoose");

    mongoose.connect("mongodb://localhost/staticDataStoring",{ useNewUrlParser: true,useUnifiedTopology: true })
            .then(()=>console.log("database got connected"))
            .catch(error=>console.log("Something went wrong!!",error.message));
    
    let bookSchema = new mongoose.Schema({
        name : {type: String},
        author : {type : String},
        type : [String],
        isPublished : {type : Boolean},
        copies : {type : Number},
        date : {type : Date,default :Date.now() }
    });  
    
    let bookModel = mongoose.model("booksCollection",bookSchema);
    
    async function bookCollData()
    {
        let data = new bookModel({
            name : "Vampire Academy: bloodlines",
            author : "Richelle Mead",
            type : ["romantic","fantasy","vampire"],
            isPublished : true,
            copies : 3469867526 ,
        });
        let item = await data.save();
        console.log(item);
    };
 bookCollData(); 
