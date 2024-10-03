import { Avatar } from '../core/avatar';
import { UnfoldIcon, UnionIcon } from '../icon';

export function SidebarUserMenu() {
  return (
    <div>
      <div className="cluster-layout--between px-4 py-2">
        <span className="icon-layout font-semibold">
          <Avatar
            src="/images/avatar.jpeg"
            alt="avatar icon"
            size={24}
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
