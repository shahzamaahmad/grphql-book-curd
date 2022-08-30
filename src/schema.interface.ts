
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface BookSchema {
    ID: number;
    author?: Nullable<string>;
    name: string;
    price: number;
}

export interface IQuery {
    addBook(): BookSchema | Promise<BookSchema>;
}

type Nullable<T> = T | null;
