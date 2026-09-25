import { ThemeContext } from "../contexts/themeContext";
import TopNav from "./TopNav";

export default function HomeLayout({ theme, children }) {
  return (
    <ThemeContext value={theme}>
      <header>
        <TopNav theme={theme} />
      </header>
      <main>
        {children}
      </main>
    </ThemeContext>
  )
}