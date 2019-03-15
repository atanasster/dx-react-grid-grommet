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
import { Box } from 'grommet';
import { TableCell } from '../../grommet/TableCell';

const GroupedCell = styled(TableCell)`
  cursor: pointer;
  padding-top: padding-left: ${props => props.theme.global.edgeSize.small};
`;

const CellBase = ({
  contentComponent: Content,
  iconComponent: Icon,
  style, colSpan, row,
  column, expanded,
  onToggle,
  classes, children,
  tableRow,
  tableColumn, ...restProps
}) => {
  const handleClick = () => onToggle();

  return (
    <GroupedCell
      colSpan={colSpan}
      style={style}
      onClick={handleClick}
      {...restProps}
    >
      <Box direction='row' align='center'>
        <Icon
          expanded={expanded}
        />
        <Content
          column={column}
          row={row}
        >
          {children}
        </Content>
      </Box>
    </GroupedCell>
  );
};

CellBase.propTypes = {
  contentComponent: PropTypes.func.isRequired,
  iconComponent: PropTypes.func.isRequired,
  style: PropTypes.object,
  colSpan: PropTypes.number,
  row: PropTypes.any,
  column: PropTypes.object,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

CellBase.defaultProps = {
  style: null,
  colSpan: 1,
  row: {},
  column: {},
  expanded: false,
  onToggle: () => {},
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

export const Cell = CellBase;
