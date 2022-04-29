const assert = require('chai').assert;

import { MessageV1 } from '../../src/version1/MessageV1';
import { RecipientV1 } from '../../src/version1/RecipientV1';
import { DeliveryMethodV1 } from '../../src/version1/DeliveryMethodV1';
import { IMessageDistributionClientV1 } from '../../src/version1/IMessageDistributionClientV1';

export class MessageDistributionClientFixtureV1 {
    private _client: IMessageDistributionClientV1;
    
    constructor(client: IMessageDistributionClientV1) {
        this._client = client;
    }

    public async testSendMessageToRecipient() {
        let message = <MessageV1> {
            subject: 'Test subject',
            text: 'Test text',
            html: 'Test html'
        };

        await this._client.sendMessageToRecipient(
            null, '1', null, message, null, DeliveryMethodV1.All
        );
    }

    public async testSendMessage() {
        let message = <MessageV1> {
            subject: 'Test subject',
            text: 'Test text',
            html: 'Test html'
        };
        let recipient = <RecipientV1>{
            name: 'Test user',
            email: 'somebody@somewhere.com',
            phone: '+12345349458'
        };

        await this._client.sendMessage(
            null, recipient, message, null, DeliveryMethodV1.All
        );
    }
    
}
