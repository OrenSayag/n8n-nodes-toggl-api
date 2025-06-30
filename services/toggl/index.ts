import axios from 'axios';
import { Reports } from './Reports';
import { Workspaces } from './workspaces';

const BASE_URL = 'https://api.track.toggl.com/api/v9/';
const BASE_REPORTS_URL = 'https://api.track.toggl.com/reports/api/v3/';

export class TogglApi {
    workspaces: Workspaces;
    reports: Reports;
    constructor(
        input: (
            | { type: 'api-token'; token: string }
            | { type: 'basic'; username: string; password: string }
        ) & {
            baseUrl?: string;
            baseReportsUrl?: string;
        },
    ) {
        const username = input.type === 'api-token' ? input.token : input.username;
        const password = input.type === 'basic' ? input.password : 'api_token';
        const auth = {
            password,
            username,
        };
        const client = axios.create({ auth, baseURL: input.baseUrl ?? BASE_URL });
        const reportsClient = axios.create({
            auth,
            baseURL: input.baseReportsUrl ?? BASE_REPORTS_URL,
        });
        this.workspaces = new Workspaces(client);
        this.reports = new Reports(reportsClient);
    }
}
