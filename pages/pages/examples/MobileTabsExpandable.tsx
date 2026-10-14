import { useState } from "react";

type TSection = 'Section 1' |
  'Section 2' | 'Section 2.1' | 'Section 2.2' |
  'Section 3' | 'Section 3.1' | 'Section 3.2' | 'Section 3.3' | 'Section 3.4.1' | 'Section 3.4.2' |
  'Section 4'

export default function MobileTabsExpandable() {
  const [section, setSection] = useState<TSection>('Section 1');

  return (
    <main>
      <div className="row">
        <div>
          <menu>
            <b>Menu</b>
            <li aria-selected={section === 'Section 1'}>
              <a onClick={() => setSection('Section 1')}>Section 1</a>
            </li>
            <li>
              Section 2
            </li>
            <li>
              <menu>
                <li aria-selected={section === 'Section 2.1'}>
                  <a onClick={() => setSection('Section 2.1')}>Section 2.1</a>
                </li>
                <li aria-selected={section === 'Section 2.2'}>
                  <a onClick={() => setSection('Section 2.2')}>Section 2.2</a>
                </li>
              </menu>
            </li>
            <li>
              <details open>
                <summary>Section 3</summary>
                <menu>
                  <li aria-selected={section === 'Section 3.1'}>
                    <a onClick={() => setSection('Section 3.1')}>Section 3.1</a>
                  </li>
                  <li aria-selected={section === 'Section 3.2'}>
                    <a onClick={() => setSection('Section 3.2')}>Section 3.2</a>
                  </li>
                  <li aria-selected={section === 'Section 3.3'}>
                    <a onClick={() => setSection('Section 3.3')}>Section 3.3</a>
                  </li>
                  <li>
                    <details>
                      <summary>Section 3.4</summary>
                      <menu>
                        <li aria-selected={section === 'Section 3.4.1'}>
                          <a onClick={() => setSection('Section 3.4.1')}>Section 3.4.1</a>
                        </li>
                        <li aria-selected={section === 'Section 3.4.2'}>
                          <a onClick={() => setSection('Section 3.4.2')}>Section 3.4.2</a>
                        </li>
                      </menu>
                    </details>
                  </li>
                </menu>
              </details>
            </li>
            <li aria-selected={section === 'Section 4'}>
              <a onClick={() => setSection('Section 4')}>Section 4</a>
            </li>
          </menu>
        </div>
        <div>
          <article>
            <p><b>{section}</b></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}