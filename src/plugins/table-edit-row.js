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
import { TableEditRow as TableEditRowBase } from '@devexpress/dx-react-grid';
import { EditCell as Cell } from '../templates/table-edit/cell';
import { TableEditRow as Row } from '../templates/table-edit/row';

export const TableEditRow = withComponents({ Row, Cell })(TableEditRowBase);

TableEditRow.ADDED_ROW_TYPE = TableEditRowBase.ADDED_ROW_TYPE;
TableEditRow.EDIT_ROW_TYPE = TableEditRowBase.EDIT_ROW_TYPE;
