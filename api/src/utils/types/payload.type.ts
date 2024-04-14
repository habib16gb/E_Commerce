import { ERole } from '@prisma/client';

export type TPayload = {
  sub: number;
  username: string;
  email: string;
  role: ERole;
};
