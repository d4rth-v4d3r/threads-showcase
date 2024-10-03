import {
  CalendarIcon,
  FlashCardsIcon,
  LaterIcon,
  NotesIcon,
  SpacesIcon,
} from '../icon';

// TODO: change to links once routing is implemented
export function SidebarItems() {
  return (
    <div className="stack-layout [&_>_*]:icon-layout font-medium text-content-secondary [&_>_*:hover]:bg-background-light [&_>_*:hover]:text-content-accent [&_>_*:hover_path]:fill-content-accent [&_>_*]:p-2">
      <button>
        <NotesIcon />
        All notes
      </button>
      <button>
        <CalendarIcon />
        Daily notes
      </button>
      <button className="[&&]:cluster-layout--between">
        <span className="icon-layout">
          <FlashCardsIcon />
          Flashcards
        </span>
        <span className="rounded bg-background-tertiary px-1 font-normal">
          120
        </span>
      </button>
      <button>
        <SpacesIcon />
        Spaces
      </button>
      <button>
        <LaterIcon />
        Edit Later
      </button>
    </div>
  );
}
