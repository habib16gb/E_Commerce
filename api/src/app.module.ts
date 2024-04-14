import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CategoryModule, ProductModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
