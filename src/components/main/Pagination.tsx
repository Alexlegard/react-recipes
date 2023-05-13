import './pagination.css';
import PaginationButton from './PaginationButton';

type PaginationProps = {
  numRecipes: number;
  recipesPerPage: number;
};

function Pagination(props: PaginationProps) {

  const { numRecipes, recipesPerPage } = props;
  const numPages = Math.ceil(numRecipes / recipesPerPage);
  const pageButtons: JSX.Element[] = [];
  for (let i = 1; i <= numPages; i++) {
    console.log("🚀 ~ file: Pagination.tsx:16 ~ Pagination ~ numPages === 1:", numPages === 1)
    pageButtons.push(
      <PaginationButton
        key={i}
        pageNum={i}
        disabled={numPages === 1} />
    );
  }

  console.log("🚀 ~ file: Pagination.tsx:30 ~ Pagination ~ numPages === 1:", numPages === 1)

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