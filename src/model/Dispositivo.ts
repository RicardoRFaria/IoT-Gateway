import mongoose = require('mongoose');
import IDispositivo from './IDispositivo';
import DipositivoSchema from './DipositivoSchema';

interface IDispositivoModel extends IDispositivo, mongoose.Document { }

/**
 * Classe que modela um dispositivo, com o seu identificado e sua relação de eventos,
 * permite com base em suas identificações, delinear quais ações devem ser feitas com o evento
 */
const Dispositivo = mongoose.model<IDispositivoModel>('Dipositivo', DipositivoSchema);

export default Dispositivo;
