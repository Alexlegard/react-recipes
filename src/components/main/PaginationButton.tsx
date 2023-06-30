import './pagination.css';

type PaginationButtonProps = {
    pageNum: number;
    disabled?: boolean;
    handlePaginationButtonClick: (page: number) => void;
}

function PaginationButton(props: PaginationButtonProps) {
    const { pageNum, disabled, handlePaginationButtonClick } = props;

    const handleClick = () => {
        handlePaginationButtonClick(pageNum);
    };

    return (
        <button
            className="pagination-button"
            disabled={disabled}
            onClick={handleClick}>
            {pageNum}
        </button>
    );
}

export default PaginationButton;