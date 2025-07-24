import type { IUser } from "@/domain/entities/IUser";

export class User {
  public id: number;
  public name: string;
  public lastName: string;
  public email: string;
  public avatarLink: string;

  constructor({ id, name, lastName, email, avatarLink }: IUser) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.avatarLink = avatarLink;
  }
}