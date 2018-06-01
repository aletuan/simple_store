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
    amount: 5, 
};

console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));
console.log(reducer(5, incrementAction));

const decrementAction = {
    type: 'DECREMENT',
    amount: 11,
};

console.log(reducer(100, decrementAction));

const unknownAction = { type: 'UNKNOWN' };

console.log(reducer(5, unknownAction));
console.log(reducer(8, unknownAction));