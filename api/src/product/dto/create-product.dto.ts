import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  cat_prefix: string;

  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  quantity: number;
}
