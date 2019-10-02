import React from 'react';
import { RenderFunction } from '@storybook/react';
import './container.scss';

export const Container = (story: RenderFunction) => (
  <React.StrictMode>
    {story()}
  </React.StrictMode>
);