import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Main from './components/main/Main'
import useWhyDidYouUpdate from 'utils/useWhyDidYouUpdate';
import { useGlobalStateStore } from 'utils/store';

// global state store
// zustand


function App() {

  const navigate = useNavigate();

  // TODO appropriate for global state?
  // State
  const setSearchValue = useGlobalStateStore(state => state.setSearchValue)
  const searchValue = useGlobalStateStore(state => state.searchValue)
  const setCuisine = useGlobalStateStore(state => state.setCuisine)
  const cuisine = useGlobalStateStore(state => state.cuisine)

  // TODO consider which of these (all?) is appropriate to move into global state
  // const setPageNum = useGlobalStateStore(state => state.setPageNum)
  // const pageNum = useGlobalStateStore(state => state.pageNum)
  const [pageNum, setPageNum] = useState<number>(1);
  console.log("🚀 ~ file: App.tsx:30 ~ App ~ pageNum:", pageNum)
  const [url, setUrl] = useState('');
  console.log("🚀 ~ file: App.tsx:32 ~ App ~ url:", url)

  // This function should change the state as the user types in the
  // search bar. useEffect should navigate to that url.
  const handleSearchBarChange = useCallback((value: string | null) => {
    setPageNum(1);
    setSearchValue(value);
  }, []);

  // This function should change the state as the user clicks pagination
  // buttons. useEffect should navigate to that url.
  const handlePaginationButtonClick = useCallback((page: number) => {
    setPageNum(page);
  }, [])

  const handlePaginationLeftArrowClick = useCallback((page: number) => {
    let newPage = page - 1;

    if (newPage < 1) {
      return;
    }
    setPageNum(newPage);
  }, [])

  const handlePaginationRightArrowClick = useCallback((page: number, numPages: number) => {
    console.log("Inside handlePaginationRightArrowClick function.");
    let newPage = page + 1;

    if (newPage > numPages) {
      return;
    }
    setPageNum(newPage);
  }, [])

  // This function should change the state as the user changes cuisine.
  // useEffect should navigate to that url.
  const handleCuisineButtonClick = useCallback((cuisine: string | null, cuisineIsSelected: boolean) => {
    setPageNum(1);

    // If a cuisine is already selected, unselect it
    // Else, set the cuisine.
    if (cuisineIsSelected) {
      setCuisine(null);
    } else {
      setCuisine(cuisine);
    }
  }, [])

  // Function for updating the url by passing the searchValue & pageNum
  useEffect(() => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('searchValue', searchValue || '');
    urlSearchParams.set('page', pageNum.toString());
    if (cuisine) {
      urlSearchParams.set('cuisine', cuisine);
    } else {
      urlSearchParams.set('cuisine', '');
    }
    const newUrl = '?' + urlSearchParams.toString();

    if (newUrl !== url) {
      setUrl(newUrl);
      navigate(newUrl);
    }

  }, [searchValue, pageNum, cuisine, url]);

  useWhyDidYouUpdate("App", {
    searchValue,
    pageNum,
    cuisine,
    url,
    handleSearchBarChange,
    handlePaginationButtonClick,
    handleCuisineButtonClick
  })
  return (
    <div className="App">
      <Layout
        handleSearchBarChange={handleSearchBarChange}>
        <Main
          pageNum={pageNum}
          url={url}
          handlePaginationButtonClick={handlePaginationButtonClick}
          handlePaginationLeftArrowClick={handlePaginationLeftArrowClick}
          handlePaginationRightArrowClick={handlePaginationRightArrowClick}
          handleCuisineButtonClick={handleCuisineButtonClick} />
      </Layout>
    </div>
  );
}

export default App;
