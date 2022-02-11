export const TodosReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return state;
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.id)
        case 'EDIT_TODO':
            return state;
        default:
            return state;
    }
};