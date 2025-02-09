import {defineField, defineType} from "sanity";

export default defineType({
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        // Language Specific Fields Group
        {
            name: "title",
            title: "Titles",
            type: "object",
            fields: [
                defineField({
                    name: "it",
                    title: "Title ITA",
                    type: "string",
                    validation: (Rule) => Rule.required().max(150).warning("Title should not exceed 150 characters.").required
                }),
                defineField({
                    name: "en",
                    title: "Title ENG",
                    type: "string",
                    validation: (Rule) => Rule.required().max(150).warning("Title should not exceed 150 characters.").required
                })
            ]
        },
        {
            name: "slug",
            title: "Slugs",
            type: "object",
            fields: [
                defineField({
                    name: "it",
                    title: "Slug ITA",
                    type: "slug",
                    validation: (Rule) => Rule.required,
                    options: {
                        source: "title.it",
                        maxLength: 96
                    }
                }),
                defineField({
                    name: "en",
                    title: "Slug ENG",
                    type: "slug",
                    validation: (Rule) => Rule.required,
                    options: {
                        source: "title.en",
                        maxLength: 96
                    }
                })
            ]
        },
        {
            name: "description",
            title: "Descriptions",
            type: "object",
            fields: [
                defineField({
                    name: "it",
                    title: "Description ITA",
                    type: "text",
                    validation: (Rule) => Rule.max(300).warning("Description should not exceed 300 characters.").required
                }),
                defineField({
                    name: "en",
                    title: "Description ENG",
                    type: "text",
                    validation: (Rule) => Rule.max(300).warning("Description should not exceed 300 characters.").required
                })
            ]
        },
        // Main Image
        defineField({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            validation: (Rule) => Rule.required,
            options: {
                hotspot: true
            }
        }),
        // Published At Date
        defineField({
            name: "publishedAt",
            title: "Published at",
            type: "date",
            validation: (Rule) => Rule.required
        }),
        // Location
        {
            name: "location",
            title: "Location",
            type: "object",
            fields: [
                defineField({
                    name: "it",
                    title: "Posizione ITA",
                    type: "text",
                    validation: (Rule) => Rule.required
                }),
                defineField({
                    name: "en",
                    title: "Location ENG",
                    type: "text",
                    validation: (Rule) => Rule.required
                })
            ]
        },
        // Body Content for Both Languages
        {
            name: "body",
            title: "Body Content",
            type: "object",
            fields: [
                defineField({
                    name: "it",
                    title: "Body ITA",
                    type: "blockContent",
                    validation: (Rule) => Rule.required
                }),
                defineField({
                    name: "en",
                    title: "Body ENG",
                    type: "blockContent",
                    validation: (Rule) => Rule.required
                })
            ]
        },
        // Quote Fields for Both Languages
        {
            name: "quote",
            title: "Quotes",
            type: "object",
            fields: [
                defineField({
                    name: "it",
                    title: "Quote ITA",
                    type: "text",
                    validation: (Rule) => Rule.max(200).warning("Quote should not exceed 200 characters.").required
                }),
                defineField({
                    name: "en",
                    title: "Quote ENG",
                    type: "text",
                    validation: (Rule) => Rule.max(200).warning("Quote should not exceed 200 characters.").required
                })
            ]
        },
        // Image Gallery (Max 20 Images)
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    name: "image",
                    type: "image",
                    title: "Image",
                    options: {
                        hotspot: true
                    }
                }
            ],
            validation: (Rule) => Rule.max(20).warning("Maximum 20 images can be uploaded.")
        })
    ],

    preview: {
        select: {
            title: "title.it",
            media: "mainImage"
        },
        prepare (selection) {
            const {title, media} = selection;
            return {
                title,
                media,
                subtitle: `Preview of the Italian version`
            };
        }
    }
});