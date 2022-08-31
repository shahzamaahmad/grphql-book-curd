import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BookSchema } from './schema/book.schema';
import { BookService } from './book.service';
import { AddArgs } from "./args/addBook.args";
import { UpdateArgs } from "./args/updateBook.args";
@Resolver(of => BookSchema)
export class BookResolver {
  constructor(private readonly bookService: BookService) { }

  @Mutation((returns) => BookSchema)
  addBook(@Args('addArgs') addArgs: AddArgs) {

    return this.bookService.addBook(addArgs)
  }
  @Mutation(returns => BookSchema)
  updateBook(@Args('updateArgs') updateArgs: UpdateArgs) {
    return this.bookService.updateBook(updateArgs)
  }
  @Mutation(returns => String)
  deleteBook(@Args({ name: 'bookid', type: () => Int }) id: number) {
    return this.bookService.deleteBook(id)
  }
  @Query(returns => [BookSchema])
  findAllBook() {
    return this.bookService.findAllBook()
  }
  @Query(returns => BookSchema)
  findBookById(@Args({ name: 'bookid', type: () => Int }) id: number) {
    return this.bookService.findBookById(id)
  }
}