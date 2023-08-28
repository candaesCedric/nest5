import { Module } from '@nestjs/common';
import { Article } from './article.entity/article.entity';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
