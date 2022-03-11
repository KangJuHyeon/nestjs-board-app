import { Module } from '@nestjs/common';
import { BoradsModule } from './borads/borads.module';
import { BoardsController } from './boards/boards.controller';

@Module({
  imports: [BoradsModule],
  controllers: [BoardsController],
})
export class AppModule {}
