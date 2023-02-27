import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "snipper-creator" is now active!');

	let disposable = vscode.commands.registerCommand('snipper-creator.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from snipper creator!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
