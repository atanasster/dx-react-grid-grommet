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
import styled from 'styled-components';
import { Button } from 'grommet';
import { FormNext, FormDown } from 'grommet-icons';

const StyledButton = styled(Button)`
  ${props => props.hidden && `
    cursor: default;
    opacity: 0;
  `}
`;


export const TableTreeExpandButton = ({
  visible, expanded, onToggle, ...restProps
}) => (
  <StyledButton
    hidden={!visible}
    onClick={(e) => {
      if (!visible) return;
      e.stopPropagation();
      onToggle();
    }}
    tabIndex={visible ? 0 : -1}
    icon={expanded ? <FormDown /> : <FormNext />}
    {...restProps}
  />
);

TableTreeExpandButton.propTypes = {
  visible: PropTypes.bool,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
};

TableTreeExpandButton.defaultProps = {
  visible: false,
  expanded: false,
  onToggle: () => {},
};
