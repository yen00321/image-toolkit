import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("tiktok-resizer")!;

export const metadata = toolMetadata(tool);

const presets = [{ label: "TikTok Video Cover", width: 1080, height: 1920 }];

export default function TiktokResizerPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={presets} defaultWidth={1080} defaultHeight={1920} />
    </ToolPageShell>
  );
}
