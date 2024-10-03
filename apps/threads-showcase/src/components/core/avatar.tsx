import clsx from 'clsx';
import Image from 'next/image';

export type AvatarProps = Omit<
  React.ComponentProps<typeof Image>,
  'width' | 'height'
> & {
  size: number;
};

export function Avatar({
  src,
  alt,
  size,
  style,
  className,
  ...props
}: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={clsx('inline', 'rounded-full', className)}
      style={{
        ...style,
        height: size,
        objectFit: 'cover',
      }}
      {...props}
    />
  );
}
