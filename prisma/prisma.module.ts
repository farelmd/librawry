import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Ekspor PrismaService untuk digunakan di modul lain
})
export class PrismaModule {}
