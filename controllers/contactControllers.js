import Contact from "../models/Contact.js";

//Add a new Contact

export const addContact = async (req, res) => {
  try {
    const { user_name, phone_number, email, date_of_birth, designation } =
      req.body;
    const newContact = new Contact({
      user_name,
      phone_number,
      email,
      date_of_birth,
      designation,
    });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a contact
export const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedContact)
      return res.status(404).json({ message: "Contact not found" });
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a contact
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact)
      return res.status(404).json({ message: "Contact not found" });
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
