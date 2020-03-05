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
import { TextInput } from 'grommet';
import { TableCell } from '../../grommet/TableCell';

export const EditCell = ({
  column, value, onValueChange, style, children,
  row, tableRow, tableColumn, editingEnabled,
  autoFocus, onBlur, onFocus, onKeyDown, ...restProps
}) => {
  const patchedChildren = children
    ? React.cloneElement(children, {
      autoFocus,
      onBlur,
      onFocus,
      onKeyDown,
    })
    : children;

  return (
    <TableCell
      tableContext='cell-edit'
      align={tableColumn && tableColumn.align}
      style={style}
      {...restProps}
    >
      {patchedChildren || (
        <TextInput
          plain={true}
          focusIndicator={true}
          value={(value === undefined || value === null) ? '' : value}
          disabled={!editingEnabled}
          onChange={e => onValueChange(e.target.value)}
          autoFocus={autoFocus}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
        />
      )}
    </TableCell>
  );
};

EditCell.propTypes = {
  column: PropTypes.object,
  row: PropTypes.any,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  value: PropTypes.any,
  onValueChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  editingEnabled: PropTypes.bool,
  children: PropTypes.node,
  autoFocus: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
};

EditCell.defaultProps = {
  column: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  value: '',
  style: null,
  children: undefined,
  editingEnabled: true,
  autoFocus: false,
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
};
