type PaginationLeftArrowProps = {
    pageNum: number,
    disabled: boolean;
    handlePaginationLeftArrowClick: (page: number) => void;
};

function PaginationLeftArrow(props: PaginationLeftArrowProps) {
    const { pageNum, disabled, handlePaginationLeftArrowClick } = props;

    const handleClick = () => {
        handlePaginationLeftArrowClick(pageNum);
    }

    return (
        <button
            className="pagination-button"
            disabled={disabled}
            onClick={handleClick}>
            &larr;
        </button>
    );
}

export default PaginationLeftArrow;