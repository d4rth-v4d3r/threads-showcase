import { ReactComponent as CalendarIcon } from '../icon/calendar.svg';
import { ReactComponent as FlashCardsIcon } from '../icon/flash-cards.svg';
import { ReactComponent as LaterIcon } from '../icon/later.svg';
import { ReactComponent as NotesIcon } from '../icon/notes.svg';
import { ReactComponent as SpacesIcon } from '../icon/spaces.svg';

// TODO: change to links once routing is implemented
export function SidebarItems() {
  return (
    <div className="stack-layout font-medium text-content-secondary [&_>_button:hover]:bg-background-light [&_>_button:hover]:text-content-accent [&_>_button:hover_path]:fill-content-accent">
      <button className="icon-layout p-2">
        <NotesIcon />
        All notes
      </button>
      <button className="icon-layout p-2">
        <CalendarIcon />
        Daily notes
      </button>
      <button className="icon-layout p-2">
        <FlashCardsIcon />
        Flashcards
      </button>
      <button className="icon-layout p-2">
        <SpacesIcon />
        Spaces
      </button>
      <button className="icon-layout p-2">
        <LaterIcon />
        Edit Later
      </button>
    </div>
  );
}
