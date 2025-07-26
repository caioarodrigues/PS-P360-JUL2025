import type { UserGetDTO } from "@/dtos/user/UserGetDTO";
import { Avatar, Card } from "@chakra-ui/react";

const UserDetailedCard = ({
  avatarLink,
  email,
  id,
  lastName,
  name,
}: UserGetDTO) => {
  return (
    <Card.Root key={id} bg="white" borderRadius="md" boxShadow="md">
      <Card.Header>
        <Avatar.Root boxSize="8rem" shape="rounded">
          <Avatar.Image src={avatarLink} />
          <Avatar.Fallback name={name} />
        </Avatar.Root>
      </Card.Header>

      <Card.Body>
        <Card.Title>
          {name} {lastName}
        </Card.Title>

        <Card.Description>{email}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default UserDetailedCard;
