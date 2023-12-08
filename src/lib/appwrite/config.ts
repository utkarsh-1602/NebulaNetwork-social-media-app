// inside config.ts, I will be able to import all the appwrite functionalities
import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL
}

export const client = new Client()

// configuration of client
client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)
