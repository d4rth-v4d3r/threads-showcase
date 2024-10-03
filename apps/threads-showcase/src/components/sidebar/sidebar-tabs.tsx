export function SidebarTabs() {
  return (
    <div className="flex justify-evenly bg-background-secondary px-4 py-2 [&_>_button]:grow [&_>_button]:rounded-lg [&_>_button]:p-2">
      <button className="bg-border-opaque text-content-secondary">
        Subscribed
      </button>
      <button className="text-content-tertiary">All Spaces</button>
    </div>
  );
}
