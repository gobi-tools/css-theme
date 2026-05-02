import TopNav from "./TopNav";

export default function HomeLayout({ theme, children }) {
  return (
    <>
      <TopNav theme={theme} />
      <main>
        <article>
          {children}
        </article>
      </main>
    </>
  )
}