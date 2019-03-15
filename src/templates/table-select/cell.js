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
import styled from 'styled-components';
import { CheckBox } from 'grommet';
import { TableCell } from '../../grommet/TableCell';

export const StyledSelectCell = styled(TableCell)`
  text-align: center;
`;

export const TableSelectCell = ({
  selected, onToggle,
  row, tableRow, tableColumn,
  ...restProps
}) => (
  <StyledSelectCell
    tableContext='cell-select'
    {...restProps}
  >
    <CheckBox
      checked={selected}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      onChange={() => {}}
    />
  </StyledSelectCell>
);

TableSelectCell.propTypes = {
  tableContext: PropTypes.string,
  style: PropTypes.object,
  selected: PropTypes.bool,
  onToggle: PropTypes.func,
  row: PropTypes.any,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableSelectCell.defaultProps = {
  tableContext: 'cell-select',
  style: null,
  selected: false,
  onToggle: () => {},
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

