import mongoose = require("mongoose");
import ITrigger from './ITrigger';
import TriggerSchema from './TriggerSchema';

interface ITriggerModel extends ITrigger, mongoose.Document { }

/**
 * Modela o registro de uma trigger, onde avaliamos um valor, e verificamos se ele esta em algum range ou é igual a algo
 * para acionar a ação atrelada
 */
var Trigger = mongoose.model<ITriggerModel>("Trigger", TriggerSchema);

export default Trigger;