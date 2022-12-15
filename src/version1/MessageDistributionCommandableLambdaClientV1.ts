import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { MessageV1 } from './MessageV1';
import { RecipientV1 } from './RecipientV1';
import { IMessageDistributionClientV1 } from './IMessageDistributionClientV1';

export class MessageDistributionCommandableLambdaClientV1 extends CommandableLambdaClient implements IMessageDistributionClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('msg_distribution');

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public async sendMessage(correlationId: string, recipient: RecipientV1,
        message: MessageV1, parameters: ConfigParams, method: string): Promise<void> {
        parameters = this._defaultParameters.override(parameters);
        
        let timing = this.instrument(correlationId, 'email_settings.send_message');

        try {
            await this.callCommand(
                'send_message',
                correlationId,
                {
                    recipient: recipient,
                    message: message,
                    parameters: parameters,
                    method: method
                }
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
        
        let timing = this.instrument(correlationId, 'email_settings.send_messages');

        try {
            await this.callCommand(
                'send_messages',
                correlationId,
                {
                    recipients: recipients,
                    message: message,
                    parameters: parameters,
                    method: method
                }
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
        
        let timing = this.instrument(correlationId, 'email_settings.send_message_to_recipient');

        try {
            await this.callCommand(
                'send_message_to_recipient',
                correlationId,
                {
                    recipient_id: recipientId,
                    subscription: subscription,
                    message: message,
                    parameters: parameters,
                    method: method
                }
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

        let timing = this.instrument(correlationId, 'email_settings.send_message_to_recipients');

        try {
            await this.callCommand(
                'send_message_to_recipients',
                correlationId,
                {
                    recipient_ids: recipientIds,
                    subscription: subscription,
                    message: message,
                    parameters: parameters,
                    method: method
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}
