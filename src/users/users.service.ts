import { Injectable } from "@nestjs/common";
import { User } from "./models/user.model";
import { CreateUserInput } from "./dto/input/create-user.input";
import { v4 as uuidv4 } from "uuid";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { GetUserArgs } from "./dto/args/get-user.args";
import { DeleteUserInput } from "./dto/input/delete-user.input";
@Injectable()
export class UsersService {
  private users: User[] = [];

  getUser(getUserArgs: GetUserArgs) {
    return this.users.find((item) => item.id === getUserArgs.id);
  }

  getUsers(getUsersArgs: GetUsersArgs): User[] {
    const result = getUsersArgs.ids.map((userId) => {
      const user = this.getUser({ id: userId });
      return user;
    });

    return result;
  }

  createUser(createUserInput: CreateUserInput): User {
    const user = { ...createUserInput, id: uuidv4() };
    this.users.push(user);

    return user;
  }

  updateUser(updateUserInput: UpdateUserInput): User {
    const user = this.users.find((item) => item.id === updateUserInput.id);

    if (user) {
      Object.assign(user, updateUserInput);
    }

    return user;
  }

  deleteUser(deleteUserInput: DeleteUserInput) {
    const userIndex = this.users.findIndex(
      (user) => user.id === deleteUserInput.id
    );

    const user = this.users[userIndex];

    this.users.splice(userIndex);

    return user;
  }
}
