import { IExecuteFunctions } from 'n8n-workflow';
import { TogglApi } from '../../../../services/toggl';
import { GetWorkspaceUsersOptions } from '../../../../services/toggl/types';
import { getApiKey } from '../utils/get-api-key';

export async function getWorkspaceUsers(ef: IExecuteFunctions) {
    const workspaceId = ef.getNodeParameter('workspaceId', 0);
    const organizationId = ef.getNodeParameter('organizationId', 0);
    const jsonData = ef.getNodeParameter('data', 0);
    const data = JSON.parse(jsonData as string);
    const options: GetWorkspaceUsersOptions = {
        ...data,
    };
    if (!workspaceId) {
        throw new Error('Missing workspaceId');
    }
    const apiToken = await getApiKey({ ef });
    const togglClient = new TogglApi({ type: 'api-token', token: apiToken });
    return togglClient.workspaces.getWorkspaceUsers(
        organizationId as string,
        workspaceId as string,
        options,
    );
}
