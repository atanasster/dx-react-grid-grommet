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
import { CheckBox } from 'grommet';
import { StyledSelectCell } from './cell';


export const SelectAllCell = ({
  allSelected, someSelected, disabled, onToggle,
  tableRow, tableColumn, rowSpan,
  ...restProps
}) => (
  <StyledSelectCell
    tableContext='cell-select-all'
    scope='col'
    rowSpan={rowSpan}
    {...restProps}
  >
    <CheckBox
      checked={allSelected}
      indeterminate={someSelected}
      disabled={disabled}
      onChange={() => {}}
      onClick={(e) => {
          if (disabled) return;

          e.stopPropagation();
          onToggle();
        }}
    />
  </StyledSelectCell>
);

SelectAllCell.propTypes = {
  allSelected: PropTypes.bool,
  someSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  rowSpan: PropTypes.number,
};

SelectAllCell.defaultProps = {
  allSelected: false,
  someSelected: false,
  disabled: false,
  onToggle: () => {},
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined,
};
