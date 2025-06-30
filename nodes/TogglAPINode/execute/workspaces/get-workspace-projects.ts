import { IExecuteFunctions } from 'n8n-workflow';
import { getApiKey } from '../utils/get-api-key';
import { TogglApi } from '../../../../services/toggl';
import { GetWorkspaceProjectsOptions } from '../../../../services/toggl/types';

export async function getWorkspaceProjects(ef: IExecuteFunctions) {
    const workspaceId = ef.getNodeParameter('workspaceId', 0);
    const page = ef.getNodeParameter('page', 0);
    const jsonData = ef.getNodeParameter('data', 0);
    const data = JSON.parse(jsonData as string);
    const options: GetWorkspaceProjectsOptions = {
        page: page ? Number(page) : undefined,
        ...data,
    };
    if (!workspaceId) {
        throw new Error('Missing workspaceId');
    }
    const apiToken = await getApiKey({ ef });
    const togglClient = new TogglApi({ type: 'api-token', token: apiToken });
    return togglClient.workspaces.getWorkspaceProjects(workspaceId as string, options);
}
