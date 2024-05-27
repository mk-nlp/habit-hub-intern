import { scrypt } from "crypto";

export const testScrypt = async (password: string) => {
    return new Promise((resolve, reject) => {
        scrypt(password, "salt", 64, (err, key) => {
            if (err) {
                reject(err);
            } else {
                resolve(key.toString("hex"));
            }
        });
    });
}

export const hashPassword = async (password: string) => {
    return new Promise((resolve, reject) => {
        scrypt(password, "salt", 64, (err, key) => {
            if (err) {
                reject(err);
            } else {
                resolve(key.toString("hex"));
            }
        });
    });
}

export const verifyPassword = async (hash: string, password: string) => {
    return new Promise((resolve, reject) => {
        scrypt(password, "salt", 64, (err, key) => {
            if (err) {
                reject(err);
            } else {
                resolve(key.toString("hex") === hash);
            }
        });
    });
}

