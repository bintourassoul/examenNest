
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transactions.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() createTransactionDto: Partial<Transaction>) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: Partial<Transaction>) {
    return this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.transactionsService.remove(+id);
    return { message: 'Transaction deleted successfully' };
  }

  @Get('summary')
  getSummary() {
    return this.transactionsService.getSummary();
  }
}

