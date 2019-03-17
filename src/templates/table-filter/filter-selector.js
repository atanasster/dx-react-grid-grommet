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
import { Text, Menu } from 'grommet';

class FilterSelectorBase extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.setButtonRef = (buttonRef) => {
      this.buttonRef = buttonRef;
    };
    this.handleButtonClick = () => {
      this.setState(prevState => ({ opened: !prevState.opened }));
    };
    this.handleMenuClose = () => {
      this.setState({ opened: false });
    };
    this.handleMenuItemClick = (nextValue) => {
      const { onChange } = this.props;
      this.setState({ opened: false });
      onChange(nextValue);
    };
  }

  render() {
    const {
      value, availableValues, disabled, getMessage,
      iconComponent: Icon,
    } = this.props;
    return availableValues.length ? (
      <Menu
        dropTarget={this.buttonRef}
        disabled={disabled || availableValues.length === 1}
        icon={<Icon type={value} />}
        items={availableValues.map(valueItem => ({
          label: <Text truncate={true} margin={{ horizontal: 'small' }}>{getMessage(valueItem)}</Text>,
          icon: <Icon type={valueItem} />,
          onClick: () => this.handleMenuItemClick(valueItem),
          }))
        }
      />
    ) : null;
  }
}

FilterSelectorBase.propTypes = {
  value: PropTypes.string,
  availableValues: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  iconComponent: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
};

FilterSelectorBase.defaultProps = {
  value: undefined,
  availableValues: [],
  onChange: () => {},
  disabled: false,
};

export const FilterSelector = FilterSelectorBase;
