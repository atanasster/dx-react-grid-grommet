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
import styled, { ThemeContext } from 'styled-components';
import { deepMerge, normalizeColor } from 'grommet/utils';
import { genericStyles } from 'grommet/utils/styles';
import { defaultTheme } from './dx-theme';

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  table-layout: fixed;
  border-collapse: separate;

  ${props => props.sticky && `
    position: sticky;
    z-index: 500;
    overflow: visible;
    background-color: ${normalizeColor('background', props.theme)}
  `}
  ${props => (props.use === 'head') && `
    top: 0;
  `}
  ${props => (props.use === 'foot') && `
    bottom: 0;
  `}

  ${genericStyles}
  ${props => props.theme.dxgrid && props.theme.dxgrid.extend};
`;

class TableClass extends React.Component {
  render() {
    const { tableRef, ...rest } = this.props;

    return (
      <ThemeContext.Consumer>
        {(theme) => {
          const extTheme = deepMerge(defaultTheme, theme);
          return (
            <ThemeContext.Provider value={extTheme}>
              <StyledTable
                ref={tableRef}
                theme={extTheme}
                {...rest}
              />
            </ThemeContext.Provider>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}


export const Table = TableClass;
