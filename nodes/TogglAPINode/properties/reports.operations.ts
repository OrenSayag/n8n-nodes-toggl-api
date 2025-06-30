import { INodeProperties } from 'n8n-workflow';

export const reportsOperationsOptions: INodeProperties = {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
        show: {
            resource: ['reports'],
        },
    },
    options: [
        {
            name: 'Get Workspace Time Entries',
            action: 'Get workspace time entries',
            value: 'get-workspace-time-entries',
        },
    ],
    default: 'get-workspace-time-entries',
};
