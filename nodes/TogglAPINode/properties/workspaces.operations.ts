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
    ],
    default: 'get-workspace-projects',
};
