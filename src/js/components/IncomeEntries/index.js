import { connect } from 'react-redux';
import IncomeEntries from './IncomeEntries';

//this function takes the store and returns an object
//thats passed to the props of the component.    store -> object -> props of the component. 
function mapStoreToProps(store) {
    return {
        description: store.income.description,
        amount: store.income.amount, 
        lineItems: store.income.lineItems
    };
}

//connect then returns a function thats called within the component itself... 
export default connect(mapStoreToProps)(IncomeEntries); 
