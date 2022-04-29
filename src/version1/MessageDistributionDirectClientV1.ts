import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IMessageDistributionClientV1 } from './IMessageDistributionClientV1';
import { MessageV1 } from './MessageV1';
import { RecipientV1 } from './RecipientV1';

//import { IMessageDistributionController } from 'service-msgdistribution-node';

export class MessageDistributionDirectClientV1 extends DirectClient<any> implements IMessageDistributionClientV1 {
    private _defaultParameters: ConfigParams;

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-msgdistribution", "controller", "*", "*", "*"));

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }
    
    public async sendMessage(correlationId: string, recipient: RecipientV1,
        message: MessageV1, parameters: ConfigParams, method: string): Promise<void> {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'msg_distribution.send_message');

        try {
            await this._controller.sendMessage(
                correlationId, recipient, message, parameters, method
            );
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
        let timing = this.instrument(correlationId, 'msg_distribution.send_messages');
        
        try {
            await this._controller.sendMessages(
                correlationId, recipients, message, parameters, method
            );
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
        let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipient');
        
        try {
            await this._controller.sendMessageToRecipient(
                correlationId, recipientId, subscription, message, parameters, method
            );
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
        let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipients');

        try {
            await this._controller.sendMessageToRecipients(
                correlationId, recipientIds, subscription, message, parameters, method
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}