import * as React from 'react';
import { ThemedStyledComponentsModule } from 'styled-components';

declare module '*.woff'
declare module '*.woff2'

declare module 'styled-components' {
  export interface ThemedStyledComponentsModule<T> {
      createGlobalStyle(
          strings: TemplateStringsArray,
          ...interpolations: SimpleInterpolation[]
      ): React.ComponentClass;
  }

  export function createGlobalStyle(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): React.ComponentClass;
}
