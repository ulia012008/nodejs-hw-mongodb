import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import initMongoConnection from '../db/initMongoConnection.js';
import Contact from '../models/contact.js';

const __dirname = path.resolve();

async function importContacts() {
  await initMongoConnection();

  const filePath = path.join(__dirname, 'src/models/contacts.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  const contacts = JSON.parse(data);

  try {
    await Contact.insertMany(contacts);
    console.log(`✅ Імпортовано ${contacts.length} контактів`);
  } catch (error) {
    console.error('❌ Помилка імпорту:', error);
  } finally {
    mongoose.connection.close();
  }
}

importContacts();
