type PaginationRightArrowProps = {
    pageNum: number;
    numPages: number;
    disabled: boolean;
    handlePaginationRightArrowClick: (page: number, numPages: number) => void;
};

function PaginationRightArrow(props: PaginationRightArrowProps) {
    const { pageNum,
        numPages,
        disabled,
        handlePaginationRightArrowClick } = props;

    const handleClick = () => {
        console.log("Hello");
        handlePaginationRightArrowClick(pageNum, numPages);
    }

    return (
        <button
            className="pagination-button"
            disabled={disabled}
            onClick={handleClick}>
            &rarr;
        </button>
    );
}

export default PaginationRightArrow;