import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { BookEntity } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';


@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [BookService, BookResolver],
})
export class BookModule { }
