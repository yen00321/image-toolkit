import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("youtube-thumbnail-resizer")!;

export const metadata = toolMetadata(tool);

const presets = [{ label: "YouTube Thumbnail", width: 1280, height: 720 }];

export default function YouTubeThumbnailResizerPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={presets} defaultWidth={1280} defaultHeight={720} />
    </ToolPageShell>
  );
}
