
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddArgs {
    author: string;
    name: string;
    price: number;
}

export interface UpdateArgs {
    ID: number;
    author: string;
    name: string;
    price: number;
}

export interface BookSchema {
    ID: number;
    author?: Nullable<string>;
    name: string;
    price: number;
}

export interface IMutation {
    addBook(addArgs: AddArgs): BookSchema | Promise<BookSchema>;
    deleteBook(bookid: number): string | Promise<string>;
    updateBook(updateArgs: UpdateArgs): BookSchema | Promise<BookSchema>;
}

export interface IQuery {
    findAllBook(): BookSchema[] | Promise<BookSchema[]>;
    findBookById(bookid: number): BookSchema | Promise<BookSchema>;
}

type Nullable<T> = T | null;
