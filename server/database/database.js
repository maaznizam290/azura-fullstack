const mongoose = require("mongoose");
module.exports = mongoose.connect(
  "mongodb+srv://musab:musab123@cluster1.runm9lr.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
