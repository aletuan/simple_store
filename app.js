function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENAT') {
        return state - action.amount;
    } else {
        return state;
    }
}

const incrementAction = { 
    type: 'INCREMENT',
    amount: 3, 
};

const decrementAction = {
    type: 'DECREMENT',
    amount: 4,
};

function createStore(reducer) {
    let state = 0;

    const getState = () => (state);
    
    const dispatch = (action) => {
        state = reducer(state, action);
    };

    return {
        getState,
        dispatch,
    };
}

const store = createStore(reducer);

store.dispatch(incrementAction);
console.log(store.getState());

