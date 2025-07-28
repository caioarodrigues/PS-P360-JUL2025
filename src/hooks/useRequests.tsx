import type { IUser } from "@/domain/entities/IUser";

export const useRequests = (uri: string) => {
  const listAllUsers = async (): Promise<IUser[]> => {
    const users = await fetch(uri)
      .then((res) => res.json())
      .then(({ users }) => [...users])

    return users || [];
  };

  return { listAllUsers };
};
