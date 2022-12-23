import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EmailSettingsMockClientV1 } from 'client-emailsettings-node';
import { SmsSettingsMockClientV1 } from 'client-smssettings-node';
import { EmailNullClientV1 } from 'client-email-node';
import { SmsNullClientV1 } from 'client-sms-node';

import { MessageDistributionController } from 'service-msgdistribution-node';
import { MessageDistributionCommandableGrpcServiceV1 } from 'service-msgdistribution-node';
import { MessageDistributionCommandableGrpcClientV1 } from '../../src/version1/MessageDistributionCommandableGrpcClientV1';
import { MessageDistributionClientFixtureV1 } from './MessageDistributionClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('MessageDistributionCommandableGrpcClientV1', ()=> {
    let service: MessageDistributionCommandableGrpcServiceV1;
    let client: MessageDistributionCommandableGrpcClientV1;
    let fixture: MessageDistributionClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let controller = new MessageDistributionController();

        let emailSettingsClient = new EmailSettingsMockClientV1();
        emailSettingsClient.setSettings(null, { id: '1', name: 'User 1', email: 'somebody@somewhere.com' });

        let smsSettingsClient = new SmsSettingsMockClientV1();
        smsSettingsClient.setSettings(null, { id: '1', name: 'User 1', phone: '+12345678901' });

        let emailDeliveryClient = new EmailNullClientV1();
        let smsDeliveryClient = new SmsNullClientV1();

        service = new MessageDistributionCommandableGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-emailsettings', 'client', 'mock', 'default', '1.0'), emailSettingsClient,
            new Descriptor('service-smssettings', 'client', 'mock', 'default', '1.0'), smsSettingsClient,
            new Descriptor('service-email', 'client', 'null', 'default', '1.0'), emailDeliveryClient,
            new Descriptor('service-sms', 'client', 'null', 'default', '1.0'), smsDeliveryClient,
            new Descriptor('service-msgdistribution', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-msgdistribution', 'service', 'commandable-grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new MessageDistributionCommandableGrpcClientV1();
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

    test('Send Message to Address', async () => {
        await fixture.testSendMessage();
    });

    test('Send Message to Recipients', async () => {
        await fixture.testSendMessageToRecipient();
    });

});
