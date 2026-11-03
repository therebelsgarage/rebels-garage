import { defineArrayMember, defineField, defineType } from "sanity"
import { services } from "../../lib/services"

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (r) => r.required().max(90),
    }),
    defineField({
      name: "slug",
      title: "URL",
      description: "Click Generate to build the URL from the title.",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publish date",
      type: "datetime",
      group: "content",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Featured image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Image description (alt text)",
          description: "Describe the photo for Google, e.g. \"Ford F-150 rear bumper repair at The Rebels Garage in Las Vegas\".",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Short summary",
      description: "One or two sentences shown on the blog page.",
      type: "text",
      rows: 3,
      group: "content",
      validation: (r) => r.max(220),
    }),
    defineField({
      name: "body",
      title: "Post",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h2" },
            { title: "Subheading", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL", validation: (r) => r.uri({ allowRelative: true, scheme: ["http", "https", "tel", "mailto"] }) }],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Image description (alt text)", validation: (r) => r.required() },
            { name: "caption", type: "string", title: "Caption" },
          ],
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "relatedService",
      title: "Related service",
      description: "Adds a link to this service page at the end of the post. Good for SEO.",
      type: "string",
      group: "content",
      options: { list: services.map((s) => ({ title: s.name, value: s.slug })) },
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      description: "Optional. Shown in Google results. Defaults to the post title.",
      type: "string",
      group: "seo",
      validation: (r) => r.max(65).warning("Google usually cuts titles off around 60 characters."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      description: "Optional. Shown under the title in Google. Defaults to the short summary.",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (r) => r.max(160).warning("Keep it under about 155 characters."),
    }),
  ],
  orderings: [{ title: "Newest first", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", date: "publishedAt", media: "mainImage" },
    prepare: ({ title, date, media }) => ({
      title,
      subtitle: date ? new Date(date).toLocaleDateString("en-US") : "No date",
      media,
    }),
  },
})

export const schemaTypes = [post]
