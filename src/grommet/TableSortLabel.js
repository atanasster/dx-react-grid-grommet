import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Box, Button } from 'grommet';

const SorterButton = styled(Button)`
  flex-shrink: 1;
  height: 100%;
  user-select: none;
`;

export const TableSortLabel = withTheme(({
  align,
  children,
  disabled,
  fill,
  onClick,
  direction,
  theme,
  themeProps,
}) => {
  let icon;
  if (direction) {
    const Icon =
      theme.dataTable.icons[direction === 'asc' ? 'ascending' : 'descending'];
    icon = <Icon style={{ height: '1rem' }} />;
  }
  let content = (
    <Box
      {...themeProps}
      flex='shrink'
      direction='row'
      justify={align}
      align='center'
      pad={{ horizontal: 'xsmall' }}
      gap='xsmall'
      fill={fill}
    >
      {children}
      {icon}
    </Box>
  );
  content = (
    <SorterButton
      disabled={disabled}
      fill={fill}
      hoverIndicator={true}
      onClick={onClick}
    >
      {content}
    </SorterButton>
  );

  return content;
});
