import Image from 'next/image';

export type CommentImageProps = Pick<
  React.ComponentProps<typeof Image>,
  'src' | 'alt'
>;

export function CommentImage({ src, alt }: CommentImageProps) {
  return (
    <div className="relative h-[100px] shrink-0 grow-0 basis-1/5 rounded-xl border border-grey-10 [&_>_:first-child]:rounded-t-xl [&_>_:last-child]:rounded-b-xl">
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
