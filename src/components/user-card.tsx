import { Avatar, Card, Button } from "@chakra-ui/react";
import type { ListUserDTO } from "@/dtos/user/ListUserDTO";

const UserCard = ({ avatarLink, id, name }: ListUserDTO) => {
  return (
    <Card.Root key={id} variant="elevated">
      <Card.Body>
        <Avatar.Root size="2xl" shape="full">
          <Avatar.Image src={avatarLink} />
          <Avatar.Fallback name={name} />
        </Avatar.Root>
        <Card.Title fontSize="md">{name}</Card.Title>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">About</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default UserCard;