import { Scrypt } from "lucia";

const scrypt = new Scrypt();

export const hashPassword = async (password: string) => {
  const hash = await scrypt.hash(password);
  return hash;
};

export const comparePassword = async (password: string, hash: string) => {
  const result = await scrypt.verify(password, hash);
  return result;
};

export const testScrypt = async (password: string) => {
    const scrypt = new Scrypt();
    const hash = await scrypt.hash(password);
    const result = await scrypt.verify(password, hash);
    console.log(result); // Should log true
  };