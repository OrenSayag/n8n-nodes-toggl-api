import { AxiosError, AxiosInstance } from 'axios';

import { GetWorkspaceTimeEntiresOptions, GetWorkspaceTimeEntriesResponse } from './types';
export class Reports {
    constructor(private readonly client: AxiosInstance) {}

    async getWorkspaceTimeEntries(
        workspaceId: string,
        options: Partial<GetWorkspaceTimeEntiresOptions>,
    ): Promise<GetWorkspaceTimeEntriesResponse> {
        try {
            const res = await this.client.post(
                `/workspace/${workspaceId}/search/time_entries`,
                options,
            );
            return res.data;
        } catch (e) {
            if (e instanceof AxiosError && e.response?.data) {
                console.error(e.response.data);
                throw new Error(e.response.data);
            }
            console.error(e);
            throw e;
        }
    }
}
