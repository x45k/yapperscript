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
  'definingAnAsynchronousFunctionThatReturnsAPromise': 'async',
  'usingAwaitToWaitForAPromiseToResolve': 'await',
  'definingAGetterForAnObjectProperty': 'get',
  'definingASetterForAnObjectProperty': 'set',
  'bindingAnEventHandlerToAnElement': 'addEventListener',
  'removingAnEventHandlerFromAnElement': 'removeEventListener',
  'throwingAnErrorManually': 'throw',
  'definingAFunctionThatExecutesImmediatelyAfterTheScriptIsLoaded': 'onload',
  'checkingIfAnObjectIsAnArray': 'Array.isArray',
  'definingARegularExpressionForPatternMatching': 'RegExp',
  'callingAFunctionAfterThePageIsLoaded': 'window.onload',
  'storingAValueInLocalStorage': 'localStorage.setItem',
  'retrievingAValueFromLocalStorage': 'localStorage.getItem',
  'removingAValueFromLocalStorage': 'localStorage.removeItem',
  'definingAMethodForAnArrayToTransformItsElements': 'map',
  'definingAMethodForAnArrayToFilterItsElements': 'filter',
  'definingAMethodForAnArrayToReduceItsElements': 'reduce',
  'definingAMethodForAnArrayToFindTheFirstMatch': 'find',
  'definingAMethodForAnArrayToCheckAllConditions': 'every',
  'definingAMethodForAnArrayToCheckAnyCondition': 'some',
  'bindingAFunctionToBeCalledWhenTheMouseIsClicked': 'onclick',
  'definingAClassThatExtendsAnotherClass': 'extends',
  'definingAClassMethod': 'method',
  'creatingANewSetDataStructure': 'new Set',
  'creatingANewMapDataStructure': 'new Map',
  'checkingIfAKeyExistsInAMap': 'has',
  'iteratingOverEntriesInAMap': 'forEach',
  'definingAPropertyInAClass': 'property',
  'creatingADebuggerStatementThatPausesCodeExecution': 'debugger',
  'destructuringAnArrayOrObjectToExtractValues': 'destructuring',
  'bringingInAFileToAccessItsContentsOrFunctions': 'require',
  'exportingAModuleForUseInAnotherFile': 'module.exports'
};

function convertYapperscriptToJS(yapperscript) {
  for (const [yapper, js] of Object.entries(keywordsMap)) {
    const regex = new RegExp(`\\b${yapper}\\b`, 'g');
    yapperscript = yapperscript.replace(regex, js);
  }
  return yapperscript;
}

function convertJSToYapperscript(jsCode) {
  for (const [yapper, js] of Object.entries(keywordsMap)) {
    const regex = new RegExp(`\\b${js}\\b`, 'g');
    jsCode = jsCode.replace(regex, yapper);
  }
  return jsCode;
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
  // this is just for funnies
  console.log('Please send 100 btc to me to use this function.')
  /*const yapperscriptCode = fs.readFileSync(filePath, 'utf-8');
  const jsCode = convertYapperscriptToJS(yapperscriptCode);

  const jsFilePath = path.basename(filePath, '.yapper') + '.js';

  fs.writeFileSync(jsFilePath, jsCode, 'utf-8');
  console.log(`Converted JavaScript has been written to ${jsFilePath}`);*/
}

function convertJSToYapperscriptFile(filePath) {
  const jsCode = fs.readFileSync(filePath, 'utf-8');
  const yapperscriptCode = convertJSToYapperscript(jsCode);

  const yapperFilePath = path.basename(filePath, '.js') + '.yapper';

  fs.writeFileSync(yapperFilePath, yapperscriptCode, 'utf-8');
  console.log(`Converted Yapperscript has been written to ${yapperFilePath}`);
}

const args = process.argv.slice(2);
const filePath = args.find(arg => arg.endsWith('.yapper') || arg.endsWith('.js'));
const convertToJSFlag = args.includes('--converttojs');
const convertToYapperFlag = args.includes('--converttoyapper');

if (filePath && path.extname(filePath) === '.yapper') {
  if (convertToJSFlag) {
    convertYapperscriptToJSFile(filePath);
  } else {
    executeYapperscriptFile(filePath);
  }
} else if (convertToYapperFlag && filePath && path.extname(filePath) === '.js') {
  convertJSToYapperscriptFile(filePath);
} else {
  console.log('Please provide a valid .yapper or .js file with the correct flag.');
}
