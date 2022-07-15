import bcrypt from 'bcrypt';

export const encryptPassword = (password: string) => {
    return bcrypt.hashSync(password, 10);
}

export const decryptPassword = (password: string, hashPassword: string) => {
    const comparation = bcrypt.compareSync(password, hashPassword);
    return comparation;
}