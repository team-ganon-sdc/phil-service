
# Similar-Apps REST Api

There are 5 total different REST api calls on this express server.

1. [GET](#GET)
2. [POST](#POST)
3. [PUT](#PUT)
4. [DELETE](#DELETE)

## #GET

> '/api/apps/:id' return app document which has related apps field.

## POST

> '/api/apps/:id'

> Adds an app to the apps collection.

> Only the _id property is required in the Body of the request in JSON format. See below for full schema.

> - _id: Number,
> - relatedAppId: [{id: Number}],
>- name: String,
>- logo: Photo_Url, <-- From S3
>- company: String,
>- rating: Number,
>- description: String
## PUT

> '/api/apps/:id'

> Updates a single app document that matches Id.

> Desired field to be updated must be included in the Body of request in JSON format.

> Example: Update the name property of a specific document to "Fred" { "name: "Fred" }

## DELETE
> '/api/apps/:id'

> Deletes a specific app document that matches Id