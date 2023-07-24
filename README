
# Logger Sequelize

biblioteca para ter controle de logs em seu projeto



## Installation

Use the package manager [npm] to install foobar.
```bash
npm install
```

# Como criar tabela de log

```node.js
const LogsModel = require("logger-sequelize/src/models/LogsModel");

await LogsModel.sync();

```

# Criando logs

```node.js
const {Logger} = require("logger-sequelize/src/app");
const {EnumLogs} = require("logger-sequelize/src/app");

 await Logger.createLog("MusicsController.createMusic", "Música criado com sucesso!", EnumLogs.CREATED);

```

# EnumLogs
```node.js
const LogTypeEnum = {
    INFO: 'INFO',
    ERROR: 'ERROR',
    WARNING: 'WARNING',
    DEBUG: 'DEBUG',
    CREATED: 'CREATED',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
};

```



## License

[MIT](https://choosealicense.com/licenses/mit/)