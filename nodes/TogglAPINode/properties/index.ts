import { INodeProperties } from 'n8n-workflow';
import { workspacesOperationsOptions } from './workspaces.operations';
import { workspacesFields } from './workspaces.fields';
import { reportsOperationsOptions } from './reports.operations';
import { reportsFields } from './reports.fields';

const resourcesOptions: INodeProperties = {
    displayName: 'Resource',
    name: 'resource',
    type: 'options',
    noDataExpression: true,
    options: [
        {
            name: 'Workspace',
            value: 'workspaces',
        },
        {
            name: 'Report',
            value: 'reports',
        },
    ],
    default: 'workspaces',
};

export const togglApiNodeProperties = [
    resourcesOptions,
    workspacesOperationsOptions,
    ...workspacesFields,
    reportsOperationsOptions,
    ...reportsFields,
];
