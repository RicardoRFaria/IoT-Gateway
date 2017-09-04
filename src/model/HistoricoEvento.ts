import mongoose = require('mongoose');
import IHistoricoEvento from './IHistoricoEvento';
import HistoricoEventoSchema from './HistoricoEventoSchema';

interface IHistoricoEventoModel extends IHistoricoEvento, mongoose.Document { }

/**
 * Classe que modela um histórico de eventos executados quando atendidas as devidas regras
 */
const HistoricoEvento = mongoose.model<IHistoricoEventoModel>('HistoricoEvento', HistoricoEventoSchema);

export default HistoricoEvento;
