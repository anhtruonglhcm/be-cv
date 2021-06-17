import {
  Get,
  Post,
  UseGuards,
  Body,
  HttpCode,
  HttpStatus,
  Query,
} from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { ApiController, Authorize } from "src/decorators";
import { CQRSController } from "src/common/controllers";
import { JwtRefreshGuard } from "src/guards";

@ApiController("auth")
export class AuthController extends CQRSController {
  //   @Post("register")
  //   @HttpCode(HttpStatus.OK)
  //   async register(@Body() command: RegisterCommand) {
  //     return this.commandBus.execute(command);
  //   }
  //   @Post("login")
  //   @HttpCode(HttpStatus.OK)
  //   @ApiOkResponse({ type: AccessTokenDto })
  //   async login(@Body() command: LoginCommand) {
  //     return this.commandBus.execute(command);
  //   }
  //   @Post("logout")
  //   @HttpCode(HttpStatus.OK)
  //   @ApiOkResponse({ type: AccessTokenDto })
  //   async logout(@Body() command: LogoutCommand) {
  //     await this.commandBus.execute(command);
  //     return HttpStatus.OK;
  //   }
  //   @Authorize()
  //   @Post("change-password")
  //   @HttpCode(HttpStatus.OK)
  //   async changePassword(@Body() command: ChangePasswordCommand) {
  //     return this.commandBus.execute(command);
  //   }
  //   @UseGuards(JwtRefreshGuard)
  //   @Get("refresh")
  //   @HttpCode(HttpStatus.OK)
  //   @ApiOkResponse({ type: AccessTokenDto })
  //   refresh(@Query() query: GetTokenQuery) {
  //     return this.queryBus.execute(query);
  //   }
  //   @Authorize()
  //   @Get("me")
  //   @HttpCode(HttpStatus.OK)
  //   @ApiOkResponse({ type: MeDto })
  //   me() {
  //     return this.queryBus.execute(new GetMeQuery());
  //   }
}
