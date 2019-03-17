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
padding: ${props => props.theme.global.edgeSize.xsmall};
      `,
    },
    'cell-banded-header': {
      extend: css`
      border-bottom: ${props => props.theme.global.control.border.width} solid ${props => normalizeColor('border', props.theme)};
      padding: ${props => props.theme.global.edgeSize.xsmall};
      `,
    },
    'cell-detail': undefined,
    'cell-edit': undefined,
    'cell-filter': 'cell',
    'cell-header': 'cell',
    'cell-nodata': 'cell',
    'cell-stub': undefined,
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
  },
};
