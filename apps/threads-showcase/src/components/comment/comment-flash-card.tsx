import { Media } from '@threads/core';
import Image from 'next/image';
import { FlashCardsIcon } from '../icon';

export type CommentFlashCardProps = Media;

export function CommentFlashCard({ src, alt }: CommentFlashCardProps) {
  return (
    <div className="shrink-0 grow-0 basis-1/5 rounded-xl border border-grey-10 [&_>_:first-child]:rounded-t-xl [&_>_:last-child]:rounded-b-xl">
      <div className="relative h-[88px] [&_>_:first-child]:rounded-t-xl">
        <Image
          src={src}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <span className="cluster-layout--center icon-layout bg-banner-primary py-1 text-xs font-normal text-content-inverse-primary [&_path]:fill-content-inverse-primary">
        <FlashCardsIcon />
        42 Flashcards
      </span>
    </div>
  );
}
