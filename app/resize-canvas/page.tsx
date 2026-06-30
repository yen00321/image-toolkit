import { ResizeCanvasTool } from "@/components/tools/ResizeCanvasTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("resize-canvas")!;

export const metadata = toolMetadata(tool);

export default function ResizeCanvasPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeCanvasTool />
    </ToolPageShell>
  );
}
