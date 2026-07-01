import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    homepage: singleton({
      label: "Homepage",
      path: "src/content/home",
      format: { data: "json" },
      schema: {
        heroText: fields.text({ label: "Hero Text" }),
        roles: fields.array(fields.text({ label: "Role" }), {
          label: "Typing Roles",
          itemLabel: (props) => props.value,
        }),
        heroImage: fields.image({
          label: "Hero Profile Image",
          directory: "public/images/hero",
          publicPath: "/images/hero/",
        }),
        aboutImage: fields.image({
          label: "About Image",
          directory: "public/images/hero",
          publicPath: "/images/hero/",
        }),
      },
    }),
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description", multiline: true }),
        image: fields.image({
          label: "Project Image",
          directory: "public/images/projects",
          publicPath: "/images/projects/",
        }),
        link: fields.url({ label: "Project Link" }),
      },
    }),
    skills: collection({
      label: "Skills",
      slugField: "name",
      path: "src/content/skills/*",
      format: { data: "json" },
      schema: {
        name: fields.slug({ name: { label: "Skill Name" } }),
        icon: fields.image({
          label: "Icon",
          directory: "public/images/skills",
          publicPath: "/images/skills/",
        }),
      },
    }),
  },
});
