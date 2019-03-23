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
import { CheckBox } from 'grommet';

export const TableTreeCheckbox = ({
  disabled, checked, indeterminate, onChange, ...restProps
}) => (
  <CheckBox
    checked={checked}
    indeterminate={indeterminate}
    disabled={disabled}
    onChange={() => {}}
    onClick={(e) => {
      if (disabled) return;
      e.stopPropagation();
      onChange();
    }}
    {...restProps}
  />
);

TableTreeCheckbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
};

TableTreeCheckbox.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: () => {},
};

