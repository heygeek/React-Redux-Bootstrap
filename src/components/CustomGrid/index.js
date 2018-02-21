import React from 'react';
import PropTypes from 'prop-types';
import {
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-bootstrap3';

const CustomGrid = ({ cols, rows, pageSize }) => (
  <Grid
    rows={rows}
    columns={cols}
  >
    <PagingState
      defaultCurrentPage={0}
      pageSize={pageSize}
    />
    <IntegratedPaging />
    <Table />
    <TableHeaderRow />
    <PagingPanel />
  </Grid>
);

CustomGrid.propTypes = {
  cols: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  pageSize: PropTypes.number,
};

CustomGrid.defaultProps = {
  pageSize: 10,
};

export default CustomGrid;
