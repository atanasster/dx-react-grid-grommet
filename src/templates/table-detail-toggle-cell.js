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
import { Button } from 'grommet';
import { FormDown, FormUp } from 'grommet-icons';
import { TableCell } from '../grommet/TableCell';

const StyledButton = styled(Button)`
  display: contents;
`;
const TableDetailToggleCellBase = ({
  style, expanded, onToggle,
  tableColumn, tableRow, row,
  ...restProps
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onToggle();
  };
  return (
    <TableCell
      style={style}
      tableContext='cell-toggle'
      {...restProps}
    >
      <StyledButton
        onClick={handleClick}
      >
        {expanded ? <FormUp /> : <FormDown />}
      </StyledButton>
    </TableCell>
  );
};

TableDetailToggleCellBase.propTypes = {
  style: PropTypes.object,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any,
};

TableDetailToggleCellBase.defaultProps = {
  style: null,
  expanded: false,
  onToggle: () => {},
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
};

export const TableDetailToggleCell = TableDetailToggleCellBase;
