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
import { TableFixedColumns as TableFixedColumnsBase } from '@devexpress/dx-react-grid';
import { FixedCell as Cell } from '../templates/table-fixed-cell';
import { TableInvisibleRow as ListenerRow } from '../templates/table-invisible-row';
import { TableListenerCell as ListenerCell } from '../templates/table-listener-cell';

export const TableFixedColumns = withComponents({
  Cell, ListenerRow, ListenerCell,
})(TableFixedColumnsBase);
