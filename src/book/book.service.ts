// import { Injectable } from '@nestjs/common';
// import { BookEntity } from './entities/book.entity';

// @Injectable()
// export class BookService {
//   public data: BookEntity[] = [];

//   addBook(book: BookEntity): any {
//     return this.data.push(book);
//   }
//   updateBook(id: number, book: BookEntity) {
//     for (let x = 0; x < this.data.length; x++) {
//       if (this.data[x].id === id) {
//         return (this.data[x] = book);
//       }
//     }
//   }

//   getAllBook() {
//     return this.data;
//   }

//   getBook(id: number) {
//     for (let x = 0; x < this.data.length; x++) {
//       if (this.data[x].id === id) {
//         return this.data[x];
//       }
//     }
//   }

//   removeBook(id: number) {
//     return (this.data = this.data.filter((book) => book.id != id));
//   }
// }
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './entities/book.entity';
import { AddArgs } from './args/addBook.args';
import { UpdateArgs } from './args/updateBook.args';

@Injectable()
export class BookService {
  constructor(@InjectRepository(BookEntity) public readonly bookRepo: Repository<BookEntity>) { }

  async findAllBook(): Promise<BookEntity[]> {
    let books = await this.bookRepo.find()
    return books;
  }
  async findBookById(id: number): Promise<BookEntity> {
    let book = await this.bookRepo.findOne({ where: { ID: id } })
    return book;
  }
  async deleteBook(id: number): Promise<string> {
    let book = await this.bookRepo.delete(id)
    return 'Book has been deleted';
  }
  async addBook(addArgs: AddArgs): Promise<BookEntity> {
    const book = new BookEntity()
    book.name = addArgs.name
    book.author = addArgs.author
    book.price = addArgs.price
    let result = await this.bookRepo.save(addArgs)
    return result;
  }
  async updateBook(updateArgs: UpdateArgs): Promise<any> {
    const bookObj = async () => {
      return await this.bookRepo.findOneBy({ ID: updateArgs.ID })
    }
    return bookObj().then((book: UpdateArgs) => {
      book.name = updateArgs.name
      book.author = updateArgs.author
      book.price = updateArgs.price
      return this.bookRepo.save(book)
    }).catch((e) => {
      console.log("Error:", e);
    })
    // const book:BookEntity = await this.bookRepo.findOneBy({ ID: updateArgs.ID })
    // book.name = updateArgs.name
    // book.author = updateArgs.author
    // book.price = updateArgs.price
    // return this.bookRepo.save(book)
  }
}
