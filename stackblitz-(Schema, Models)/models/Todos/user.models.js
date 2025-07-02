import mongoose from 'mongoose'
// mongoose help to define schemas

const userSchema = new mongoose.Schema(
  {
    //mention the fields in this
    // username : String,
    // email : String,
    // isActive : Boolean ... normally used in the projects. Lets learn new way of big projects.

      username : {
        //with this approach we can define multiple things. its kind of superPowers of mongoose.
        type: String,
        required : true,
        unique : true,
        // to many like this are present and can be learn from documentary.
        //can more by the validation doc's.
      },
      email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
      },
      password : {
        type : String,
        required : [true, "password is required"]
        //here the required can also continue with array and can use to send an message to an user [validation, "message"]
      }      
  },
  {
    timestamps: true
    //for timestamping the user creatation and updation.
  }
)
//schema is an method which takes objects.

//now need to export it because if will not do that the it will not make the schema.
//then in below a model is made with name of User form userschema. model(what model?, on which bases?)
//model(user to make model)method.
export const User = mongoose.model("User", userSchema)