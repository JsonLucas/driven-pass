import bcrypt from 'bcrypt';
import cryptr from 'crypto';

export const encryptPassword = (password: string) => {
    return bcrypt.hashSync(password, 10);
}

export const decryptPassword = (password: string, hashPassword: string) => {
    const comparation = bcrypt.compareSync(password, hashPassword);
    return comparation;
}

export const encryptPasswordCredentials = (password: string) => {}