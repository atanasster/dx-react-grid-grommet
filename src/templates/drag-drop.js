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
import { Text } from 'grommet';

const StyledContainer = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  display: inline-block;
  transform: translate(calc(${props => props.clientOffset.x}px - 50%), calc(${props => props.clientOffset.y}px - 50%));
`;

const StyledColumn = styled.div`
  padding-left: ${props => props.theme.global.edgeSize.xsmall};
  padding-right: ${props => props.theme.global.edgeSize.xsmall};
  float: right;
  cursor: move;
`;


const ContainerBase = ({
  clientOffset, children,
  ...rest
}) => (
  <StyledContainer
    clientOffset={clientOffset}
    {...rest}
  >
    {children}
  </StyledContainer>
);

ContainerBase.propTypes = {
  clientOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

ContainerBase.defaultProps = {
  children: undefined,
};

export const Container = ContainerBase;

const ColumnBase = ({
  column,
  ...restProps
}) => (
  <StyledColumn
    {...restProps}
  >
    <Text>{column.title}</Text>
  </StyledColumn>

);

ColumnBase.propTypes = {
  column: PropTypes.object.isRequired,
};


export const Column = ColumnBase;
