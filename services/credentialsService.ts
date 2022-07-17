import { 
    countCredentialsByNameAndUserId, 
    countCredentialsByUrl, 
    insertCredential,
    getCredentialsById,
    getCredentialsByUserId,
    deleteCredential
} from "../repositories/credentialsRepository";

const credentialsService = { 
    countCredentialsByNameAndUserId, 
    countCredentialsByUrl, 
    insertCredential,
    getCredentialsById,
    getCredentialsByUserId,
    deleteCredential
};
export default credentialsService;