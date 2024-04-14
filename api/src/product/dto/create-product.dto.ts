import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  price: number;
}

// id Int @id @default(autoincrement())
//   title String @unique
//   price Decimal @db.Decimal(10,2)
//   description String
//   img String
//   rate Int
//   count Int
//   quantity Int
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   userId Int
//   user User @relation(fields: [userId], references: [id])
//   categoryId Int
//   category Category @relation(fields: [categoryId], references: [id])
