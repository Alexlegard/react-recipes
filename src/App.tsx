import { useState } from 'react';
import './App.css'
import Layout from './components/Layout'
import Main from './components/main/Main'


function App() {
  // Somehow change default value "null" to the value from the url
  // TO-DO: We might have to add some logic to reset the page number to
  // the first page whenever we change the search value.

  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const paramValue = searchParams.get('searchValue');
  console.log("🚀 ~ file: App.tsx:16 ~ App ~ paramValue:", paramValue)


  const [searchValue, setSearchValue] = useState<string | null>(paramValue || null);
  

  return (
    <div className="App">
      <Layout searchValue={searchValue} setSearchValue={setSearchValue}>
        <Main searchValue={searchValue} />
      </Layout>
    </div>
  );
}

export default App;
