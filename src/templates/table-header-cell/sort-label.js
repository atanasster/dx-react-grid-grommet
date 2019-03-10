import React from 'react';
import PropTypes from 'prop-types';
import { TableSortLabel } from '../../grommet/TableSortLabel';

const ENTER_KEY_CODE = 13;
const SPACE_KEY_CODE = 32;


const onClick = (e, onSort) => {
  const isActionKeyDown = e.keyCode === ENTER_KEY_CODE || e.keyCode === SPACE_KEY_CODE;
  const isMouseClick = e.keyCode === undefined;

  const cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
  const direction = (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey
    ? null
    : undefined;
  const keepOther = e.shiftKey || cancelSortingRelatedKey;

  e.preventDefault();
  onSort({ direction, keepOther });
};

const SortLabelBase = ({
  column, align, direction, children, onSort,
  getMessage, disabled, ...restProps
}) => (
  <div
    {...restProps}
  >
    <TableSortLabel
      active={!!direction}
      direction={direction === null ? undefined : direction}
      onClick={e => onClick(e, onSort)}
      disabled={disabled}
    >
      {children}
    </TableSortLabel>
  </div>
);

SortLabelBase.propTypes = {
  column: PropTypes.object,
  align: PropTypes.string,
  direction: PropTypes.oneOf(['asc', 'desc', null]),
  children: PropTypes.node,
  onSort: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

SortLabelBase.defaultProps = {
  column: undefined,
  direction: undefined,
  disabled: false,
  align: 'left',
  children: undefined,
};

export const SortLabel = SortLabelBase;
