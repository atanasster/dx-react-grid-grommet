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
import { Box } from 'grommet';

const GroupPanelContainerBase = ({
  classes,
  children,
  ...restProps
}) => (
  <Box
    direction='row'
    wrap={true}
    width='full'
    gap='small'
    pad={{ vertical: 'small' }}
    {...restProps}
  >
    {children}
  </Box>
);

GroupPanelContainerBase.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

GroupPanelContainerBase.defaultProps = {
  children: undefined,
  className: undefined,
};

export const GroupPanelContainer = GroupPanelContainerBase;
