import * as contactsService from '../services/contacts.js';

export async function fetchAllContacts(req, res) {
  const data = await contactsService.getAllContacts();
  res
    .status(200)
    .json({ status: 200, message: 'Successfully found contacts!', data });
}

export async function fetchContactById(req, res) {
  const { contactId } = req.params;
  const contact = await contactsService.getContactById(contactId);

  if (contact) {
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
}
