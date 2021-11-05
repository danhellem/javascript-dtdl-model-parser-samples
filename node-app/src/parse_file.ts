import { ModelParser, ModelParserFactory, ModelParsingOption, ModelDict, ParsingError} from 'azure-iot-parser-node';
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

main();
