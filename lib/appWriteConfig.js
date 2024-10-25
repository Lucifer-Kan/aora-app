import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
export const appRightConfig = {
    apiUrl: 'https://cloud.appwrite.io/v1',
    projectId: '66c25d170019005b5c10',
    platform: 'com.anonymous.aora-app',
    databaseId: '66c2623500252bf5f322',
    usersCollectionId: '66c2625000312f3ecaf6',
    videosCollectionId: '66c262db0037f595d7f1',
    bucketId: '66c26556000a84aca959',


}
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appRightConfig.apiUrl) // Your Appwrite Endpoint
    .setProject(appRightConfig.projectId) // Your project ID
    .setPlatform(appRightConfig.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const avatar = new Avatars(client);
const databse = new Databases(client);

export const createUser = async (userName, email, password) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, userName);
        if (!newAccount) throw Error;

        const avatarUrl = avatar.getInitials(userName);

        const newUser = await databse.createDocument(appRightConfig.databaseId, appRightConfig.usersCollectionId, ID.unique(), {
            username: userName,
            email: email,
            password: password,
            avatar: avatarUrl,
            accountId: newAccount.$id,
        });

        signIn(newAccount);
        return newUser;

    } catch (e) {
        console.log(e);

        throw new Error(error.message)
    }

}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;

    } catch (error) {
        throw new Error(error.message)
    }


}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;

        const user = await databse.listDocuments(appRightConfig.databaseId, appRightConfig.usersCollectionId, [Query.equal('accountId', currentAccount.$id)]);

        if (!user) throw Error;

        return user.documents[0];

    }
    catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
}
