import React, { useEffect, useState } from 'react';
import { 
    SortingState,
    IntegratedSorting,
    RowDetailState
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail,
} from '@devexpress/dx-react-grid-material-ui';

import { StartPage } from '../styles/HomePageStyles';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types';
import { getProductsStorage } from '../redux/ducks/stuff';

const RowDetail = ({ row }: any) => (
    <div>
        {row.quantity > 0 ? 
        `This item can be send today` :
        `Check later, out of stock`
        }
    </div>
)

const ProductsStorage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const productsStorage = useSelector((state: RootState) => state.order.productsStorage);

    useEffect(() => { 
        dispatch(getProductsStorage())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [columns] = useState([
        { name: 'id', title: 'Id' },
        { name: 'name', title: 'Name' },
        { name: 'price', title: 'Price' },
        { name: 'quantity', title: 'Quantity' }
    ]);

    const [tableColumnExtensions] = useState([
        { columnName: 'id', width: '10%' },
        { columnName: 'name', width: '50%' },
        { columnName: 'price', width: '10%' },
        { columnName: 'quantity', width: '15%' },
      ]);

    return (
        <StartPage>
            <h1>Hello in storage</h1>

            <Grid
                rows={productsStorage.map((product: any) => ({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity
                }))}
                columns={columns}
            >
                <SortingState
                    defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
                />
                <IntegratedSorting />
                <RowDetailState />

                <Table columnExtensions={tableColumnExtensions} />
                <TableHeaderRow showSortingControls />
                <TableRowDetail 
                    contentComponent={RowDetail}
                />
            </Grid>
        </StartPage>
    );
};

export default ProductsStorage;
