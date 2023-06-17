import './pagination.css';
import { useNavigate } from 'react-router';

type PaginationButtonProps = {
    pageNum: number;
    disabled?: boolean;
    searchValue: string | null;
    cuisine: string | null;
}

function PaginationButton(props: PaginationButtonProps) {
    const { pageNum, disabled, searchValue, cuisine } = props;
    console.log("🚀 ~ file: PaginationButton.tsx:13 ~ PaginationButton ~ cuisine:", props.cuisine)
    console.log("🚀 ~ file: PaginationButton.tsx:13 ~ PaginationButton ~ searchValue:", searchValue)
    const navigate = useNavigate();



    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set('page', String(pageNum));
    urlSearchParams.set('cuisine', cuisine || '');
    urlSearchParams.set('searchValue', searchValue || '');

    const url = `/?${urlSearchParams.toString()}`;

    console.log("🚀 ~ file: PaginationButton.tsx:26 ~ PaginationButton ~ url:", url)
    
    function navigateToPage(pageNum: number) {
        navigate(url);
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