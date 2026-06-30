import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("youtube-shorts-thumbnail")!;

export const metadata = toolMetadata(tool);

export default function YouTubeShortsThumbnailPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "YouTube Shorts Thumbnail", width: 1080, height: 1920 }]} defaultWidth={1080} defaultHeight={1920} />
    </ToolPageShell>
  );
}
