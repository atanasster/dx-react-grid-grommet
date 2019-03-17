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
import { Box } from 'grommet';

const StyledTreeContent = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TableTreeContent = ({
  children, ...restProps
}) => (
  <StyledTreeContent
    {...restProps}
  >
    <Box direction='row' align='center' gap='small'>
      {children}
    </Box>
  </StyledTreeContent>
);

TableTreeContent.propTypes = {
  children: PropTypes.node,
};

TableTreeContent.defaultProps = {
  children: undefined,
};
