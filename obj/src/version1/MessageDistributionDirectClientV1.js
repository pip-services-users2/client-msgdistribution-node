"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDistributionDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
//import { IMessageDistributionController } from 'service-msgdistribution-node';
class MessageDistributionDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor("service-msgdistribution", "controller", "*", "*", "*"));
        let thisConfig = pip_services3_commons_nodex_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    sendMessage(correlationId, recipient, message, parameters, method) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let timing = this.instrument(correlationId, 'msg_distribution.send_message');
            try {
                yield this._controller.sendMessage(correlationId, recipient, message, parameters, method);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    sendMessages(correlationId, recipients, message, parameters, method) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let timing = this.instrument(correlationId, 'msg_distribution.send_messages');
            try {
                yield this._controller.sendMessages(correlationId, recipients, message, parameters, method);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    sendMessageToRecipient(correlationId, recipientId, subscription, message, parameters, method) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipient');
            try {
                yield this._controller.sendMessageToRecipient(correlationId, recipientId, subscription, message, parameters, method);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    sendMessageToRecipients(correlationId, recipientIds, subscription, message, parameters, method) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipients');
            try {
                yield this._controller.sendMessageToRecipients(correlationId, recipientIds, subscription, message, parameters, method);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.MessageDistributionDirectClientV1 = MessageDistributionDirectClientV1;
//# sourceMappingURL=MessageDistributionDirectClientV1.js.map