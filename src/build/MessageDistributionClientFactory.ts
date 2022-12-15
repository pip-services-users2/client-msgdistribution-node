import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { MessageDistributionNullClientV1 } from '../version1/MessageDistributionNullClientV1';
import { MessageDistributionDirectClientV1 } from '../version1/MessageDistributionDirectClientV1';
import { MessageDistributionCommandableHttpClientV1 } from '../version1/MessageDistributionCommandableHttpClientV1';
import { MessageDistributionCommandableLambdaClientV1 } from '../version1/MessageDistributionCommandableLambdaClientV1';
import { MessageDistributionCommandableGrpcClientV1 } from '../version1/MessageDistributionCommandableGrpcClientV1';
import { MessageDistributionGrpcClientV1 } from '../version1/MessageDistributionGrpcClientV1';

export class MessageDistributionClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-msgdistribution', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'direct', 'default', '1.0');
	public static CmdHttpClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'commandable-http', 'default', '1.0');
	public static CmdLambdaClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'commandable-lambda', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'commandable-grpc', 'default', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'grpc', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(MessageDistributionClientFactory.NullClientV1Descriptor, MessageDistributionNullClientV1);
		this.registerAsType(MessageDistributionClientFactory.DirectClientV1Descriptor, MessageDistributionDirectClientV1);
		this.registerAsType(MessageDistributionClientFactory.CmdHttpClientV1Descriptor, MessageDistributionCommandableHttpClientV1);
		this.registerAsType(MessageDistributionClientFactory.CmdLambdaClientV1Descriptor, MessageDistributionCommandableLambdaClientV1);
		this.registerAsType(MessageDistributionClientFactory.CommandableGrpcClientV1Descriptor, MessageDistributionCommandableGrpcClientV1);
		this.registerAsType(MessageDistributionClientFactory.GrpcClientV1Descriptor, MessageDistributionGrpcClientV1);
	}
	
}
