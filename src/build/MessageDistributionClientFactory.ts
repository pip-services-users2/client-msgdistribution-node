import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { MessageDistributionNullClientV1 } from '../version1/MessageDistributionNullClientV1';
import { MessageDistributionDirectClientV1 } from '../version1/MessageDistributionDirectClientV1';
import { MessageDistributionHttpClientV1 } from '../version1/MessageDistributionHttpClientV1';
import { MessageDistributionLambdaClientV1 } from '../version1/MessageDistributionLambdaClientV1';
import { MessageDistributionCommandableGrpcClientV1 } from '../version1/MessageDistributionCommandableGrpcClientV1';
import { MessageDistributionGrpcClientV1 } from '../version1/MessageDistributionGrpcClientV1';

export class MessageDistributionClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-msgdistribution', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'lambda', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'commandable-grpc', 'default', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-msgdistribution', 'client', 'grpc', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(MessageDistributionClientFactory.NullClientV1Descriptor, MessageDistributionNullClientV1);
		this.registerAsType(MessageDistributionClientFactory.DirectClientV1Descriptor, MessageDistributionDirectClientV1);
		this.registerAsType(MessageDistributionClientFactory.HttpClientV1Descriptor, MessageDistributionHttpClientV1);
		this.registerAsType(MessageDistributionClientFactory.LambdaClientV1Descriptor, MessageDistributionLambdaClientV1);
		this.registerAsType(MessageDistributionClientFactory.CommandableGrpcClientV1Descriptor, MessageDistributionCommandableGrpcClientV1);
		this.registerAsType(MessageDistributionClientFactory.GrpcClientV1Descriptor, MessageDistributionGrpcClientV1);
	}
	
}
