/*
Copyright 2019 Atanas Stoyanov

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Grid as GridBase } from '@devexpress/dx-react-grid';
import { deepMerge } from 'grommet/utils';
import { Root } from '../templates/layout';
import { defaultTheme } from '../grommet/dx-theme';

export const Grid = ({ children, ...props }) => (
  <ThemeContext.Consumer>
    {(theme) => {
      const extTheme = deepMerge(defaultTheme, theme);
      return (
        <ThemeContext.Provider value={extTheme}>
          <GridBase
            rootComponent={Root}
            {...props}
          >
            {children}
          </GridBase>
        </ThemeContext.Provider>
      );
    }}
  </ThemeContext.Consumer>
);

Grid.Root = Root;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
