import { EThemes } from "../utils/types"
import { ThemeContext } from "./themeContext"

export default function ThemeProvider(
  props: {
    theme: EThemes,
    children: any
  }
) {
  return <ThemeContext value={props.theme}>{props.children}</ThemeContext>
}