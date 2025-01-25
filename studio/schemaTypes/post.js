import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    // Language Specific Fields Group
    {
      name: 'title',
      title: 'Titles',
      type: 'object',
      fields: [
        defineField({
          name: 'it',
          title: 'Title ITA',
          type: 'string',
          validation: (Rule) => Rule.required().max(150).warning('Title should not exceed 150 characters.'),
        }),
        defineField({
          name: 'en',
          title: 'Title ENG',
          type: 'string',
          validation: (Rule) => Rule.required().max(150).warning('Title should not exceed 150 characters.'),
        }),
      ],
    },
    {
      name: 'slug',
      title: 'Slugs',
      type: 'object',
      fields: [
        defineField({
          name: 'it',
          title: 'Slug ITA',
          type: 'slug',
          options: {
            source: 'title.it',
            maxLength: 96,
          },
        }),
        defineField({
          name: 'en',
          title: 'Slug ENG',
          type: 'slug',
          options: {
            source: 'title.en',
            maxLength: 96,
          },
        }),
      ],
    },
    {
      name: 'description',
      title: 'Descriptions',
      type: 'object',
      fields: [
        defineField({
          name: 'it',
          title: 'Description ITA',
          type: 'text',
          validation: (Rule) => Rule.max(200).warning('Description should not exceed 200 characters.'),
        }),
        defineField({
          name: 'en',
          title: 'Description ENG',
          type: 'text',
          validation: (Rule) => Rule.max(200).warning('Description should not exceed 200 characters.'),
        }),
      ],
    },
    // Main Image
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // Published At Date
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    }),
    // Body Content for Both Languages
    {
      name: 'body',
      title: 'Body Content',
      type: 'object',
      fields: [
        defineField({
          name: 'it',
          title: 'Body ITA',
          type: 'blockContent',
        }),
        defineField({
          name: 'en',
          title: 'Body ENG',
          type: 'blockContent',
        }),
      ],
    },
    // Quote Fields for Both Languages
    {
      name: 'quote',
      title: 'Quotes',
      type: 'object',
      fields: [
        defineField({
          name: 'it',
          title: 'Quote ITA',
          type: 'text',
          validation: (Rule) => Rule.max(200).warning('Quote should not exceed 200 characters.'),
        }),
        defineField({
          name: 'en',
          title: 'Quote ENG',
          type: 'text',
          validation: (Rule) => Rule.max(200).warning('Quote should not exceed 200 characters.'),
        }),
      ],
    },
    // Image Gallery (Max 20 Images)
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.max(20).warning('Maximum 20 images can be uploaded.'),
    }),
  ],

  preview: {
    select: {
      title: 'title.it',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title,
        media,
        subtitle: `Preview of the Italian version`,
      };
    },
  },
});