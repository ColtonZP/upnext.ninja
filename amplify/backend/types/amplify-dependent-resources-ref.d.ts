export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "upnextninja": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "upnextninja": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "s3upnextninjastorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}