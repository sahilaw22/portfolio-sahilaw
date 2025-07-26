import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { contacts } from '../shared/schema.js'

// This file can be used to set up database connections for production
// when using a real PostgreSQL database like Neon

export function createDatabaseConnection() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required for database connection')
  }

  const sql = neon(process.env.DATABASE_URL)
  return drizzle(sql, { schema: { contacts } })
}

// Helper functions for database operations
export async function addContactToDb(db: any, contact: { name: string; email: string; message: string }) {
  const [newContact] = await db.insert(contacts).values(contact).returning()
  return newContact
}

export async function getContactsFromDb(db: any) {
  return await db.select().from(contacts).orderBy(contacts.createdAt)
}

export async function deleteContactFromDb(db: any, id: number) {
  const result = await db.delete(contacts).where(contacts.id.eq(id))
  return result.rowCount > 0
}