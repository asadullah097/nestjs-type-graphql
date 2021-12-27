
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Photo {
    id?: Nullable<number>;
    name?: Nullable<string>;
    userId?: Nullable<number>;
}

export class PhotoInput {
    name?: Nullable<string>;
    userId?: Nullable<number>;
}

export abstract class IQuery {
    abstract getAllPhoto(): Nullable<Nullable<Photo>[]> | Promise<Nullable<Nullable<Photo>[]>>;

    abstract getPhoto(id?: Nullable<number>): Nullable<Photo> | Promise<Nullable<Photo>>;

    abstract getAllUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract getUser(id?: Nullable<number>): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createPhoto(PhotoInput?: Nullable<string>): Nullable<Photo> | Promise<Nullable<Photo>>;

    abstract createUser(firstName?: Nullable<string>, lastName?: Nullable<string>, isActive?: Nullable<boolean>): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    isActive?: Nullable<boolean>;
}

export class UserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    isActive?: Nullable<boolean>;
}

type Nullable<T> = T | null;
