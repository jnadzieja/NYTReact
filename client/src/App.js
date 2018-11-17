import React from "react";
import { Columns, Column } from './components/Grid'
import TitleBar from './components/TitleBar/TitleBar';
import SearchForm from './components/SearchForm/SearchForm';
import Results from './components/Results/Results'
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Columns>
        <Column>
          <TitleBar />
          <SearchForm />
          <Results />
        </Column>
      </Columns>
    )
  }
}

export default App;
