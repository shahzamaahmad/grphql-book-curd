// /* eslint-disable prettier/prettier */
// import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
// import { BookService } from './book.service';
// import { CreateBookInput } from './dto/create-book.input';
// import { UpdateBookInput } from './dto/update-book.input';
// import { BookEntity } from './entities/book.entity';



// @Resolver(() => BookEntity)
// export class BookResolver {
//   constructor(private readonly bookService: BookService) { }

//   @Mutation(() => BookEntity)
//   createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
//     console.log("createBookInput");

//     return this.bookService.addBook(createBookInput);
//   }

//   @Query(() => [BookEntity])
//   findAll() {
//     return this.bookService.getAllBook();
//   }

//   @Query(() => BookEntity, { nullable: true })
//   findOne(@Args('id', { type: () => Int }) id: number) {
//     return this.bookService.getBook(id);
//   }

//   @Mutation(() => BookEntity)
//   updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
//     return this.bookService.updateBook(updateBookInput.id, updateBookInput);
//   }

//   @Mutation(() => BookEntity)
//   removeBook(@Args('id', { type: () => Int }) id: number) {
//     return this.bookService.removeBook(id);
//   }
// }






// import { BookEntity } from './entities/book.entity'
// import { Query, Resolver } from "@nestjs/graphql";
// import { AddArgs } from './args/addBook.args';
// @Resolver((of) => BookEntity)

// export class BookResolver {

//   @Query(returns => String)
//   addBook(): {

//   }
// }

import { Query, Resolver } from "@nestjs/graphql";
import { BookSchema } from './schema/book.schema';
import { BookService } from './book.service';
@Resolver(of => BookSchema)
export class BookResolver {
  constructor(private readonly bookService: BookService) { }

  @Query(() => BookSchema)
  addBook(AddArgs) {
    return this.bookService.addBook(AddArgs)


  }
}