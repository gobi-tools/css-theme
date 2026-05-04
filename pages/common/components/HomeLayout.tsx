import TopNav from "./TopNav";

export default function HomeLayout({ theme, children }) {
  return (
    <>
      <header>
        <TopNav theme={theme} />
      </header>
      <main>
        <article>
          {children}
        </article>
      </main>
    </>
  )
}