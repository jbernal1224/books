export const BOOK_SELECTED_ACTION = 'BOOK_SELECTED';

export function selectBook(book) {
  return {
    type: BOOK_SELECTED_ACTION,
    payload: book
  };
}