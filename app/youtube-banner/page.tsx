import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("youtube-banner")!;

export const metadata = toolMetadata(tool);

export default function YouTubeBannerPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "YouTube Banner", width: 2560, height: 1440 }]} defaultWidth={2560} defaultHeight={1440} />
    </ToolPageShell>
  );
}
