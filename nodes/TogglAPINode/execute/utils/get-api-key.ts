import { IExecuteFunctions } from 'n8n-workflow';

type Input = {
    ef: IExecuteFunctions;
};
export async function getApiKey({ ef }: Input): Promise<string> {
    const credentials = await ef.getCredentials('togglCredentialsApi');
    const apiKey = credentials?.['api_key'];
    if (!apiKey) {
        throw new Error('Missing toggl API key');
    }
    return apiKey as string;
}
