const mongoose = require("mongoose");
module.exports = mongoose.connect(
  "mongodb+srv://root:admin@cluster0.zkcbtdo.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
