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

export class TableEditRow extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;

    this.focusFirstCell = (element) => {
      // Focus the text input using the raw DOM API
      if (element && this.textInput === null) {
        this.textInput = element;
        let items = findDOMNode(element).getElementsByTagName('*');
        items = filterByFocusable(items);
        const focusables = items.filter(item => (['button', 'a'].indexOf(item.localName) === -1 && !item.disabled));
        if (focusables.length > 0) {
          setTimeout(() => {
            focusables[0].focus();
          }, 0);
        }
      }
    };
  }

  render() {
    const { children, row, tableRow, ...rest } = this.props;
    return (<GrommetTableRow
      tableContext='row-edit'
      ref={this.focusFirstCell}
      {...rest}
    >
      {children}
    </GrommetTableRow>
    );
  }
}


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
