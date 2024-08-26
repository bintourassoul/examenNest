//import { Module } from '@nestjs/common';
//import { TransactionsController } from './transactions.controller';
//import { TransactionsService } from './transactions.service';

//@Module({
 // controllers: [TransactionsController],
  //providers: [TransactionsService]
//})
//export class TransactionsModule {}
import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}

