import './pagination.css';
//import { useNavigate } from 'react-router';

type PaginationButtonProps = {
    pageNum: number;
    disabled?: boolean;
    handlePaginationButtonClick: (page: number) => void;
}

function PaginationButton(props: PaginationButtonProps) {
    const { pageNum, disabled, handlePaginationButtonClick } = props;
    //const navigate = useNavigate();
    //console.log("🚀 ~ file: PaginationButton.tsx:15 ~ PaginationButton ~ navigate:", navigate)




    //console.log("🚀 ~ file: PaginationButton.tsx:24 ~ PaginationButton ~ url:", url)

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