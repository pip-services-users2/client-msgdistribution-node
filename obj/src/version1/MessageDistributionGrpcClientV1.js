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
exports.MessageDistributionGrpcClientV1 = void 0;
const services = require('../../../src/protos/msgdistribution_v1_grpc_pb');
const messages = require('../../../src/protos/msgdistribution_v1_pb');
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const MessageDistributionGrpcConverterV1_1 = require("./MessageDistributionGrpcConverterV1");
class MessageDistributionGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor(config) {
        super(services.MessageDistributionClient);
        let thisConfig = pip_services3_commons_nodex_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    sendMessage(correlationId, recipient, message, parameters, method) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let request = new messages.SendMessageRequest();
            request.setMessage(MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.fromMessage(message));
            MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.setMap(request.getParametersMap(), parameters);
            request.setMethod(method);
            request.setRecipient(MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.fromRecipient(recipient));
            let timing = this.instrument(correlationId, 'msg_distribution.send_message');
            try {
                let response = yield this.call('send_message', correlationId, request);
                if (response.error != null)
                    throw MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.toError(response.error);
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
            let request = new messages.SendMessagesRequest();
            request.setMessage(MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.fromMessage(message));
            MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.setMap(request.getParametersMap(), parameters);
            request.setMethod(method);
            request.setRecipientsList(MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.fromRecipients(recipients));
            let timing = this.instrument(correlationId, 'msg_distribution.send_messages');
            try {
                let response = yield this.call('send_messages', correlationId, request);
                if (response.error != null)
                    throw MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.toError(response.error);
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
            let request = new messages.SendMessageWithRecipientRequest();
            request.setMessage(MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.fromMessage(message));
            MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.setMap(request.getParametersMap(), parameters);
            request.setMethod(method);
            request.setSubscription(subscription);
            request.setRecipientId(recipientId);
            let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipient');
            try {
                let response = yield this.call('send_message_to_recipient', correlationId, request);
                if (response.error != null)
                    throw MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.toError(response.error);
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
            let request = new messages.SendMessageWithRecipientsRequest();
            request.setMessage(MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.fromMessage(message));
            MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.setMap(request.getParametersMap(), parameters);
            request.setMethod(method);
            request.setSubscription(subscription);
            request.setRecipientIdsList(recipientIds);
            let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipients');
            try {
                let response = yield this.call('send_message_to_recipients', correlationId, request);
                if (response.error != null)
                    throw MessageDistributionGrpcConverterV1_1.MessageDistributionGrpcConverterV1.toError(response.error);
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
exports.MessageDistributionGrpcClientV1 = MessageDistributionGrpcClientV1;
//# sourceMappingURL=MessageDistributionGrpcClientV1.js.map