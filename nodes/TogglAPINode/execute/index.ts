import { IExecuteFunctions } from 'n8n-workflow';
import { getWorkspaceProjects } from './workspaces/get-workspace-projects';

type ResourceOperationFunctions = {
    [resource: string]: {
        [operation: string]: (ef: IExecuteFunctions) => Promise<any>;
    };
};

export const resourceOperationsFunctions: ResourceOperationFunctions = {
    workspaces: {
        'get-workspace-projects': getWorkspaceProjects,
    },
};
