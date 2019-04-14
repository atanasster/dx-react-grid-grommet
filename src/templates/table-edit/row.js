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
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { filterByFocusable } from 'grommet/utils/DOM';
import { TableRow as GrommetTableRow } from '../../grommet/TableRow';

export const TableEditRow = ({
  children,
  row, tableRow,
  ...rest
}) => (
  <GrommetTableRow
    tableContext='row-edit'
    ref={(ref) => {
        if (ref) {
          let items = findDOMNode(ref).getElementsByTagName('*');
          items = filterByFocusable(items);
          const focusables = items.filter(item => ['button', 'a'].indexOf(item.localName) === -1);
          if (focusables.length > 0) {
            setTimeout(() => {
              focusables[0].focus();
            }, 0);
          }
        }
      }}
    {...rest}
  >
    {children}
  </GrommetTableRow>
);

TableEditRow.propTypes = {
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object,
};

TableEditRow.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
};
