import { Avatar, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type { ListUserDTO } from "@/dtos/user/ListUserDTO";

interface UserSearchResultProps extends ListUserDTO {
  lastName: string;
  clearSearchHandler: VoidFunction;
}

const UserSearchResult = ({
  avatarLink,
  id,
  name,
  lastName,
  clearSearchHandler,
}: UserSearchResultProps) => {
  return (
    <Link
      to={`/about-user?id=${id}`}
      key={id}
      onClick={clearSearchHandler}
      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
    >
      <Avatar.Root boxSize={{ base: "2.5rem", md: "3rem" }} shape="full">
        <Avatar.Image src={avatarLink} />
        <Avatar.Fallback name={name} />
      </Avatar.Root>
      <Text key={id}>
        {name} {lastName}
      </Text>
    </Link>
  );
};

export default UserSearchResult;
