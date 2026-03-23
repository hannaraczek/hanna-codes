export default {
  name: 'home',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      name: 'subheader',
      type: 'text',
      title: 'Subheader',
    },
    {
      name: 'services',
      type: 'array',
      title: 'Services',
      of: [
        {
          type: 'object',
          name: 'service',
          title: 'Service',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'videoUrl',
              type: 'url',
              title: 'YouTube Video URL',
            },
          ],
        },
      ],
    },
    {
      name: 'clientLogos',
      type: 'array',
      title: 'Client Logos',
      of: [
        {
          type: 'object',
          name: 'logoItem',
          title: 'Logo',
          fields: [
            {
              name: 'logo',
              type: 'image',
              title: 'Logo Image',
              options: {hotspot: true},
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
            {
              name: 'link',
              type: 'url',
              title: 'Optional Link',
              description: 'If provided, clicking the logo will open this URL',
            },
          ],
        },
      ],
    },
  ],
}
