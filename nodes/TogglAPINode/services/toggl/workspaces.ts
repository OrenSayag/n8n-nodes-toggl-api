import { AxiosError, AxiosInstance } from 'axios';

import {
    GetWorkspaceProjectsOptions,
    GetWorkspaceProjectsResponse,
    GetWorkspaceUsersOptions,
    GetWorkspaceUsersReturn,
} from './types';
export class Workspaces {
    constructor(private readonly client: AxiosInstance) {}

    async getWorkspaceProjects(
        workspaceId: string,
        options: Partial<GetWorkspaceProjectsOptions>,
    ): Promise<GetWorkspaceProjectsResponse> {
        try {
            const res = await this.client.get(
                `/workspaces/${workspaceId}/projects?${new URLSearchParams(options as unknown as Record<string, string>).toString()}`,
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

    async getWorkspaceUsers(
        organizationId: string,
        workspaceId: string,
        options: Partial<GetWorkspaceUsersOptions>,
    ): Promise<GetWorkspaceUsersReturn> {
        try {
            const res = await this.client.get(
                `organizations/${organizationId}/workspaces/${workspaceId}/workspace_users?${new URLSearchParams(options as unknown as Record<string, string>).toString()}`,
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
