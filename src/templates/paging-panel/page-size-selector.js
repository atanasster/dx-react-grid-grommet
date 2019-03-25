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
import { Box, Select, Text } from 'grommet';


const PageSizeSelectorBase = ({
  pageSize,
  onPageSizeChange,
  pageSizes,
  getMessage,
}) => {
  const showAll = getMessage('showAll');
  return (
    <Box direction='row-responsive' align='center' gap='small'>
      <Text>
        {getMessage('rowsPerPage')}
      </Text>
      <Box width='xsmall'>
        <Select
          value={pageSize !== 0 ? String(pageSize) : 'All'}
          onChange={event => onPageSizeChange(pageSizes[event.selected])}
          options={pageSizes.map(item => (item !== 0 ? String(item) : showAll))}
        />
      </Box>
    </Box>
  );
};

PageSizeSelectorBase.propTypes = {
  pageSize: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  getMessage: PropTypes.func.isRequired,
};

export const PageSizeSelector = PageSizeSelectorBase;
