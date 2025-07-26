// In-memory storage for development
// In production, this will be replaced with database calls

interface Contact {
  id: string
  name: string
  email: string
  message: string
  createdAt: Date
}

class MemoryStorage {
  private contacts: Contact[] = []

  async addContact(contact: Omit<Contact, 'id' | 'createdAt'>): Promise<Contact> {
    const newContact: Contact = {
      id: Date.now().toString(),
      ...contact,
      createdAt: new Date()
    }
    this.contacts.push(newContact)
    return newContact
  }

  async getContacts(): Promise<Contact[]> {
    return this.contacts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }

  async deleteContact(id: string): Promise<boolean> {
    const index = this.contacts.findIndex(contact => contact.id === id)
    if (index !== -1) {
      this.contacts.splice(index, 1)
      return true
    }
    return false
  }
}

export const storage = new MemoryStorage()