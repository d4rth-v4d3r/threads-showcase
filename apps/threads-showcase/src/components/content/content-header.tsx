import { Article } from '@threads/core';
import Image from 'next/image';
import { Avatar } from '../core/avatar';
import { ArrowLeftIcon } from '../icon';

export type ContentHeaderProps = {
  article: Article;
};

export function ContentHeader({ article }: ContentHeaderProps) {
  return (
    <>
      <section className="text-content-secondary font-semibold">
        <button className="icon-layout px-11 py-5">
          <ArrowLeftIcon />
          {article.title}
        </button>
        <div className="relative h-[50px] w-full sm:h-[100px] md:h-[216px]">
          <Image
            src={article.thumbnail}
            fill
            alt={article.title}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </section>
      <hr className="bg-banner-secondary h-2 w-full border-0" />
      <section className="stack-layout bg-banner-primary text-content-inverse-primary gap-2 px-2 py-5 md:px-3 lg:px-24">
        <h1 className="text-[32px] font-bold">{article.title}</h1>
        <div className="cluster-layout--between">
          <div className="icon-layout">
            <Avatar
              src="/images/author.jpeg"
              alt="article author"
              size={28}
            />
            <div className="md:icon-layout hidden">
              <span>{article.authors.length} Contributor</span>
              <span>•</span>
              <span>
                {article.authors.reduce(
                  (total, author) => author.flashcards + total,
                  0,
                )}{' '}
                Flashcards
              </span>
              <span>•</span>
              <span>
                {article.authors.reduce(
                  (total, author) => author.subscribers + total,
                  0,
                )}{' '}
                Subscribers
              </span>
            </div>
          </div>
          <div className="cluster-layout--end [&_button]:bg-background-body [&_button]:text-content-primary gap-2 [&_button]:rounded-lg [&_button]:py-[10px]">
            <button className="px-3">•••</button>
            <button className="px-2 lg:px-6">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}
