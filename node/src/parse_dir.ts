import {ModelParser, ModelParserFactory, ModelParsingOption} from 'azure-iot-parser-node';
import FactoryModels from './dtdl-models/FactoryFloorInterface.json';

function main() {   
    console.log('getting started...');
    parseModelAsync();
}

const parseModelAsync = async () => {
    const parser: ModelParser = ModelParserFactory.create(ModelParsingOption.PermitAnyTopLevelElement);
    const modelDict = await parser.parse(FactoryModels.map((m: any) => JSON.stringify(m)));
    console.log(modelDict);
}

main();
