const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.connect('mongodb://localhost:27017/client', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('databse connected..'))
  .catch((error) => console.log(error));


  const detailSchema = new Schema({
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: String,
    conpassword:String,
  })

  const Detail = mongoose.model('Detail',detailSchema );
  module.exports = Detail;

  