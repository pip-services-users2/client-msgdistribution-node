const services = require('../../../src/protos/msgdistribution_v1_grpc_pb');
const messages = require('../../../src/protos/msgdistribution_v1_pb');

import { ConfigParams } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IMessageDistributionClientV1 } from './IMessageDistributionClientV1';
import { MessageV1 } from './MessageV1';
import { RecipientV1 } from './RecipientV1';
import { MessageDistributionGrpcConverterV1 } from './MessageDistributionGrpcConverterV1';

export class MessageDistributionGrpcClientV1 extends GrpcClient implements IMessageDistributionClientV1 {
    private _defaultParameters: ConfigParams;
        
    constructor(config?: any) {
        super(services.MessageDistributionClient);

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public async sendMessage(correlationId: string, recipient: RecipientV1,
        message: MessageV1, parameters: ConfigParams, method: string): Promise<void> {
        parameters = this._defaultParameters.override(parameters);

        let request = new messages.SendMessageRequest();
        request.setMessage(MessageDistributionGrpcConverterV1.fromMessage(message));
        MessageDistributionGrpcConverterV1.setMap(request.getParametersMap(), parameters);
        request.setMethod(method);
        request.setRecipient(MessageDistributionGrpcConverterV1.fromRecipient(recipient));

        let timing = this.instrument(correlationId, 'msg_distribution.send_message');

        try {
            let response = await this.call<any>('send_message', correlationId, request);

            if (response.error != null)
                throw MessageDistributionGrpcConverterV1.toError(response.error);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }     
    }
    
    public async sendMessages(correlationId: string, recipients: RecipientV1[],
        message: MessageV1, parameters: ConfigParams, method: string): Promise<void> {
        parameters = this._defaultParameters.override(parameters);

        let request = new messages.SendMessagesRequest();
        request.setMessage(MessageDistributionGrpcConverterV1.fromMessage(message));
        MessageDistributionGrpcConverterV1.setMap(request.getParametersMap(), parameters);
        request.setMethod(method);
        request.setRecipientsList(MessageDistributionGrpcConverterV1.fromRecipients(recipients));

        let timing = this.instrument(correlationId, 'msg_distribution.send_messages');

        try {
            let response = await this.call<any>('send_messages', correlationId, request);

            if (response.error != null)
                throw MessageDistributionGrpcConverterV1.toError(response.error);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async sendMessageToRecipient(correlationId: string, recipientId: string, subscription: string,
        message: MessageV1, parameters: ConfigParams, method: string): Promise<void> {
        parameters = this._defaultParameters.override(parameters);

        let request = new messages.SendMessageWithRecipientRequest();
        request.setMessage(MessageDistributionGrpcConverterV1.fromMessage(message));
        MessageDistributionGrpcConverterV1.setMap(request.getParametersMap(), parameters);
        request.setMethod(method);
        request.setSubscription(subscription);
        request.setRecipientId(recipientId);

        let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipient');

        try {
            let response = await this.call<any>('send_message_to_recipient', correlationId, request);

            if (response.error != null)
                throw MessageDistributionGrpcConverterV1.toError(response.error);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }      
    }

    public async sendMessageToRecipients(correlationId: string, recipientIds: string[], subscription: string,
        message: MessageV1, parameters: ConfigParams, method: string): Promise<void> {
        parameters = this._defaultParameters.override(parameters);

        let request = new messages.SendMessageWithRecipientsRequest();
        request.setMessage(MessageDistributionGrpcConverterV1.fromMessage(message));
        MessageDistributionGrpcConverterV1.setMap(request.getParametersMap(), parameters);
        request.setMethod(method);
        request.setSubscription(subscription);
        request.setRecipientIdsList(recipientIds);

        let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipients');

        try {
            let response = await this.call<any>('send_message_to_recipients', correlationId, request);

            if (response.error != null)
                throw MessageDistributionGrpcConverterV1.toError(response.error);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }       
    }

}
