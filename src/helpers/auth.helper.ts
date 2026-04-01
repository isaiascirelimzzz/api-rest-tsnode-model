import bcrypt from 'bcrypt';

export async function hasher(word: string): Promise<string>{
    return await bcrypt.hash(word, 12)
}

export async function hashCompare(itsPassword:string, OurPassword:string):Promise<boolean>{
    return await bcrypt.compare(itsPassword, OurPassword);
}