import { INodeProperties } from 'n8n-workflow';
import { workspacesOperationsOptions } from './workspaces.operations';
import { workspacesFields } from './workspaces.fields';

const resourcesOptions: INodeProperties = {
    displayName: 'Resource',
    name: 'resource',
    type: 'options',
    noDataExpression: true,
    options: [
        {
            name: 'Workspaces',
            value: 'workspaces',
        },
        {
            name: 'Reports',
            value: 'reports',
        },
    ],
    default: 'workspaces',
};

export const togglApiNodeProperties = [
    resourcesOptions,
    workspacesOperationsOptions,
    ...workspacesFields,
];
