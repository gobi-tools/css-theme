import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { usePrefersDarkMode } from '../effects/useDarkMode';
import { EThemes } from '../utils/types';
import { useTheme } from '../contexts/themeContext';
import { useEffect } from 'react';

type TThemeMode = 'light-dark' | 'light' | 'dark';

const ThemeToDarkMode: Record<EThemes, TThemeMode> = {
  // light / dark
  [EThemes.Default]: 'light-dark',
  [EThemes.App]: 'light-dark',
  [EThemes.Blog]: 'light-dark',
  // light
  [EThemes.Newsletter]: 'light',
  [EThemes.Landing]: 'light',
  [EThemes.Delivery]: 'light',
};

export default function CodeSyntax(props: { lang: 'javascript' | 'xml' | 'json' | 'bash', children: any }) {
  const isDark = usePrefersDarkMode();
  const theme = useTheme();
  const mode = ThemeToDarkMode[theme];

  useEffect(() => {
    console.log('Theme is', theme, mode, isDark, isDark && mode === 'light-dark');
  }, []);

  return (
    <SyntaxHighlighter language={props.lang} style={isDark && mode === 'light-dark' ? atomOneDark : docco}>
      {props.children}
    </SyntaxHighlighter>
  );
};