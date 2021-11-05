import React,  { useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';

import { ModelDict, ModelParser, ModelParserFactory, ModelParsingOption, ParsingError } from 'azure-iot-parser-node';
import FactoryModels from './dtdl-models/FactoryFloorInterface.json';

function App() {

  useEffect(() => {

  const parseModelAsync = async () => {
    const parser: ModelParser = ModelParserFactory.create(ModelParsingOption.PermitAnyTopLevelElement);

    await parser
      .parse(FactoryModels.map((m: any) => JSON.stringify(m)))
      .then((modelDict: ModelDict) => {
        console.log('Parsing model');
        Object.entries(modelDict).forEach(([key, value]) => {
          console.log(`[Validated] ${key}`);
        });
        console.log('\x1b[32m%s\x1b[0m', 'Parsing complete');
      })
      .catch((reason: any) => {
        console.log('\x1b[31m%s\x1b[0m', 'Errors parsing file:');
        console.log('');
        reason.errors.forEach((value: ParsingError) => {
          console.log(value);
          console.log('');
        });
        process.exit(1);
      });
  };

  parseModelAsync();

}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
