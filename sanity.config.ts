import { visionTool } from "@sanity/vision";
import { PluginOptions, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schema";
import { assistWithPresets } from "@/sanity/plugins/assist";
import structure from "@/sanity/structures";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  studio: {
    components: {
      toolMenu: (props) => {
        const { tools, renderDefault } = props;
        const structureTool = tools.find(({ name }) => name == "structure");
        const otherTools = tools.filter(({ name }) => name != "structure");

        if (!structureTool) {
          return renderDefault(props);
        }

        return props.renderDefault({
          ...props,
          tools: [structureTool, ...otherTools],
        });
      },
    },
  },
  plugins: [
    structureTool({
      structure
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Sets up AI Assist with preset prompts
    // https://www.sanity.io/docs/ai-assist
    assistWithPresets(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    process.env.NODE_ENV === "development" && visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
});
