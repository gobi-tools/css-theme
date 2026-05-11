import { useState } from "react";
import { Tab1, Tab2, Tab3, TSelectedTab } from "../docs/navigation/Tabs";

export default function MobileTabs() {
  const [selected, setSelected] = useState<TSelectedTab>('tab-1');

  return (
    <main>
      <div className="row disable-mobile">
        <aside>
          <div>
            <menu>
              <li aria-selected={selected === 'tab-1'}>
                <a onClick={() => setSelected('tab-1')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                  <span>Home</span>
                </a>
              </li>
              <li aria-selected={selected === 'tab-2'}>
                <a onClick={() => setSelected('tab-2')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /><circle cx="12" cy="13" r="1" /></svg>
                  <span>Projects</span>
                </a>
              </li>
              <li aria-selected={selected === 'tab-3'}>
                <a onClick={() => setSelected('tab-3')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  <span>Users</span>
                </a>
              </li>
            </menu>
          </div>
        </aside>
        <div className="card" style={{flexGrow: 1}}>
          {selected === 'tab-1' ? <Tab1 /> : null}
          {selected === 'tab-2' ? <Tab2 /> : null}
          {selected === 'tab-3' ? <Tab3 /> : null}
        </div>
      </div>
    </main>
  )
}