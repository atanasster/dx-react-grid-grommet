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
import { TableBandHeader as TableBandHeaderBase } from '@devexpress/dx-react-grid';
import { Cell } from '../templates/table-band-header/cell';
import { HeaderCell } from '../templates/table-band-header/header-cell';
import { InvisibleCell } from '../templates/table-band-header/invisible-cell';
import { Row } from '../templates/table-band-header/row';

export const TableBandHeader = withComponents({
  Cell, Row, BandedHeaderCell: HeaderCell, InvisibleCell,
})(TableBandHeaderBase);

TableBandHeader.ROW_TYPE = TableBandHeaderBase.ROW_TYPE;
