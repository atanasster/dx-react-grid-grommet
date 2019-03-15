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
import { TableRowDetail as TableRowDetailBase } from '@devexpress/dx-react-grid';
import { TableDetailToggleCell as ToggleCell } from '../templates/table-detail-toggle-cell';
import { TableDetailCell as Cell } from '../templates/table-detail/cell';
import { TableDetailRow as Row } from '../templates/table-detail/row';

const TableRowDetailWithWidth = props => <TableRowDetailBase toggleColumnWidth={48} {...props} />;
TableRowDetailWithWidth.components = TableRowDetailBase.components;

export const TableRowDetail = withComponents({ Row, Cell, ToggleCell })(TableRowDetailWithWidth);

TableRowDetail.COLUMN_TYPE = TableRowDetailBase.COLUMN_TYPE;
TableRowDetail.ROW_TYPE = TableRowDetailBase.ROW_TYPE;
