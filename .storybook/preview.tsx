import { RouterContext } from 'next/dist/shared/lib/router-context';
import { AppProvider } from '../src/containers/AppProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [(Story) => <AppProvider>{Story()}</AppProvider>];
