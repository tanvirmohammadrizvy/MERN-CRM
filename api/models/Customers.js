const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      mobile: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
},
    { timestamps:true }
);

module.exports = mongoose.model("customers", PostSchema);