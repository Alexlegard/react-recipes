import { useState } from 'react';
import './App.css'
import Layout from './components/Layout'
import Main from './components/main/Main'


function App() {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  return (
    <div className="App">
      <Layout searchValue={searchValue} setSearchValue={setSearchValue}>
        <Main searchValue={searchValue} />
      </Layout>
    </div>
  );
}

export default App;
