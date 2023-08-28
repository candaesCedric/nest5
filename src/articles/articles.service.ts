import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity/article.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articlesRepository: Repository<Article>,
  ) {}
  async getArticleById(id: number): Promise<Article[]> {
    return await this.articlesRepository.find({
      select: ['author', 'content', 'creationDate', 'title'],
      where: [{ id: id }],
    });
  }
  async getAllArticles(): Promise<Article[]> {
    return await this.articlesRepository.find();
  }
  async saveArticle(article: Article): Promise<Article> {
    return await this.articlesRepository.save(article);
  }
  deleteArticle(article: Article): void {
    this.articlesRepository.delete(article);
  }
}
