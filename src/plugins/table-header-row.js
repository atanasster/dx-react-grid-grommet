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
import { TableHeaderRow as TableHeaderRowBase } from '@devexpress/dx-react-grid';
import { TableHeaderCell as Cell } from '../templates/table-header-cell/cell';
import { TableRow as Row } from '../templates/table-row';
import { SortLabel } from '../templates/table-header-cell/sort-label';
import { GroupButton } from '../templates/table-header-cell/group-button';
import { Title } from '../templates/table-header-cell/title';
import { Content } from '../templates/table-header-cell/content';


export const TableHeaderRow = withComponents({
  Cell, Row, Content, SortLabel, Title, GroupButton,
})(TableHeaderRowBase);

TableHeaderRow.ROW_TYPE = TableHeaderRowBase.ROW_TYPE;
