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


const ALIGN_MAP = {
  left: 'start',
  center: 'center',
  right: 'end',
};

export const TableSummaryCell = ({
  colSpan, style, children,
  tableColumn, tableRow, row,
  ...restProps
}) => (
  <TableCell
    tableContext='cell-summary'
    style={style}
    colSpan={colSpan}
    {...restProps}
  >
    <Box
      align={tableColumn && ALIGN_MAP[tableColumn.align]}
    >
      {children}
    </Box>
  </TableCell>
);

TableSummaryCell.propTypes = {
  style: PropTypes.object,
  colSpan: PropTypes.number,
  children: PropTypes.node,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any,
};

TableSummaryCell.defaultProps = {
  style: null,
  colSpan: 1,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  children: undefined,
};
