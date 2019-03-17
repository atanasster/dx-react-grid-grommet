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
import { makeVirtualTable } from '@devexpress/dx-react-grid';
import { Table } from './table';
import { Table as TableComponent } from '../templates/table';
import { VirtualTableLayout as VirtualLayout } from '../templates/virtual-table-layout';

const FixedHeader = props => <TableComponent use='head' {...props} />;
const FixedFooter = props => <TableComponent use='foot' {...props} />;

export const VirtualTable = makeVirtualTable(Table, {
  VirtualLayout,
  FixedHeader,
  FixedFooter,
  defaultEstimatedRowHeight: 48,
  defaultHeight: 530,
});

VirtualTable.COLUMN_TYPE = Table.COLUMN_TYPE;
VirtualTable.ROW_TYPE = Table.ROW_TYPE;
VirtualTable.NODATA_ROW_TYPE = Table.NODATA_ROW_TYPE;
