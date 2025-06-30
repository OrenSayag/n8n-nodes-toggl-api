import { IExecuteFunctions } from 'n8n-workflow';
import { TogglApi } from '../../../../services/toggl';
import { GetWorkspaceTimeEntiresOptions } from '../../../../services/toggl/types';
import { getApiKey } from '../utils/get-api-key';

export async function getWorkspaceTimeEntries(ef: IExecuteFunctions) {
    const workspaceId = ef.getNodeParameter('workspaceId', 0);
    const jsonData = ef.getNodeParameter('data', 0);
    const data = JSON.parse(jsonData as string);
    const options: GetWorkspaceTimeEntiresOptions = {
        ...data,
    };
    if (!workspaceId) {
        throw new Error('Missing workspaceId');
    }
    const apiToken = await getApiKey({ ef });
    const togglClient = new TogglApi({ type: 'api-token', token: apiToken });
    return togglClient.reports.getWorkspaceTimeEntries(workspaceId as string, options);
}
