import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Main from './components/main/Main'


function App() {

  const navigate = useNavigate();

  // State
  const [searchValue, setSearchValue] = useState<string | null>(null);
  console.log("🚀 ~ file: App.tsx:26 ~ App ~ searchValue:", searchValue)
  const [isSearchbarModified, setIsSearchbarModified] = useState<boolean>(false);
  console.log("🚀 ~ file: App.tsx:28 ~ App ~ isSearchbarModified:", isSearchbarModified)
  const [pageNum, setPageNum] = useState<number>(1);
  console.log("🚀 ~ file: App.tsx:30 ~ App ~ pageNum:", pageNum)
  const [cuisine, setCuisine] = useState<string | null>(null);
  console.log("🚀 ~ file: App.tsx:30 ~ App ~ cuisine:", cuisine)
  const [url, setUrl] = useState('');
  console.log("🚀 ~ file: App.tsx:32 ~ App ~ url:", url)

  // This function should change the state as the user types in the
  // search bar. useEffect should navigate to that url.
  const handleSearchBarChange = (value: string | null) => {
    setIsSearchbarModified(true);
    setPageNum(1);
    setSearchValue(value);
  };

  // This function should change the state as the user clicks pagination
  // buttons. useEffect should navigate to that url.
  const handlePaginationButtonClick = (page: number) => {
    setIsSearchbarModified(false);
    setPageNum(page);
  }

  // This function should change the state as the user changes cuisine.
  // useEffect should navigate to that url.
  const handleCuisineButtonClick = (cuisine: string | null, cuisineIsSelected: boolean) => {
    setPageNum(1);

    // If a cuisine is already selected, unselect it
    // Else, set the cuisine.
    if (cuisineIsSelected) {
      setCuisine(null);
    } else {
      setCuisine(cuisine);
    }
  }

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


  return (
    <div className="App">
      <Layout
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchBarChange={handleSearchBarChange}>
        <Main
          searchValue={searchValue}
          isSearchbarModified={isSearchbarModified}
          pageNum={pageNum}
          cuisine={cuisine}
          url={url}
          setCuisine={setCuisine}
          handlePaginationButtonClick={handlePaginationButtonClick}
          handleCuisineButtonClick={handleCuisineButtonClick} />
      </Layout>
    </div>
  );
}

export default App;
