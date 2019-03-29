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

import { css } from 'styled-components';
import { normalizeColor } from 'grommet/utils';

export const defaultTheme = {
  dxgrid: {
    'extend': undefined,
    'cell': {
      extend: css`
      padding: ${props => props.theme.global.edgeSize.small} ${props => props.theme.global.edgeSize.xsmall};
      border-bottom: ${props => props.theme.global.control.border.width} solid ${props => normalizeColor('border', props.theme)};
      `,
    },
    'cell-banded-header': {
      extend: css`
      border-bottom: ${props => props.theme.global.control.border.width} solid ${props => normalizeColor('border', props.theme)};
      padding: ${props => props.theme.global.edgeSize.small} ${props => props.theme.global.edgeSize.xsmall};
      `,
    },

    'cell-detail': undefined,
    'cell-edit': {
      extend: css`
      padding: 2px 0;
      border-bottom: ${props => props.theme.global.control.border.width} solid ${props => normalizeColor('border', props.theme)};
      `,
    },
    'cell-edit-commands': {
      extend: css`
      text-transform: uppercase;
      padding: ${props => props.theme.global.edgeSize.small} ${props => props.theme.global.edgeSize.xsmall};
      border-bottom: ${props => props.theme.global.control.border.width} solid ${props => normalizeColor('border', props.theme)};
      `,
    },
    'cell-filter': 'cell',
    'cell-fixed': {
      extend: css`
      ${props => `
      background-color: ${normalizeColor(props.theme.dark ? 'dark-1' : 'light-1', props.theme)};
      color: ${normalizeColor(props.theme.dark ? 'light-1' : 'dark-1', props.theme)};
      border-left: ${props.theme.global.control.border.width} solid ${normalizeColor('border', props.theme)};
      border-right: ${props.theme.global.control.border.width} solid ${normalizeColor('border', props.theme)};
      `}
      `,
    },
    'cell-header': {
      extend: css`
      padding: ${props => props.theme.global.edgeSize.small} ${props => props.theme.global.edgeSize.xsmall};
      border-bottom: ${props => props.theme.global.control.border.width} solid ${props => normalizeColor('border', props.theme)};
      `,
    },
    'cell-header-edit-commands': {
      extend: css`
      text-transform: uppercase;
      padding: ${props => props.theme.global.edgeSize.small} ${props => props.theme.global.edgeSize.xsmall};
      border-bottom: ${props => props.theme.global.control.border.width} solid ${props => normalizeColor('border', props.theme)};
      `,
    },
    'cell-nodata': 'cell',
    'cell-stub': {
      extend: css`
 border-bottom: ${props => props.theme.global.control.border.width} solid ${props => normalizeColor('border', props.theme)};
      `,
    },
    'cell-toggle': 'cell',
    'cell-select': 'cell',
    'cell-select-all': 'cell',
    'cell-summary': 'cell',
    'header': {
      extend: css`
 border-bottom: ${props => props.theme.global.control.border.width} solid ${props => normalizeColor('border', props.theme)};
      `,
    },
    'footer': {
      extend: css`
 border-top: ${props => props.theme.global.control.border.width} solid ${props => normalizeColor('border', props.theme)};
      `,
    },
    'row': undefined,
    'row-banded-header': undefined,
    'row-detail': undefined,
    'row-edit': undefined,
    'row-filter': {
      extend: css`
 border-top: ${props => props.theme.global.control.border.width} solid ${props => normalizeColor('border', props.theme)};
      `,
    },
    'row-select': undefined,
    'row-stub': undefined,
    'row-summary': undefined,
    'column-chooser': {
      extend: css`
        z-index: 9;
      `,
    },
  },
};
