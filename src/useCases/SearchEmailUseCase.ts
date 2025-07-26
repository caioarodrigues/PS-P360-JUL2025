import type { IUser } from "@/domain/entities/IUser";

export class SearchEmailUseCase {
  static execute(query: string, users: IUser[]): string[] | null {
    if (!query) {
      return null;
    }

    const lowerCaseQuery = query.toLowerCase();

    const usersFound = users.filter(user => user.email.toLowerCase().includes(lowerCaseQuery))
    const emails = usersFound.map(user => user.email);

    return emails.length > 0 ? emails : null;
  }
}