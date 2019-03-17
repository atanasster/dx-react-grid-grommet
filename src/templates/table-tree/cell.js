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
import { Box } from 'grommet';
import { TableCell } from '../../grommet/TableCell';

export const TableTreeCell = ({
  column, value, children,
  tableRow, tableColumn, row,
  ...restProps
}) => (
  <TableCell
    noWrap={!(tableColumn && tableColumn.wordWrapEnabled)}
    align={tableColumn && tableColumn.align}
    {...restProps}
  >
    <Box direction='row' align='center' gap='small'>
      {children}
    </Box>
  </TableCell>
);

TableTreeCell.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableTreeCell.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};
