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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>
                  <span>Install</span>
                </a>
              </li>
              <li aria-selected={selected === 'tab-3'}>
                <a onClick={() => setSelected('tab-3')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M17 12h.01"/><path d="M12 12h.01"/><path d="M7 12h.01"/></svg>
                  <span>More</span>
                </a>
              </li>
            </menu>
          </div>
        </aside>
        <div style={{flexGrow: 1}}>
          {selected === 'tab-1' ? <Tab1 /> : null}
          {selected === 'tab-2' ? <Tab2 /> : null}
          {selected === 'tab-3' ? <Tab3 /> : null}
        </div>
      </div>
    </main>
  )
}