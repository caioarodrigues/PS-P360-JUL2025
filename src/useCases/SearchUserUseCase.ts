import type { IUser } from "@/domain/entities/IUser";

export class SearchUserUseCase {
  static execute(query: string, users: IUser[]): IUser[] | null {
    if (!query) {
      return null;
    }

    const lowerCaseQuery = query.toLowerCase();

    return users.filter(user => 
      user.name.toLowerCase().includes(lowerCaseQuery) ||
      user.lastName.toLowerCase().includes(lowerCaseQuery)
    );
  }
}
