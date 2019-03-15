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
import styled, { withTheme } from 'styled-components';

const StyledTableCell = styled.td`
  font-weight: inherit;
  text-align: inherit;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  ${props => props.verticalAlign && `vertical-align: ${props.verticalAlign};`}
  ${props => (props.align === 'right') && 'text-align: right;'}
  ${props => (props.align === 'center') && 'text-align: center;'}
  ${props => props.noWrap && 'white-space: nowrap;'}
  ${props => props.tableContextTheme && props.tableContextTheme.extend}
`;

export const TableCell = withTheme(({
  scope,
  theme,
  verticalAlign,
  tableContext,
  ...rest
}) => {
  let tableContextTheme = (theme.dxgrid && theme.dxgrid[tableContext]);
  tableContextTheme = (theme.dxgrid && theme.dxgrid[tableContextTheme]) || tableContextTheme;
  return (
    <StyledTableCell
      as={scope ? 'th' : undefined}
      scope={scope}
      tableContext={tableContext}
      tableContextTheme={tableContextTheme}
      theme={theme}
      verticalAlign={
        verticalAlign ||
        (tableContextTheme ? tableContextTheme.verticalAlign : undefined)
      }
      {...rest}
    />
  );
});

TableCell.defaultProps = {
  tableContext: 'cell',
};


TableCell.propTypes = {
  tableContext: PropTypes.string,
};
