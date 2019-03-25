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
import { DragSource } from '@devexpress/dx-react-core';
import { Box } from 'grommet';
import { TableCell } from '../../grommet/TableCell';
import { ResizingControl, ResizeHandle } from './resizing-control';

const StyledHeaderCell = styled(TableCell)`
    outline: none;
    overflow: visible;
    position: relative;
    &:hover ${ResizeHandle} {
      opacity: 1;
    } 
    &:nth-last-child(2) ${ResizeHandle} {
      width: ${props => props.theme.global.edgeSize.xxsmall};
      right: 1px;
    }
    ${props => props.noUserSelect && `
      user-select: none;
    `}
    ${props => props.isDraggable && `
      cursor: pointer;
    `}
    ${props => props.cellAlign === 'right' && `
       text-align: right;
    `}
    ${props => props.cellAlign === 'center' && `
      text-align: center;
    `}
`;

export class TableHeaderCell extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false,
    };
    this.cellRef = React.createRef();

    this.onDragStart = () => {
      this.setState({ dragging: true });
    };
    this.onDragEnd = () => {
      if (this.cellRef.current) {
        this.setState({ dragging: false });
      }
    };
  }

  render() {
    const {
      column, tableColumn,
      showGroupingControls, onGroup, groupingEnabled,
      draggingEnabled,
      resizingEnabled, onWidthChange, onWidthDraft, onWidthDraftCancel,
      tableRow, children,
      // @deprecated
      showSortingControls, sortingDirection, sortingEnabled, onSort, before,
      ...restProps
    } = this.props;

    // eslint-disable-next-line no-unused-vars
    const { dragging } = this.state;
    // eslint-disable-next-line no-unused-vars
    const align = (tableColumn && tableColumn.align) || 'left';
    const cellLayout = (
      <StyledHeaderCell
        scope='col'
        tableContext='cell-header'
        noUserSelect={draggingEnabled}
        isDraggable={draggingEnabled}
        align={align}
        dimmed={dragging || (tableColumn && tableColumn.draft)}
        noWrap={!(tableColumn && tableColumn.wordWrapEnabled)}
        {...restProps}
      >
        <Box direction='row' align='center' gap='small'>
          {children}
        </Box>
        {resizingEnabled && (
          <ResizingControl
            onWidthChange={onWidthChange}
            onWidthDraft={onWidthDraft}
            onWidthDraftCancel={onWidthDraftCancel}
          />
        )}
      </StyledHeaderCell>
    );

    return draggingEnabled ? (
      <DragSource
        ref={this.cellRef}
        payload={[{ type: 'column', columnName: column.name }]}
        onStart={this.onDragStart}
        onEnd={this.onDragEnd}
      >
        {cellLayout}
      </DragSource>
    ) : cellLayout;
  }
}

TableHeaderCell.propTypes = {
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  column: PropTypes.object,
  style: PropTypes.object,
  showSortingControls: PropTypes.bool,
  sortingEnabled: PropTypes.bool,
  sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
  onSort: PropTypes.func,
  showGroupingControls: PropTypes.bool,
  groupingEnabled: PropTypes.bool,
  onGroup: PropTypes.func,
  draggingEnabled: PropTypes.bool,
  resizingEnabled: PropTypes.bool,
  onWidthChange: PropTypes.func,
  onWidthDraft: PropTypes.func,
  onWidthDraftCancel: PropTypes.func,
  children: PropTypes.node,
  before: PropTypes.node,
};

TableHeaderCell.defaultProps = {
  column: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  style: null,
  showSortingControls: false,
  sortingDirection: undefined,
  sortingEnabled: false,
  onSort: undefined,
  showGroupingControls: false,
  groupingEnabled: false,
  onGroup: undefined,
  draggingEnabled: false,
  resizingEnabled: false,
  onWidthChange: undefined,
  onWidthDraft: undefined,
  onWidthDraftCancel: undefined,
  children: undefined,
  before: undefined,
};

