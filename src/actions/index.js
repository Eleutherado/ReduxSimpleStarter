// Action Creator for selected book
// It must return an action, which is a JS object with a type property
export function selectBook(book){
    return {
        type: 'BOOK_SELECTED',
        payload: book,
    };
}
