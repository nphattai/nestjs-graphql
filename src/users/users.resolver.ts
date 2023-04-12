import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { User } from "./models/user.model";
import { UsersService } from "./users.service";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User, { nullable: true, name: "user" })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.userService.getUser(getUserArgs);
  }

  @Query(() => [User], { nullable: "items", name: "users" })
  getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.userService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  createUser(@Args("createUserInput") createUserInput: CreateUserInput): User {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(() => User, { nullable: true })
  updateUser(@Args("updateUserInput") updateUserInput: UpdateUserInput): User {
    return this.userService.updateUser(updateUserInput);
  }

  @Mutation(() => User, { nullable: true })
  deleteUser(@Args("deleteUserInput") deleteUserInput: DeleteUserInput): User {
    return this.userService.deleteUser(deleteUserInput);
  }
}
