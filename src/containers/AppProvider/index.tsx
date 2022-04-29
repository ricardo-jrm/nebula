import React from 'react';

/**
 * AppProviderProps
 */
interface AppProviderProps {
  children: JSX.Element;
}

/**
 * AppProvider
 */
export const AppProvider = ({ children }: AppProviderProps) => <>{children}</>;
