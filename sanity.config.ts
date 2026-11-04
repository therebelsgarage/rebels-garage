"use client"

import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { apiVersion, dataset, projectId } from "./sanity/env"
import { schemaTypes } from "./sanity/schemaTypes/post"

export default defineConfig({
  name: "rebels-garage",
  title: "The Rebels Garage Blog",
  basePath: "/studio",
  projectId: projectId || "missing-project-id",
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([S.documentTypeListItem("post").title("Blog Posts")]),
    }),
  ],
  document: {
    newDocumentOptions: (prev) => prev.filter((t) => t.templateId === "post"),
  },
  apiVersion,
})
