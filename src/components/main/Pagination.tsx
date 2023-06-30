import './pagination.css';
import PaginationButton from './PaginationButton';
import PaginationLeftArrow from './PaginationLeftArrow';
import PaginationRightArrow from './PaginationRightArrow';

type PaginationProps = {
  pageNum: number,
  numRecipes: number;
  recipesPerPage: number;
  handlePaginationButtonClick: (page: number) => void;
  handlePaginationLeftArrowClick: (page: number) => void;
  handlePaginationRightArrowClick: (page: number, numPages: number) => void;
};

function Pagination(props: PaginationProps) {
  const { pageNum,
    numRecipes,
    recipesPerPage,
    handlePaginationButtonClick,
    handlePaginationLeftArrowClick,
    handlePaginationRightArrowClick } = props;
  const numPages = Math.ceil(numRecipes / recipesPerPage);
  const pageButtons: JSX.Element[] = [];
  const arrowsDisabled = (numPages === 1);

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
      <PaginationLeftArrow
        pageNum={pageNum}
        disabled={arrowsDisabled}
        handlePaginationLeftArrowClick={handlePaginationLeftArrowClick}
      />
      {pageButtons}
      <PaginationRightArrow
        pageNum={pageNum}
        numPages={numPages}
        disabled={arrowsDisabled}
        handlePaginationRightArrowClick={handlePaginationRightArrowClick}
      />
    </div>
  )
}

export default Pagination