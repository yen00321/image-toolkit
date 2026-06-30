import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("instagram-reel-cover")!;

export const metadata = toolMetadata(tool);

export default function InstagramReelCoverPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "Instagram Reel Cover", width: 1080, height: 1920 }]} defaultWidth={1080} defaultHeight={1920} />
    </ToolPageShell>
  );
}
