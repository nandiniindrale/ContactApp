const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    birth: {
      type: Date,
    },
  },
  { timestamps: true, collection: "contact" }
);

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;