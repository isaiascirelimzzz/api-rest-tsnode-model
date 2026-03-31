import bcrypt from 'bcrypt';

export async function hasher(passward: string): Promise<string>{
    return await bcrypt.hash(passward, 12)
}

export async function hashCompare(password:string, hashedPassword:string):Promise<boolean>{
    return await bcrypt.compare(password, hashedPassword);
}
