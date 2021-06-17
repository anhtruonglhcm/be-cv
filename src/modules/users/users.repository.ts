import { AbstractPaginationRepository } from "src/common/repositories";
import { EntityRepository } from "typeorm";
import { User } from "./entities";

@EntityRepository(User)
export class UsersRepository extends AbstractPaginationRepository<User> {}
