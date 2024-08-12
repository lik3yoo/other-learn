const Command = require("common-bin")

class Main extends Command {

  constructor(rawArgv) {
    super(rawArgv)
    // console.log('rawArgv',rawArgv)
    console.log(this, 'this')
    // this.yargs.usage("Usage: $0 <command> [options]")
    // this.yargs.commandDir("cmds")
  } 
}

module.exports = Main