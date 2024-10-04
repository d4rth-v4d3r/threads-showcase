import { Media } from '@threads/core';
import Image from 'next/image';

export type CommentImageProps = Media;

export function CommentImage({ src, alt }: CommentImageProps) {
  return (
    <div className="relative h-[100px] shrink-0 grow-0 rounded-xl border border-grey-10 md:basis-1/5 [&_>_:first-child]:rounded-t-xl [&_>_:last-child]:rounded-b-xl">
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
