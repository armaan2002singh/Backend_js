# here we are only doing the practice of data modelling.

1. install mongoose
2. then declaration of schema.
3. not export to make it. (mongoDB)
4. Basic syntex of schema will be like below given code.

```
import mongoose from 'mongoose'
// mongoose help to define schemas

const sub_todoSchema = new mongoose.Schema({})
//schema is an method which takes objects.

//now need to export it because if will not do that the it will not make the schema.
//then in below a model is made with name of User form userschema. model(what model?, on which bases?)
//model(user to make model)method.

export const SubTodo = mongoose.model("SubTodo", sub_todoSchema)
```

5. Mongoose.schema - used to make schema.
6. Mongoose.model - used to make model.
7. we export the schema i an instance to access the same schema in other file by importing this files.
8. When this name give in "User" access by the mongoDb then i changed in to - users as per the standard structure.(change model into plural and converted into lower cases.)
9. defining the fields in the schema.

```
const sub_todoSchema = new mongoose.Schema(
  {
    //mention the fields in this
    // username : String,
    // email : String,
    // isActive : Boolean ... normally used in the projects. Lets learn new way of big projects.

    username : {
      //with this approach we can define multiple things. its kind of superPowers of mongoose.
      type: String,
      required : true,
      unique : true
    }
  }
  )
```

10. I can also add the timestep with help of mongoose.

- can learns more and more things from documentary.
- with createdAt and updatedAt.
- When the whole schema will be declared then we will pass a secondary object after schema.

```
const userSchema = new mongoose.schema(
    {... SCHEMA
    },
    {
        timestamps: true
    }
 )

```
