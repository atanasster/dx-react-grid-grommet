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
import { withComponents } from '@devexpress/dx-react-core';
import { TableSelection as TableSelectionBase } from '@devexpress/dx-react-grid';
import { SelectAllCell as HeaderCell } from '../templates/table-select/select-all-cell';
import { TableSelectCell as Cell } from '../templates/table-select/cell';
import { TableSelectRow as Row } from '../templates/table-select/row';

const TableSelectionWithWidth = props => (
  <TableSelectionBase
    selectionColumnWidth={58}
    {...props}
  />
);
TableSelectionWithWidth.components = TableSelectionBase.components;

export const TableSelection = withComponents({ Row, Cell, HeaderCell })(TableSelectionWithWidth);
TableSelection.COLUMN_TYPE = TableSelectionBase.COLUMN_TYPE;
