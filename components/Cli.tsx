import { useState, FormEvent } from 'react';

export interface CliFlag {
  text: string,
  value: string | null,
}

export interface CliSubcommand {
  text: string,
  value: string | null,
}

export interface CliCommand {
  text: string,
  value: string | null,
  callback: (command: CliCommand, outputCallback: (outputLog: string) => void) => string | void,
  subcommands: CliSubcommand[],
  flags: CliFlag[],
}

export interface CliProps {
  commands: CliCommand[]
}

export const Cli = ({ commands }: CliProps) => {

  const helpDialog = parseCliForDialog(commands);

  const [text, setText] = useState('');
  const [history, setHistory] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const command = parseCliInput(text, commands);

    if (command.text === 'help') {
      setHistory(history => history + '> help\n' + helpDialog)
      setText('');
      return;
    }

    if (command.text === 'clr') {
      setHistory('')
      setText('');
      return;
    }

    setHistory(history => history + "> " + command.text + '\n');

    command.callback(command, (outputLog: string) => setHistory(history => history + outputLog + '\n'));

    setText('');
  }

  return (
    <section className="relative flex flex-col-reverse overflow-auto max-h-80 max-w-1/2 w-screen">
      <form onSubmit={handleSubmit} className="bg-black text-white w-full p-4">
        <pre className="w-full">{history}</pre>
        <div className="flex gap-3">
          <span>{">"}</span> 
          <input 
            value={text} 
            onChange={(event) => setText(event.target.value)} 
            className="bg-black focus:outline-none cursor-default flex-1" 
            autoFocus
          /> 
        </div>
        <input type="submit" value="Submit" hidden />
      </form>
    </section>
  );
}

function parseCliInput(cliInput: string, possibleCommands: CliCommand[]): CliCommand {
  const helpCommand: CliCommand = {
    text: 'help',
    value: null,
    subcommands: [],
    flags: [],
    callback: () => {},
  };

  if (!cliInput) return helpCommand;

  const command = findCliCommand(cliInput, possibleCommands);

  if (!command) return {
    text: cliInput,
    value: null,
    subcommands: [],
    flags: [],
    callback: () => {},
  };

  const subcommand = findCliSubcommand(cliInput, command);

  const flags = findFlags(cliInput, command);

  return {
    text: command.text,
    value: command.value,
    subcommands: [subcommand],
    flags,
    callback: command.callback,
  }
}

function findCliCommand(cliInput: string, possibleCommands: CliCommand[]): CliCommand | null {
  const commandText = cliInput.split(' ')[0];
  const command = possibleCommands.find(possibleCommand => commandText === possibleCommand.text) || null;
  if (!command || command.subcommands.length) return command;
  const cliInputWithNoFlags = cleanCliInput(cliInput, { removeType: 'flags' });
  const value = cliInputWithNoFlags.split(' ')[1] || null;

  return {
    ...command,
    value,
  }
}

function findCliSubcommand(cliInput: string, command: CliCommand): CliSubcommand | null {
  if (!command.subcommands.length) return null;

  const cliInputWithNoFlags = cleanCliInput(cliInput, { removeType: 'flags' });

  const subcommandText = cliInputWithNoFlags.split(' ')[1];

  if (!subcommandText) return null;

  return command.subcommands.find(possibleSubcommand => subcommandText === possibleSubcommand.text) || null;
}

function findFlags(cliInput: string, command: CliCommand): CliFlag[] {
  if (!command.flags.length) return [];

  const flagArgs = cliInput.split(' ').filter(arg => isArgFlag(arg));

  return flagArgs.map(flagArg => parseFlagArg(flagArg));
}

function parseFlagArg(flagArg: string): CliFlag {
  const cleanedFlagArg = flagArg.replace('--', '');
  const splitFlagArg = cleanedFlagArg.split('=');

  const flagText = splitFlagArg[0];
  const flagValue = splitFlagArg[1] || null;

  return {
    text: flagText,
    value: flagValue,
  }
}

function cleanCliInput(cliInput: string, opts: { removeType: 'flags' }): string {
  if (opts.removeType === 'flags') {
    return cliInput.split(' ').filter(arg => !isArgFlag(arg)).join(' ');
  }
}

function isArgFlag(str: string): boolean {
  if (str[0] === '-' && str[1] === '-') return true;
  return false;
}

function parseCliForDialog(commands: CliCommand[]): string {
  const commandsAsLines = commands.map(command => {
    let by = 1;
    return indent(by) + command.text + '\n\n' +
      indent(by) + 'Subcommands:\n\n' +
      indent(by + 1) + parseCliSubcommandsForDialog(command.subcommands, by) + '\n' +
      indent(by) + 'Flags:\n\n' +
      parseCliFlagsForDialog(command.flags, by);
  });

  return '-- Help -------------- \n\nCommands: \n\n' + commandsAsLines.join();
}

function indent(by: number = 0): string {
  let spacing = '';
  for (let i = 0; i < by; i++) {
    spacing += '  ';
  }
  return spacing;
}

function parseCliFlagsForDialog(flags: CliFlag[], indentBy: number): string {
  return flags.map(flag => `${indent(indentBy)}--${flag.text}\n`).join();
}

function parseCliSubcommandsForDialog(subcommands: CliSubcommand[], indentBy: number): string {
  return subcommands.map(subcommand => `${indent(indentBy)}${subcommand.text}\n`).join();
}
