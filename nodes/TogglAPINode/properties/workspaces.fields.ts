import { INodeProperties } from 'n8n-workflow';

export const workspacesFields: INodeProperties[] = [
    {
        displayName: 'Workspace ID',
        name: 'workspaceId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                resource: ['workspaces'],
                operation: ['get-workspace-projects', 'get-workspace-users'],
            },
        },
    },
    {
        displayName: 'Page',
        name: 'page',
        type: 'number',
        default: 1,
        displayOptions: {
            show: {
                resource: ['workspaces'],
                operation: ['get-workspace-projects'],
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
                resource: ['workspaces'],
                operation: ['get-workspace-projects', 'get-workspace-users'],
            },
        },
    },
    {
        displayName: 'Organization ID',
        name: 'organizationId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                resource: ['workspaces'],
                operation: ['get-workspace-users'],
            },
        },
    },
];
