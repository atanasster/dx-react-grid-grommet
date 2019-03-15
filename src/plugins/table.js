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

import { withComponents } from '@devexpress/dx-react-core';
import { Table as TableBase } from '@devexpress/dx-react-grid';
import { Table as TableComponent } from '../templates/table';
import { TableHeader } from '../grommet/TableHeader';
import { TableBody } from '../grommet/TableBody';
import { TableFooter } from '../grommet/TableFooter';
import { TableRow as Row } from '../templates/table-row';
import { TableLayout as Layout } from '../templates/table-layout';
import { TableCell as Cell } from '../templates/table-cell';
import { TableStubCell as StubCell } from '../templates/table-stub-cell';
import { TableNoDataCell as NoDataCell } from '../templates/table-no-data-cell';
import { TableContainer as Container } from '../templates/table-container';
import { TableStubRow as StubRow } from '../templates/table-stub-row';

export const Table = withComponents({
  Table: TableComponent,
  TableHead: TableHeader,
  TableBody,
  TableFooter,
  Container,
  Layout,
  Row,
  Cell,
  NoDataRow: Row,
  NoDataCell,
  StubRow,
  StubCell,
  StubHeaderCell: StubCell,
})(TableBase);

Table.COLUMN_TYPE = TableBase.COLUMN_TYPE;
Table.ROW_TYPE = TableBase.ROW_TYPE;
Table.NODATA_ROW_TYPE = TableBase.NODATA_ROW_TYPE;
