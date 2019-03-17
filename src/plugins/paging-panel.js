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

import PropTypes from 'prop-types';
import { withComponents } from '@devexpress/dx-react-core';
import { PagingPanel as PagingPanelBase } from '@devexpress/dx-react-grid';
import { Pager as Container } from '../templates/paging-panel/pager';
import { withPatchedProps } from '../utils/with-patched-props';

const defaultMessages = {
  rowsPerPage: 'Rows per page:',
};

const PagingPanelWithMessages = withPatchedProps(({ messages, ...restProps }) => ({
  messages: { ...defaultMessages, ...messages },
  ...restProps,
}))(PagingPanelBase);

PagingPanelWithMessages.propTypes = {
  messages: PropTypes.shape({
    showAll: PropTypes.string,
    rowsPerPage: PropTypes.string,
    info: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
  }),
};

PagingPanelWithMessages.defaultProps = {
  messages: {},
};

PagingPanelWithMessages.components = PagingPanelBase.components;

export const PagingPanel = withComponents({ Container })(PagingPanelWithMessages);
