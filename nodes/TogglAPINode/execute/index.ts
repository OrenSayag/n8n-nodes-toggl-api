import { IExecuteFunctions } from 'n8n-workflow';
import { getWorkspaceProjects } from './workspaces/get-workspace-projects';
import { getWorkspaceTimeEntries } from './reports/search-time-entries';
import { getWorkspaceUsers } from './workspaces/get-workspace-users';

type ResourceOperationFunctions = {
    [resource: string]: {
        [operation: string]: (ef: IExecuteFunctions) => Promise<any>;
    };
};

export const resourceOperationsFunctions: ResourceOperationFunctions = {
    workspaces: {
        'get-workspace-projects': getWorkspaceProjects,
        'get-workspace-users': getWorkspaceUsers,
    },
    reports: {
        'get-workspace-time-entries': getWorkspaceTimeEntries,
    },
};
