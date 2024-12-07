# Yapperscript

## What is yapperscript?
Yapperscript is a coding language based off of javascript, which allows you to use javascript, but with renamed functions for simplicity (for example, const turns into declaringAConstantThatCannotBeReassignedAfterInitialization).

## Why should I use yapperscript?
Yapperscript is specially designed to code quicker. Every renamed function is easy to remember, especially for beginners.

## How do I install and use yapperscript?
To install yapperscript, follow the steps as follows:
1. Ensure you have nodejs installed:
```
node --version
```
2. Add the interpreter to your directory:
```bash
curl -O https://raw.githubusercontent.com/x45k/yapperscript/refs/heads/main/interpreter.js
```
3. Run your yapperscript code:
```bash
node interpreter.js youryapperfile.yapper
```

## But a function isn't long enough!
If you come across a function that isn't long enough, or a function you use that isn't in yapperscript, feel free to open a pull request with the function renamed/added.

## Where is the documentation for yapperscript?
Yapperscript does not have a specially designed documentation page. However, you can look at [the interpreter file](https://github.com/x45k/yapperscript/tree/main/interpreter.js#L4), and easily locate the renamed function you are desiring.

## But yapperscript is hard to understand!
If yapperscript feels over-complicated, try learning more javascript. It will both make you understand the syntax better, and realize how much more efficient yapperscript is.

## It won't let me import another .yapper file!
Yapperscript is designed to be more readable, which is why we do not support importing other yapper files (NPM packages still work!).

## How can I convert a javascript file into yapperscript?
Just run node interpreter.js --converttoyapper yourjavascriptfile.js, and it will convert into a yapper file!

## How can I convert yapperscript into javascript?
We do not and will not support converting yapperscript to javascript. This is because yapperscript is superior to javascript in every single way, leaving no reason to want to convert into javascript (try running node interpreter.js --converttojs youryapperscriptfile.yapper :D).

## I found an unknown error in yapperscript!
If you have located an error in yapperscript, please open an issue and explain your problem.