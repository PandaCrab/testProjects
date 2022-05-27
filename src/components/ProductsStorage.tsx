import { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { TAKE_PRODUCTS_FROM_STORAGE } from '../api';

import { Heading, NavigationButton, StartPage } from '../styles/HomePageStyles';

const RowDetail = ({ row }: any) => (
    <div>
        {row.quantity > 0 ? 
        `This item can be send today` :
        `Check later, out of stock`
        }
    </div>
)

const ProductsStorage = () => {
    const [queryData, setQueryData] = useState([])
    const { error, loading, data } = useQuery(TAKE_PRODUCTS_FROM_STORAGE);

    useEffect(() => {
        if (!loading && data) { setQueryData(data.productsStorage) }
        else { return } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    const navigate = useNavigate();

    const [columns] = useState([
        { name: 'id', title: 'Id' },
        { name: 'name', title: 'Name' },
        { name: 'price', title: 'Price' },
        { name: 'quantity', title: 'Quantity' }
    ]);

    const [tableColumnExtensions] = useState([
        { columnName: 'id', width: '10%' },
        { columnName: 'name', width: '45%' },
        { columnName: 'price', width: '15%' },
        { columnName: 'quantity', width: '20%' },
      ]);

    if (loading) { return <StartPage>Loading...</StartPage> }
    if (error) { return <StartPage>Oops, we have a technical problems</StartPage> }

    return (
        <StartPage>
            <Heading>
                <h1>Hello in storage</h1>  <NavigationButton onClick={() => navigate('/')} >Home</NavigationButton>
            </Heading>
            <Grid
                rows={queryData}
                columns={columns}
            >
                <SortingState
                    defaultSorting={[{ columnName: 'id', direction: 'asc' }]}
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
    )
};

export default ProductsStorage;
