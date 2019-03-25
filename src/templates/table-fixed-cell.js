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
import styled, { withTheme } from 'styled-components';

const CellPlaceholder = styled.div`
  position: sticky;
  z-index: 19;
  background-clip: padding-box;
  ${props => props.theme.dxgrid && props.theme.dxgrid['cell-fixed'] && props.theme.dxgrid['cell-fixed'].extend}
`;

const FixedCellBase = withTheme(({
  component,
  side,
  showLeftDivider,
  showRightDivider,
  theme,
  style,
  position,
  ...restProps
}) => (
  <CellPlaceholder
    sticky={true}
    as={component}
    divLeft={showLeftDivider}
    divRight={showRightDivider}
    theme={theme}
    style={{
          ...style,
          [side]: position,
        }}
    {...restProps}
  />
));


FixedCellBase.propTypes = {
  style: PropTypes.object,
  component: PropTypes.func.isRequired,
  side: PropTypes.string.isRequired,
  position: PropTypes.number,
  showLeftDivider: PropTypes.bool,
  showRightDivider: PropTypes.bool,
};

FixedCellBase.defaultProps = {
  style: null,
  showLeftDivider: false,
  showRightDivider: false,
  position: undefined,
};

export const FixedCell = FixedCellBase;
