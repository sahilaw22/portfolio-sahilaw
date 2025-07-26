// Global variable to store contacts in serverless environment
// In production, this should be a proper database
declare global {
  var __PORTFOLIO_CONTACTS__: any[]
}

if (!global.__PORTFOLIO_CONTACTS__) {
  global.__PORTFOLIO_CONTACTS__ = []
}

export async function addContact(contact: { name: string; email: string; message: string }) {
  // For now, use in-memory storage
  // In production, replace this with database calls using process.env.DATABASE_URL
  const newContact = {
    id: Date.now().toString(),
    ...contact,
    createdAt: new Date()
  }
  global.__PORTFOLIO_CONTACTS__.push(newContact)
  return newContact
}

export async function getContacts() {
  // For now, use in-memory storage
  // In production, replace this with database calls using process.env.DATABASE_URL
  return global.__PORTFOLIO_CONTACTS__.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export async function deleteContact(id: string) {
  // For now, use in-memory storage
  // In production, replace this with database calls using process.env.DATABASE_URL
  const index = global.__PORTFOLIO_CONTACTS__.findIndex(contact => contact.id === id)
  if (index !== -1) {
    global.__PORTFOLIO_CONTACTS__.splice(index, 1)
    return true
  }
  return false
}