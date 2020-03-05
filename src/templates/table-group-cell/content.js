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


const GroupedContent = styled.span`
  vertical-align: middle;
`;

export const Content = ({
  column, row, classes, children, ...restProps
}) => (
  <GroupedContent
    {...restProps}
  >
    <strong>
      {column.title || column.name}
      :
      {' '}
    </strong>
    {children || String(row.value)}
  </GroupedContent>
);

Content.propTypes = {
  row: PropTypes.any,
  column: PropTypes.object,
  children: PropTypes.node,
};

Content.defaultProps = {
  row: {},
  column: {},
  children: undefined,
};

