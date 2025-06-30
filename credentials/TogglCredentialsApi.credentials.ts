import {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class TogglCredentialsApi implements ICredentialType {
    name = 'togglCredentialsApi';
    displayName = 'Toggl Credentials API';

    documentationUrl = 'https://github.com/OrenSayag/n8n-nodes-toggl-api';

    properties: INodeProperties[] = [
        // The credentials to get from user and save encrypted.
        // Properties can be defined exactly in the same way
        // as node properties.
        {
            displayName: 'API Key',
            name: 'api_key',
            type: 'string',
            typeOptions: { password: true },
            default: '',
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                apikey: '={{$credentials.api_key}}',
            },
        },
    };

    test: ICredentialTestRequest = {
        request: {
            baseURL: 'https://api.track.toggl.com/api/v9/me',
            auth: {
                username: '={{ $credentials.api_key}}',
                password: 'api_token',
            },
        },
    };
}
