# react grommet v2 theme for DevExpress dx-react-grid

Visit the [Developer Express](https://devexpress.github.io/devextreme-reactive/react/grid/) website for more information and examples.

### Install

  To install:

  ```
    $ npm install dx-react-grid-grommet
  ```

### Documentation
[Getting started](https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/getting-started/)

### Examples
[Live editable examples with grommet](http://grommet-nextjs.herokuapp.com/templates/dx-grid)

### Starter

```
import React from 'react';
import { Grommet, Box } from 'grommet';
import {
  Grid,
  Table,
  TableHeaderRow,
} from 'dx-react-grid-grommet';


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
      ],
      rows: [
        {region: "South America", sector: "Banking", customer: "Beacon Systems", product: "EnviroCare Max", amount: 10294},
        {region: "North America", sector: "Health", customer: "Global Services", product: "EnviroCare", amount: 2895},
        {region: "North America", sector: "Health", customer: "Supply Warehouse", product: "EnviroCare Max", amount: 3503},
        {region: "Australia", sector: "Banking", customer: "Apollo Inc", product: "SolarOne", amount: 1379},
        {region: "Europe", sector: "Health", customer: "Beacon Systems", product: "SolarOne", amount: 2867},
        {region: "South America", sector: "Banking", customer: "Discovery Systems", product: "EnviroCare", amount: 3365},
        {region: "North America", sector: "Health", customer: "Renewable Supplies", product: "EnviroCare", amount: 6932},
        {region: "Europe", sector: "Telecom", customer: "Building M Inc", product: "EnviroCare", amount: 1135 },
      ],
    };
  }

  render() {
    const { rows, columns } = this.state;
    return (
      <Grommet>
        <Box>
          <Grid
            rows={rows}
            columns={columns}
          >
            <Table />
            <TableHeaderRow />
          </Grid>
        </Box>
      </Grommet>
    );
  }
}

```
