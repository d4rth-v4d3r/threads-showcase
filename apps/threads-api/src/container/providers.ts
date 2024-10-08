import { ArticleRepository } from '@threads/core';
import { Config, ConfigSchema } from '../config/env';
import { dynamoAdapter } from '../dynamo/dynamo-adapter';
import { articleJsonAdapter } from '../json/article-json-adapter';

export type Providers = {
  articleRepository: ArticleRepository;
};

export function getProviders(): Providers {
  if (
    Config.ADAPTER === ConfigSchema.shape.ADAPTER.enum['aws-dynamodb']
  ) {
    return { articleRepository: dynamoAdapter() };
  }

  return { articleRepository: articleJsonAdapter() };
}
