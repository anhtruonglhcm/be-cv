import { Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import * as httpContext from "express-http-context";
import { QueryFailedFilter, EntityNotFoundFilter } from "./filters";

async function bootstrap() {
  const logger = new Logger("Main");
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.use(httpContext.middleware);

  app.useGlobalFilters(new QueryFailedFilter(), new EntityNotFoundFilter());

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.setGlobalPrefix("v1");

  const config = new DocumentBuilder()
    .setTitle("New CV")
    .setDescription("New CV")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  const configService = app.get(ConfigService);

  await app.startAllMicroservicesAsync();
  await app.listen(configService.get("port"));

  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
