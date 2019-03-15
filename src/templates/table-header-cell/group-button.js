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
import { List } from 'grommet-icons';

const StyledGroupButton = styled.div`
  padding-left: 0;
  height: ${props => props.theme.spacing.unit * 3};
  cursor: pointer;
  ${props => props.isDisabled && `
    cursor: default;
    opacity: 0.3;
  `}
`;

const GroupButtonBase = ({
  disabled, onGroup, theme, ...restProps
}) => (
  <StyledGroupButton
    onClick={(e) => {
      if (disabled) return;
      e.stopPropagation();
      onGroup(e);
    }}
    theme={theme}
    isDisabled={disabled}
    {...restProps}
  >
    <List />
  </StyledGroupButton>
);

GroupButtonBase.propTypes = {
  onGroup: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

GroupButtonBase.defaultProps = {
  disabled: false,
};

export const GroupButton = withTheme(GroupButtonBase);
