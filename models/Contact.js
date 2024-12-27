import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  date_of_birth: { type: Date, required: true },
  designation: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
