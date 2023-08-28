import { Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}
  @Get(':id')
  Get(@Param() params) {
    return this.service.getArticleById(params.id);
  }
  @Post()
  post(@Body() body) {
    return this.service.saveArticle(body);
  }
  @Put()
  put(@Body() body) {
    return this.service.saveArticle(body);
  }
  @Delete(':id')
  delete(@Param() params) {
    this.service.deleteArticle(params.id);
    return;
  }
}
