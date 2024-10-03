import Image from 'next/image';
import { UnfoldIcon, UnionIcon } from '../icon';

export function SidebarUserMenu() {
  return (
    <div>
      <div className="cluster-layout--between px-4 py-2">
        <span className="icon-layout font-semibold">
          <Image
            src="/images/avatar.jpeg"
            alt="avatar icon"
            width={24}
            height={24}
            className="inline h-[24px] rounded-full"
          />
          Callie Spurlock
          <UnfoldIcon />
        </span>
        <button type="button">
          <UnionIcon />
        </button>
      </div>
    </div>
  );
}
