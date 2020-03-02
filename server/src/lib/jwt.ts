import { readFileSync } from 'fs';
import { urlBuilder } from './urlBuilder';
import jwt from 'jsonwebtoken';
import Claims from '../interfaces/Claims';

function privateKey(): Buffer {
  return readFileSync('../calavail.pem');
}

export function createToken(user: string): string {
  const claims: Claims = {
    expiresIn: '10h',
    issuer: urlBuilder(),
    audience: user,
  };
  const generatedToken: string = jwt.sign(claims, privateKey(), { algorithm: 'RS256' });
  return generatedToken;
}

export function verifyToken(token: string): Claims {
  const decoded: object = jwt.verify(token, privateKey(), { algorithms: ['RS256'] }) as object;
  return decoded as Claims;
}
