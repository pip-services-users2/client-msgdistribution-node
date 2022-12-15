import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { MessageV1 } from './MessageV1';
import { RecipientV1 } from './RecipientV1';
import { IMessageDistributionClientV1 } from './IMessageDistributionClientV1';

export class MessageDistributionCommandableHttpClientV1 extends CommandableHttpClient implements IMessageDistributionClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('v1/msg_distribution');

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public async sendMessage(correlationId: string, recipient: RecipientV1,
        message: MessageV1, parameters: ConfigParams, method: string) {
        parameters = this._defaultParameters.override(parameters);
        
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
    }

    public async sendMessages(correlationId: string, recipients: RecipientV1[],
        message: MessageV1, parameters: ConfigParams, method: string): Promise<void> {
        parameters = this._defaultParameters.override(parameters);
        
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
    }

    public async sendMessageToRecipient(correlationId: string, recipientId: string, subscription: string,
        message: MessageV1, parameters: ConfigParams, method: string): Promise<void> {
        parameters = this._defaultParameters.override(parameters);
        
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
    }

    public async sendMessageToRecipients(correlationId: string, recipientIds: string[], subscription: string,
        message: MessageV1, parameters: ConfigParams, method: string): Promise<void> {
        parameters = this._defaultParameters.override(parameters);

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
    }

}
