import {
  BadRequestException,
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { CQRSController } from "src/common/controllers";
import { ApiController, Authorize, ParamUUID } from "src/decorators";
import { Role } from "./enums";

@Authorize(Role.Admin)
@ApiController("users")
export class UsersController extends CQRSController {
  // @Post()
  // @ApiOkResponse({
  //   type: UserDto,
  // })
  // @HttpCode(HttpStatus.OK)
  // create(@Body() command: CreateUserCommand) {
  //   return this.commandBus.execute(command);
  // }
  // @Put(":id")
  // @ApiOkResponse({
  //   type: UserDto,
  // })
  // @HttpCode(HttpStatus.OK)
  // update(@ParamUUID("id") id: string, @Body() command: UpdateUserCommand) {
  //   if (id !== command.id) throw new BadRequestException();
  //   return this.commandBus.execute(command);
  // }
  // @Get()
  // @ApiOkResponse({
  //   type: GetUsersQueryRes,
  // })
  // @HttpCode(HttpStatus.OK)
  // findAll(@Query() query: GetUsersQuery) {
  //   return this.queryBus.execute(query);
  // }
  // @Get(":id")
  // @HttpCode(HttpStatus.OK)
  // @ApiOkResponse({
  //   type: UserDetailDto,
  // })
  // findOne(@ParamUUID("id") id: string) {
  //   return this.queryBus.execute(new GetUserDetailQuery(id));
  // }
  // @Delete(":id")
  // @HttpCode(HttpStatus.OK)
  // delete(@ParamUUID("id") id: string) {
  //   return this.commandBus.execute(new DeleteUserCommand(id));
  // }
  // @Patch(":id/update-status")
  // @HttpCode(HttpStatus.OK)
  // updateStatus(
  //   @ParamUUID("id") id: string,
  //   @Body() command: UpdateStatusCommand
  // ) {
  //   if (id !== command.id) throw new BadRequestException();
  //   return this.commandBus.execute(command);
  // }
}
