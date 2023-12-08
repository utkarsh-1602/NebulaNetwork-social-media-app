import { ID } from "appwrite";
import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        );

        if (!newAccount) throw Error;

        // gets the avatar url 
        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            email: newAccount.email,
            name: newAccount.name,
            imageUrl: avatarUrl,
            username: user.username
        })



        return newUser;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Saves the User to database 
export async function saveUserToDB(user: {
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL;
    username?: string;

}) {
    // We will save a user (document) to appwrite database
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        )

        return newUser;

    } catch (error) {
        console.log("Error: ", error)
    }
}

export async function signInAccount(user: { email: string; password: string; }) {
    try {

        /**
         Create email session
         
         Allow the user to login into their account by providing a valid email and
         password combination. This route will create a new session for the user.
         
         A user is limited to 10 active sessions at a time by default.
         **/

        const session = await account.createEmailSession(user.email, user.password);
        return session;
    } catch (error) {
        console.log("Error: ", error)
    }
}