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
            action: 'Get workspace projects',
            value: 'get-workspace-projects',
        },
        {
            name: 'Get Workspace Users',
            action: 'Get workspace users',
            value: 'get-workspace-users',
        },
    ],
    default: 'get-workspace-projects',
};
