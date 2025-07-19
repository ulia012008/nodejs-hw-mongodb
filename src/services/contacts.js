import { Contact } from '../models/contact.js';

export const getAllContacts = async () => Contact.find();
export const getContactById = async (id) => Contact.findById(id);
