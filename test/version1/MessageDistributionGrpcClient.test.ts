import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EmailSettingsMemoryClientV1 } from 'client-emailsettings-node';
import { SmsSettingsMemoryClientV1 } from 'client-smssettings-node';
import { EmailNullClientV1 } from 'client-email-node';
import { SmsNullClientV1 } from 'client-sms-node';

import { MessageDistributionController } from 'service-msgdistribution-node';
import { MessageDistributionGrpcServiceV1 } from 'service-msgdistribution-node';
import { MessageDistributionGrpcClientV1 } from '../../src/version1/MessageDistributionGrpcClientV1';
import { MessageDistributionClientFixtureV1 } from './MessageDistributionClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('MessageDistributionGrpcClientV1', ()=> {
    let service: MessageDistributionGrpcServiceV1;
    let client: MessageDistributionGrpcClientV1;
    let fixture: MessageDistributionClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let controller = new MessageDistributionController();

        let emailSettingsClient = new EmailSettingsMemoryClientV1();
        emailSettingsClient.setSettings(null, { id: '1', name: 'User 1', email: 'somebody@somewhere.com' });

        let smsSettingsClient = new SmsSettingsMemoryClientV1();
        smsSettingsClient.setSettings(null, { id: '1', name: 'User 1', phone: '+12345678901' });

        let emailDeliveryClient = new EmailNullClientV1();
        let smsDeliveryClient = new SmsNullClientV1();
        
        service = new MessageDistributionGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-emailsettings', 'client', 'memory', 'default', '1.0'), emailSettingsClient,
            new Descriptor('service-smssettings', 'client', 'memory', 'default', '1.0'), smsSettingsClient,
            new Descriptor('service-email', 'client', 'null', 'default', '1.0'), emailDeliveryClient,
            new Descriptor('service-sms', 'client', 'null', 'default', '1.0'), smsDeliveryClient,
            new Descriptor('service-msgdistribution', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-msgdistribution', 'service', 'grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new MessageDistributionGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new MessageDistributionClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('Send Message', async () => {
        await fixture.testSendMessage();
    });

    test('Send Message to Recipient', async () => {
        await fixture.testSendMessageToRecipient();
    });

});
