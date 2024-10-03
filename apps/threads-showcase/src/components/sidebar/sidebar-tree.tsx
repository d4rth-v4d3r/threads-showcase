import { ChevronRightIcon } from '../icon';

export function SidebarTree() {
  return (
    <div className="stack-layout [&_summary]:icon-layout text-content-secondary [&_details]:px-4 [&_details]:py-1 [&_summary::-webkit-details-marker]:[display:none] [&_summary]:[list-style:none]">
      <details>
        <summary>
          <ChevronRightIcon /> The Science of Biology
        </summary>
      </details>
      <details>
        <summary>
          <ChevronRightIcon /> The Chemistry of Life
        </summary>
      </details>
      <details>
        <summary>
          <ChevronRightIcon /> The Biosphere
        </summary>
        <div>
          <details>
            <summary>
              <ChevronRightIcon />
              What is Ecology?
            </summary>
          </details>
          <details>
            <summary>Energy Flow</summary>
          </details>
          <details>
            <summary>
              <ChevronRightIcon />
              Cycle of Matter
            </summary>
          </details>
          <details>
            <summary>
              <ChevronRightIcon />
              The role of Climate
            </summary>
          </details>
          <details>
            <summary>Renewable and Nonrenew...</summary>
          </details>
        </div>
      </details>
      <details>
        <summary>
          <ChevronRightIcon />
          Ecosystems and Communities
        </summary>
      </details>
      <details>
        <summary>
          <ChevronRightIcon />
          Populations
        </summary>
      </details>
    </div>
  );
}
