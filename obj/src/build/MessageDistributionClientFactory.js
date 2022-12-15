"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDistributionClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const MessageDistributionNullClientV1_1 = require("../version1/MessageDistributionNullClientV1");
const MessageDistributionDirectClientV1_1 = require("../version1/MessageDistributionDirectClientV1");
const MessageDistributionCommandableHttpClientV1_1 = require("../version1/MessageDistributionCommandableHttpClientV1");
const MessageDistributionCommandableLambdaClientV1_1 = require("../version1/MessageDistributionCommandableLambdaClientV1");
const MessageDistributionCommandableGrpcClientV1_1 = require("../version1/MessageDistributionCommandableGrpcClientV1");
const MessageDistributionGrpcClientV1_1 = require("../version1/MessageDistributionGrpcClientV1");
class MessageDistributionClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(MessageDistributionClientFactory.NullClientV1Descriptor, MessageDistributionNullClientV1_1.MessageDistributionNullClientV1);
        this.registerAsType(MessageDistributionClientFactory.DirectClientV1Descriptor, MessageDistributionDirectClientV1_1.MessageDistributionDirectClientV1);
        this.registerAsType(MessageDistributionClientFactory.CmdHttpClientV1Descriptor, MessageDistributionCommandableHttpClientV1_1.MessageDistributionCommandableHttpClientV1);
        this.registerAsType(MessageDistributionClientFactory.CmdLambdaClientV1Descriptor, MessageDistributionCommandableLambdaClientV1_1.MessageDistributionCommandableLambdaClientV1);
        this.registerAsType(MessageDistributionClientFactory.CommandableGrpcClientV1Descriptor, MessageDistributionCommandableGrpcClientV1_1.MessageDistributionCommandableGrpcClientV1);
        this.registerAsType(MessageDistributionClientFactory.GrpcClientV1Descriptor, MessageDistributionGrpcClientV1_1.MessageDistributionGrpcClientV1);
    }
}
exports.MessageDistributionClientFactory = MessageDistributionClientFactory;
MessageDistributionClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgdistribution', 'factory', 'default', 'default', '1.0');
MessageDistributionClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgdistribution', 'client', 'null', 'default', '1.0');
MessageDistributionClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgdistribution', 'client', 'direct', 'default', '1.0');
MessageDistributionClientFactory.CmdHttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgdistribution', 'client', 'commandable-http', 'default', '1.0');
MessageDistributionClientFactory.CmdLambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgdistribution', 'client', 'commandable-lambda', 'default', '1.0');
MessageDistributionClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgdistribution', 'client', 'commandable-grpc', 'default', '1.0');
MessageDistributionClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgdistribution', 'client', 'grpc', 'default', '1.0');
//# sourceMappingURL=MessageDistributionClientFactory.js.map