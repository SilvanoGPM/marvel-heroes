import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from 'styles/themes/defaultTheme';

export function renderComponentWithTheme(children: JSX.Element) {
  return render(<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>);
}
