import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import * as mongoose from "mongoose";
import { ValidationPipe } from "@nestjs/common";
async function bootstrap() {
  mongoose.connect("mongodb://localhost/nest-blog-api", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  const options = new DocumentBuilder()
    .setTitle("Nestjs博客api")
    .setDescription("nest项目")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api-docs", app, document);
  await app.listen(3000);
}
bootstrap();
