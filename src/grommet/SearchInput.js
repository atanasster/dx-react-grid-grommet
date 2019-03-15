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
import { Box, TextInput } from 'grommet';
import { Search } from 'grommet-icons';

const StyledSearchInput = styled(TextInput)`
  -webkit-appearance: none;
`;

export const SearchInput = ({ onChange, value, placeholder }) => (
  <Box direction='row' align='center' border='all' pad={{ right: 'small' }}>
    <StyledSearchInput
      plain={true}
      focusIndicator={true}
      value={value}
      type='search'
      onChange={onChange}
      placeholder={placeholder}
    />
    <Search />
  </Box>
);

SearchInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  onChange: undefined,
  value: undefined,
  placeholder: 'Search...',
};
