import mongoose = require("mongoose");
import IConfiguracao from './IConfiguracao';
import ConfiguracaoSchema from './ConfiguracaoSchema';

interface IConfiguracaoModel extends IConfiguracao, mongoose.Document { }

/**
 * Classe que modela uma configuracao, permitindo que sejam configurados dados para uso das apis
 */
var Configuracao = mongoose.model<IConfiguracaoModel>("Configuracao", ConfiguracaoSchema);

export default Configuracao;