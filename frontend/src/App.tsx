import { SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e);
  }

  const onClick = async (e: SyntheticEvent) => {
      const result = await searchCompanies(search);
      if (typeof result === 'string') {
          setServerError(result);
          console.log(serverError); 
      } else if (Array.isArray(result.data)) {
          setSearchResult(result.data);
          console.log(searchResult); 
      }
  }

  return (
    <div className="App">
      <Search search={search} onClick={onClick} handleChange={handleChange} />
      {serverError && <h1>{serverError}</h1>}
      <CardList />
    </div>
  );
}

export default App;
