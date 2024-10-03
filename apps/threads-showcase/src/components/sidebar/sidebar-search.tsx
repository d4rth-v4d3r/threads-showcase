import { ReactComponent as LensIcon } from '../icon/lens.svg';

export function SidebarSearch() {
  return (
    <div className="w-full px-4 py-2">
      <span className="icon-layout rounded-lg bg-background-secondary p-2 text-content-tertiary">
        <LensIcon />
        <input
          placeholder="Search articles or rem"
          className="w-full bg-transparent focus:outline-none"
        />
      </span>
    </div>
  );
}
