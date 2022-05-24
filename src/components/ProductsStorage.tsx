import { useState } from 'react';
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
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import { AppDispatch, RootState } from '../types';

// import { getProductsStorage } from '../redux/ducks/stuff';
import { Heading, NavigationButton, StartPage } from '../styles/HomePageStyles';
import { TAKE_PRODUCTS_FROM_STORAGE } from '../api';

interface graphQlData {
    id: string,
    name: string,
    price: number,
    quantity: number
}

const RowDetail = ({ row }: any) => (
    <div>
        {row.quantity > 0 ? 
        `This item can be send today` :
        `Check later, out of stock`
        }
    </div>
)

const ProductsStorage = () => {
    const { error, data } = useQuery(TAKE_PRODUCTS_FROM_STORAGE);
    const navigate = useNavigate();
    // const dispatch = useDispatch<AppDispatch>();
    // const productsStorage = useSelector((state: RootState) => state.order.productsStorage);

    // useEffect(() => { 
    //     dispatch(getProductsStorage())
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

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
            <Heading>
                <h1>Hello in storage</h1>  <NavigationButton onClick={() => navigate('/')} >Home</NavigationButton>
            </Heading>
            <Grid
                rows={data.productsStorage.map(({ id, name, price, quantity }: graphQlData) => ({
                    id,
                    name,
                    price,
                    quantity
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
