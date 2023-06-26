import './pagination.css';
import PaginationButton from './PaginationButton';

type PaginationProps = {
  numRecipes: number;
  recipesPerPage: number;
  handlePaginationButtonClick: (page: number) => void;
};

function Pagination(props: PaginationProps) {
  const { numRecipes, recipesPerPage, handlePaginationButtonClick } = props;
  const numPages = Math.ceil(numRecipes / recipesPerPage);
  const pageButtons: JSX.Element[] = [];

  // If numRecipes is 0, display a single button with pageNum of 1 and disabled.
  if (numRecipes === 0) {
    pageButtons.push(
      <PaginationButton
        key={1}
        pageNum={1}
        disabled={true}
        handlePaginationButtonClick={handlePaginationButtonClick}
      />
    );
  }

  for (let i = 1; i <= numPages; i++) {
    pageButtons.push(
      <PaginationButton
        key={i}
        pageNum={i}
        disabled={numPages === 1}
        handlePaginationButtonClick={handlePaginationButtonClick}
      />
    );
  }

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={numPages === 1}>
        &larr;
      </button>
      {pageButtons}
      <button className="pagination-button" disabled={numPages === 1}>&rarr;</button>
    </div>
  )
}

export default Pagination