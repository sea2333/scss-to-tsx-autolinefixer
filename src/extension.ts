import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  // vscode.window.showInformationMessage('已激活!');
  const disposable = vscode.workspace.onDidSaveTextDocument((document) => {
    if (document.languageId === 'scss') {
      const scssFile = document.fileName;
      const scssDir = path.dirname(scssFile);
      const tsxFile = path.join(scssDir, 'index.tsx');
	  	
      if (fs.existsSync(tsxFile)) {
        const scssFileMTime = fs.statSync(scssFile).mtime;
        const tsxFileMTime = fs.statSync(tsxFile).mtime;

        if (scssFileMTime > tsxFileMTime) {
          let tsxFileContent = fs.readFileSync(tsxFile, 'utf-8');

          // let newlineCount = 0;
          // let index = tsxFileContent.length - 1;

          // while (index >= 0 && tsxFileContent[index] === '\n') {
          //   newlineCount++;
          //   index--;
          // }

          // if (newlineCount >= 2) {
          //   tsxFileContent = tsxFileContent.slice(0, -1);
          //   console.log(`Removed one newline from: ${tsxFile}`);
          // } else {
          //   tsxFileContent += '\n';
          //   console.log(`Added a newline to: ${tsxFile}`);
          // }

          // fs.writeFileSync(tsxFile, tsxFileContent, 'utf-8');
          const newTsxFileContent = tsxFileContent + '\n';
          fs.writeFileSync(tsxFile, newTsxFileContent, 'utf-8');
          fs.writeFileSync(tsxFile, tsxFileContent, 'utf-8');
        }
      } else {
        console.log(`No index.tsx found in the same directory as222 ${scssFile}`);
      }
    }
  });

  context.subscriptions.push(disposable);

}

export function deactivate() {}
