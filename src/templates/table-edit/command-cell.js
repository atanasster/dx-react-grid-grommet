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
import { Box, Anchor } from 'grommet';
import { TableCell } from '../../grommet/TableCell';

export const CommandButton = ({
  onExecute,
  text,
  ...restProps
}) => (
  <Anchor
    href='#'
    label={text}
    onClick={(e) => {
      e.stopPropagation();
      onExecute();
    }}
    {...restProps}
  />
);

CommandButton.propTypes = {
  onExecute: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};


export const EditCommandHeadingCell = ({
  children,
  tableRow, tableColumn,
  rowSpan,
  ...restProps
}) => (
  <TableCell
    tableContext='cell-header-edit-commands'
    align='center'
    noWrap={true}
    rowSpan={rowSpan}
    {...restProps}
  >
    {children}
  </TableCell>
);

EditCommandHeadingCell.propTypes = {
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  rowSpan: PropTypes.number,
};

EditCommandHeadingCell.defaultProps = {
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined,
};


export const EditCommandCell = ({
  tableRow, tableColumn, row, children, ...restProps
}) => (
  <TableCell
    tableContext='cell-edit-commands'
    {...restProps}
  >
    <Box direction='row' gap='small' flex='grow' justify='center'>
      {children}
    </Box>
  </TableCell>
);

EditCommandCell.propTypes = {
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  row: PropTypes.any,
};

EditCommandCell.defaultProps = {
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  row: undefined,
};
