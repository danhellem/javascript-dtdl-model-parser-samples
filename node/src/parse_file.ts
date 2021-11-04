import { ModelParser, ModelParserFactory, ModelParsingOption, } from 'azure-iot-parser-node';
import { ModelDict, ParsingError, ParsingException, } from 'azure-iot-parser-node/dist/src/parser';
import FactoryModels from './dtdl-models/FactoryFloorInterface.json';

function main() {    
  parseModelAsync();
}

const parseModelAsync = async () => { 
  const parser: ModelParser = ModelParserFactory.create(ModelParsingOption.PermitAnyTopLevelElement);

  const modelDict = await parser
    .parse(FactoryModels.map((m: any) => JSON.stringify(m)))
    .then((modelDict: ModelDict) => {
      console.log('Parsing model');
      Object.entries(modelDict).forEach(([key, value]) => {
        console.log(`[Validated] ${key}`);
      });
    })
    .catch((reason: ParsingException) => {
      console.log('\x1b[31m%s\x1b[0m', 'Errors parsing file:');
      console.log('');
      reason.errors.forEach((value: ParsingError) => {
        console.log(value);
        console.log('');
      });
      process.exit(1);
    });    
};

main();
