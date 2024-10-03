import Image from 'next/image';
import { ArrowLeftIcon } from '../icon';

export function ContentHeader() {
  return (
    <>
      <section className="font-semibold text-content-secondary">
        <button className="icon-layout px-11 py-5">
          <ArrowLeftIcon />
          Cell Biology, Genetics and Evolution
        </button>
        <div className="relative h-[216px] w-full">
          <Image
            src="/images/genetics.jpeg"
            fill
            alt="genetics article image"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </section>
      <hr className="h-2 w-full bg-banner-secondary" />
      <section className="stack-layout gap-2 bg-banner-primary px-24 py-5 text-content-inverse-primary">
        <h1 className="text-[32px] font-bold">
          Cell Biology, Genetics and Evolution
        </h1>
        <div className="cluster-layout--between">
          <div className="icon-layout">
            <Image
              src="/images/author.jpeg"
              alt="article author"
              width={28}
              height={28}
              className="inline h-[28px] rounded-full"
            />
            <span>1 Contributor</span>
            <span>•</span>
            <span>143 Flashcards</span>
            <span>•</span>
            <span>48 Subscribers</span>
          </div>
          <div className="cluster-layout--end gap-2 [&_button]:rounded-lg [&_button]:bg-background-body [&_button]:py-[10px] [&_button]:text-content-primary">
            <button className="px-3">•••</button>
            <button className="px-6">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}
