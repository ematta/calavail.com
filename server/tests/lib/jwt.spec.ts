import { createToken, verifyToken } from '../../src/lib/jwt';
import Claims from '../../src/interfaces/Claims';

it('should create a new token and verify it', async () => {
  const user = 'foo';
  const token: string = createToken(user);
  const verify: Claims = verifyToken(token);
  expect(verify.audience).toBe(user);
});
