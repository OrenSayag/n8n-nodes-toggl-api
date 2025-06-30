import { INodeProperties } from 'n8n-workflow';

export const reportsFields: INodeProperties[] = [
    {
        displayName: 'Workspace ID',
        name: 'workspaceId',
        type: 'string',
        default: '',
        required: true,
        description: 'Workspace ID',
        displayOptions: {
            show: {
                resource: ['reports'],
                operation: ['get-workspace-time-entries'],
            },
        },
    },
    {
        displayName: 'Data',
        name: 'data',
        type: 'json',
        description: 'More data according to docs',
        default: '{}',
        displayOptions: {
            show: {
                resource: ['reports'],
                operation: ['get-workspace-time-entries'],
            },
        },
    },
];
