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
exports.MessageDistributionCommandableGrpcClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
class MessageDistributionCommandableGrpcClientV1 extends pip_services3_grpc_nodex_1.CommandableGrpcClient {
    constructor(config) {
        super('v1/msg_distribution');
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
                yield this.callCommand('send_message', correlationId, {
                    recipient: recipient,
                    message: message,
                    parameters: parameters,
                    method: method
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    sendMessages(correlationId, recipients, message, parameters, method) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let timing = this.instrument(correlationId, 'msg_distribution.send_messages');
            try {
                yield this.callCommand('send_messages', correlationId, {
                    recipients: recipients,
                    message: message,
                    parameters: parameters,
                    method: method
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    sendMessageToRecipient(correlationId, recipientId, subscription, message, parameters, method) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipient');
            try {
                yield this.callCommand('send_message_to_recipient', correlationId, {
                    recipient_id: recipientId,
                    subscription: subscription,
                    message: message,
                    parameters: parameters,
                    method: method
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    sendMessageToRecipients(correlationId, recipientIds, subscription, message, parameters, method) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipients');
            try {
                yield this.callCommand('send_message_to_recipients', correlationId, {
                    recipient_ids: recipientIds,
                    subscription: subscription,
                    message: message,
                    parameters: parameters,
                    method: method
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.MessageDistributionCommandableGrpcClientV1 = MessageDistributionCommandableGrpcClientV1;
//# sourceMappingURL=MessageDistributionCommandableGrpcClientV1.js.map