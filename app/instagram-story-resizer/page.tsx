import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("instagram-story-resizer")!;

export const metadata = toolMetadata(tool);

export default function InstagramStoryResizerPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "Instagram Story", width: 1080, height: 1920 }]} defaultWidth={1080} defaultHeight={1920} />
    </ToolPageShell>
  );
}
