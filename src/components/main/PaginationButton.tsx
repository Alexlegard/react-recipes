import './pagination.css';
import { useNavigate } from 'react-router';

type PaginationButtonProps = {
    pageNum: number;
    disabled?: boolean;
}

function PaginationButton(props: PaginationButtonProps) {
    const { pageNum, disabled } = props;
    const navigate = useNavigate();

    function navigateToPage(pageNum: number) {
        console.log("🚀 ~ file: PaginationButton.tsx:14 ~ navigateToPage ~ pageNum:", pageNum)
        navigate(`/?page=${pageNum}`);
        window.location.reload();
    }

    return (
        <button
            className="pagination-button"
            disabled={disabled}
            onClick={() => navigateToPage(pageNum)}>
            {pageNum}
        </button>
    );
}

export default PaginationButton;