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
import { TableTreeColumn as TableTreeColumnBase } from '@devexpress/dx-react-grid';
import { TableTreeExpandButton as ExpandButton } from '../templates/table-tree/expand-button';
import { TableTreeCheckbox as Checkbox } from '../templates/table-tree/checkbox';
import { TableTreeIndent as Indent } from '../templates/table-tree/indent';
import { TableTreeContent as Content } from '../templates/table-tree/content';
import { TableTreeCell as Cell } from '../templates/table-tree/cell';

export const TableTreeColumn = withComponents({
  Cell, Content, Indent, ExpandButton, Checkbox,
})(TableTreeColumnBase);
