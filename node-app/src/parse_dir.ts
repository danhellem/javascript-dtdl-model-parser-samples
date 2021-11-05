import { ModelParser, ModelParserFactory,ModelParsingOption, } from 'azure-iot-parser-node';
import { ModelDict, ParsingError, ParsingException, } from 'azure-iot-parser-node/dist/src/parser';
import * as fs from 'fs';

const dir: string = './src/dtdl-models';

function main() {
  parseModelAsync();
}

const parseModelAsync = async () => {
  const isExists: boolean = fs.existsSync(dir);

  // if directory does not exist, stop process
  if (!fs.existsSync(dir)) {
    console.log('\x1b[33m%s\x1b[0m', `Directory '${dir}' does not exist`);
    process.exit(1);
  }

  const files = await fs.readdirSync(dir);
  const parser: ModelParser = ModelParserFactory.create(ModelParsingOption.None);
  let dtdl: string[] = [];

  // loop through each file in dir and build an array of models
  files.forEach(async (file: string) => {    
    dtdl.push(fs.readFileSync(`${dir}/${file}`, 'utf-8'));    
  });
  
  // run parser against full array
  const modelDict = await parser
    .parse(dtdl)
    .then((modelDict: ModelDict) => {      
      console.log('Parsing model');
      Object.entries(modelDict).forEach(([key, value]) => {
        console.log(`[Validated] ${key}`);
      });
      console.log('\x1b[32m%s\x1b[0m', 'Parsing complete');
    })
    .catch((reason: ParsingException) => {
      console.log('\x1b[31m%s\x1b[0m', 'Errors parsing file:');
      console.log(reason);      
      process.exit(1);
    });     
};

main();
