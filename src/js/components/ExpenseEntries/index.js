import { connect } from 'react-redux';
import ExpenseEntries from './ExpenseEntries';

//this function takes the store and returns an object
//thats passed to the props of the component.    store -> object -> props of the component. 
function mapStoreToProps(store) {
    return {
        description: store.expense.description,
        amount: store.expense.amount, 
        lineItems: store.expense.lineItems
    };
}

//connect then returns a function thats called within the component itself... 
export default connect(mapStoreToProps)(ExpenseEntries); 
