import { ConfigParams } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';
import { IMessageDistributionClientV1 } from './IMessageDistributionClientV1';
import { MessageV1 } from './MessageV1';
import { RecipientV1 } from './RecipientV1';
export declare class MessageDistributionGrpcClientV1 extends GrpcClient implements IMessageDistributionClientV1 {
    private _defaultParameters;
    constructor(config?: any);
    sendMessage(correlationId: string, recipient: RecipientV1, message: MessageV1, parameters: ConfigParams, method: string): Promise<void>;
    sendMessages(correlationId: string, recipients: RecipientV1[], message: MessageV1, parameters: ConfigParams, method: string): Promise<void>;
    sendMessageToRecipient(correlationId: string, recipientId: string, subscription: string, message: MessageV1, parameters: ConfigParams, method: string): Promise<void>;
    sendMessageToRecipients(correlationId: string, recipientIds: string[], subscription: string, message: MessageV1, parameters: ConfigParams, method: string): Promise<void>;
}
