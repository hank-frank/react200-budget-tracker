const defaultState = {
    description: '',
    amount: '',
    lineItems: []
};

export default function IncomeReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        //case of update description
        case 'UPDATE_INCOME_DESCRIPTION': {
            //return an object
            return {
                //with all previous state
                ...state,
                //overwriting description
                description: payload.description
            };
        }

        case 'UPDATE_INCOME_AMOUNT': {
            return {
                ...state,
                amount: payload.amount
            };
        }

        case 'ADD_INCOME': {
            const { description, amount } = action.payload;
            return {
                description: '',
                action: '', 
                lineItems: [
                    //all the previous line items
                    ...state.lineItems,
                    //plus a new object
                    { description, amount }
                ]
            };
        }
        
        default: {
            return state;
        }
    }
  }