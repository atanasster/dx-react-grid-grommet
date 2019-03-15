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
import { TableEditColumn as TableEditColumnBase } from '@devexpress/dx-react-grid';
import {
  EditCommandHeadingCell as HeaderCell,
  EditCommandCell as Cell,
  CommandButton as Command,
} from '../templates/table-edit/command-cell';
import { withPatchedProps } from '../utils/with-patched-props';

const TableEditColumnWithWidth = withPatchedProps(props => ({
  width: 150,
  ...props,
}))(TableEditColumnBase);

TableEditColumnWithWidth.components = TableEditColumnBase.components;

export const TableEditColumn = withComponents({
  Cell, HeaderCell, Command,
})(TableEditColumnWithWidth);

TableEditColumn.COLUMN_TYPE = TableEditColumnBase.COLUMN_TYPE;
