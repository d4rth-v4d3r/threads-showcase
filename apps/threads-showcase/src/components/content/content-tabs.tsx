export function ContentTabs() {
  return (
    <>
      <div className="cluster-layout--start font-medium leading-4 [&_button]:w-[125px] [&_button]:text-content-secondary [&_span]:py-2">
        <button>
          <span className="inline-block w-3/4 border-b-4 border-banner-primary font-semibold [&&]:text-content-primary">
            Feed
          </span>
        </button>
        <button>
          <span>People</span>
        </button>
        <button>
          <span>About</span>
        </button>
      </div>
      <hr />
    </>
  );
}
