import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeApiError, NodeConnectionType } from 'n8n-workflow';
import { resourceOperationsFunctions } from './execute';
import { togglApiNodeProperties } from './properties';

export class TogglApiNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Toggle API',
		name: 'togglApiNode',
		icon: 'file:togglapi.svg',
		group: ['transform'],
		version: 1,
		description: 'Toggl API Node',
		defaults: {
			name: 'Toggle API Node',
		},
		credentials: [
			{
				name: 'togglCredentialsApi',
				required: true,
			},
		],
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		properties: togglApiNodeProperties,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const fn = resourceOperationsFunctions[resource][operation];

		if (!fn) {
			throw new NodeApiError(this.getNode(), {
				message: 'Operation failed.',
				description: `Operation "${operation}" of resource "${resource}" failed`,
			});
		}

		const responseData = await fn(this);

		return [this.helpers.returnJsonArray(responseData)];
	}
}
