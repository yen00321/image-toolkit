import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("facebook-post-resizer")!;

export const metadata = toolMetadata(tool);

export default function FacebookPostResizerPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "Facebook Post", width: 1200, height: 630 }]} defaultWidth={1200} defaultHeight={630} />
    </ToolPageShell>
  );
}
