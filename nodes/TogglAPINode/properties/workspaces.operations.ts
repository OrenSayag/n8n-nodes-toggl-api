import { INodeProperties } from 'n8n-workflow';

export const workspacesOperationsOptions: INodeProperties = {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
        show: {
            resource: ['workspaces'],
        },
    },
    options: [
        {
            name: 'Get Workspace Projects',
            action: 'Get Workspace Projects',
            description: 'Get Workspace Projects',
            value: 'get-workspace-projects',
        },
        {
            name: 'Get Workspace Users',
            action: 'Get Workspace Users',
            description: 'Get Workspace Users',
            value: 'get-workspace-users',
        },
    ],
    default: 'get-workspace-projects',
};
