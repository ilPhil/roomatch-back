const mongoose = require('mongoose');
// https://mongoosejs.com/docs/schematypes.html
// https://stackabuse.com/mongoose-with-nodejs-object-data-modeling/

const userSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  // password: { type: String, required: true }, //https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/
  gender: { type: String, required: true, enum: ["F", "M"] },
  age: { type: Number, required: true },
  iam: {
    lgbtq: Number,
    multicultural: Number,
    pet_owner: Number,
    veg: Number,
    party_lover: Number,
    smooker: Number,
  },
  ilike: [mongoose.Schema.Types.ObjectId],
  wholikesme: [mongoose.Schema.Types.ObjectId],
  address: { type: String },
  photo: { type: String, required: true },
  roomId: { type: String , default: "" }
});


module.exports = mongoose.model('User', userSchema);