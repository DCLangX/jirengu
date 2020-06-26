import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [PostsModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
