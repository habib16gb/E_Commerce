import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CategoryModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
