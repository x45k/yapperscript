const fs = require('fs');
const path = require('path');

const keywordsMap = {
  'creatingAndInitialisingAVariableToStoreAValue': 'let',
  'definingAndDeclaringAFunctionThatPerformsASpecificTask': 'function',
  'sendingInformationToTheConsoleForTheUserToSeeAndDebug': 'console.log',
  'returningAValueFromAFunctionSoItCanBeUsedElsewhereInTheCode': 'return',
  'definingTheBodyOfTheFunctionThatPerformsTheDesiredOperation': 'function',
  'printingTextToTheConsoleForUserOutputAndTroubleshooting': 'console.log',
  'declaringAConstantThatCannotBeReassignedAfterInitialization': 'const',
  'creatingAClassToDefineATypeWithPropertiesAndMethods': 'class',
  'definingAConstructorForAClassToInitializeProperties': 'constructor',
  'creatingAConditionThatExecutesCodeBasedOnATrueOrFalseExpression': 'if',
  'handlingAlternativeConditionsWhenTheMainConditionIsFalse': 'else',
  'definingAConditionThatIsEvaluatedAtTheEndOfEachIteration': 'while',
  'loopingOverAnArrayOrObjectToPerformActionsOnEachElement': 'for',
  'checkingForErrorsAndHandlingThemGracefully': 'try',
  'definingTheErrorHandlingBlockWhenAnErrorOccurs': 'catch',
  'definingAFunctionThatExecutesOnceAfterAConditionIsMet': 'setTimeout',
  'definingAFunctionThatRepeatsItselfAtIntervals': 'setInterval',
  'definingAnArrowFunctionWithImplicitReturn': '()=>',
  'creatingANewInstanceOfAClass': 'new',
  'definingAnObjectWithKeyValuePairs': 'object',
  'checkingIfAValueExistsInAnArray': 'includes',
  'retrievingTheTypeOfAValue': 'typeof',
  'definingAFunctionThatWillBeCalledImmediately': 'IIFE',
  'importingModulesOrFunctionsFromOtherFiles': 'import',
  'exportingFunctionsOrVariablesFromAFileForUseElsewhere': 'export',
};

function convertYapperscriptToJS(yapperscript) {
  for (const [yapper, js] of Object.entries(keywordsMap)) {
    const regex = new RegExp(`\\b${yapper}\\b`, 'g');
    yapperscript = yapperscript.replace(regex, js);
  }
  return yapperscript;
}

function executeYapperscriptFile(filePath) {
  const yapperscriptCode = fs.readFileSync(filePath, 'utf-8');
  const jsCode = convertYapperscriptToJS(yapperscriptCode);

  try {
    eval(jsCode);
  } catch (error) {
    console.error('Error executing code:', error);
  }
}

function convertYapperscriptToJSFile(filePath) {
  const yapperscriptCode = fs.readFileSync(filePath, 'utf-8');
  const jsCode = convertYapperscriptToJS(yapperscriptCode);

  const jsFilePath = path.basename(filePath, '.yapper') + '.js';

  fs.writeFileSync(jsFilePath, jsCode, 'utf-8');
  console.log(`Converted JavaScript has been written to ${jsFilePath}`);
}

const args = process.argv.slice(2);
const filePath = args.find(arg => arg.endsWith('.yapper'));
const convertFlag = args.includes('--converttojs');

if (filePath && path.extname(filePath) === '.yapper') {
  if (convertFlag) {
    convertYapperscriptToJSFile(filePath);
  } else {
    executeYapperscriptFile(filePath);
  }
} else {
  console.log('Please provide a valid .yapper file');
}
