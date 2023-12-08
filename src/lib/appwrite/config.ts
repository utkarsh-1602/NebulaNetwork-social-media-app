// inside config.ts, I will be able to import all the appwrite functionalities
import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,


}