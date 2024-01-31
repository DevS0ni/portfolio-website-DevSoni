export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            option: {
                hotspot: true
            },
        },
        {
            name: 'github',
            title: 'GitHub Link',
            type: 'url'
        },
        {
            name: 'linkedin',
            title: 'LinkedIn Link',
            type: 'url'
        },
        {
            name: 'instagram',
            title: 'Instagram Link',
            type: 'url'
        },
        {
            name: 'twitter',
            title: 'Twitter Link',
            type: 'url'
        },
        {
            name: 'facebook',
            title: 'Facebook Link',
            type: 'url'
        }
    ]
}