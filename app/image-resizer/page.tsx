import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("image-resizer")!;

export const metadata = toolMetadata(tool);

export default function ImageResizerPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool />
    </ToolPageShell>
  );
}
