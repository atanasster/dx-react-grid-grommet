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
import { TableFilterRow as TableFilterRowBase } from '@devexpress/dx-react-grid';
import { TableFilterCell as Cell } from '../templates/table-filter/cell';
import { TableFilterRow as Row } from '../templates/table-filter/row';
import { Editor } from '../templates/table-filter/editor';
import { FilterSelector } from '../templates/table-filter/filter-selector';
import { ToggleButton } from '../templates/table-filter/filter-selector/toggle-button';
import { Icon } from '../templates/table-filter/icon';


export const TableFilterRow = withComponents({
  Row, Cell, Editor, FilterSelector, Icon, ToggleButton,
})(TableFilterRowBase);

TableFilterRow.ROW_TYPE = TableFilterRowBase.ROW_TYPE;
