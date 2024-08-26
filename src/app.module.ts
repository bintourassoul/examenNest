import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bd-budget',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TransactionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
