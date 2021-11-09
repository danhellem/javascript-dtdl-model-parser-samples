# Introduction 
This project demonstrates use of the JavaScript DTDL parser. The npm package is available [here](comming soon). These are samples on how to use the the JavaScript dtdl parser in a node or react project to validate dtdl models.

# What the code demonstrates
* Basic use of the DTDL parser for validation of DTDL
* Basic use of the object model to access information about DTDL content

# Node - Getting started

After you have cloned the repo, go to the `node-app` directory.

From the command line run `yarn install` to install the node modules.

Now build and run your sample.

```bash
yarn build

node dist\src\parse_file.js
```

### Samples

Sample | Description
:------ | :------
parser_file   | Parse and validates the dtdl model for a given file
parser_dir  | Parse and validates all models contained in a given directory

# React - Getting started

After you have cloned the repo, go to the `react-app` directory.

From the command line run `yarn install` to install the node modules.

Run the sample.

```bash
yarn start
```

This builds and runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Click `F12` to open the browser dev tools console log.  you should see the results of the parser sample. To view the parser sample code, go to the `src\App.tsx` file.