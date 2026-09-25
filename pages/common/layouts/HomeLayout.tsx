import { ThemeContext } from "../contexts/ThemeContext";
import TopNav from "../components/TopNav";
import { EThemes } from "../utils/types";

export default function HomeLayout(
  { theme, children }: { theme: EThemes, children: React.ReactNode }
) {
  return (
    <ThemeContext value={theme}>
      <header>
        <TopNav/>
      </header>
      <main>
        {children}
      </main>
    </ThemeContext>
  )
}