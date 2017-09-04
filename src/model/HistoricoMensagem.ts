import mongoose = require('mongoose');
import IHistoricoMensagem from './IHistoricoMensagem';
import HistoricoMensagemSchema from './HistoricoMensagemSchema';

interface IHistoricoMensagemModel extends IHistoricoMensagem, mongoose.Document { }

/**
 * Classe que modela um histórico de mensagens recebidas pelos dispositivos
 */
const HistoricoMensagem = mongoose.model<IHistoricoMensagemModel>('HistoricoMensagem', HistoricoMensagemSchema);

export default HistoricoMensagem;
