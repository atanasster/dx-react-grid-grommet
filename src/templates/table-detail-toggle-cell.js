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
