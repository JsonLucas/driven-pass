import { 
    countCredentialsByNameAndUserId, 
    countCredentialsByUrl, 
    insertCredential,
    getCredentialsById,
    getCredentialsByUserId
} from "../repositories/credentialsRepository";

const credentialsService = { 
    countCredentialsByNameAndUserId, 
    countCredentialsByUrl, 
    insertCredential,
    getCredentialsById,
    getCredentialsByUserId
};
export default credentialsService;