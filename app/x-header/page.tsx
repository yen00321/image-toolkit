import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("x-header")!;

export const metadata = toolMetadata(tool);

export default function XHeaderPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "X Header", width: 1500, height: 500 }]} defaultWidth={1500} defaultHeight={500} />
    </ToolPageShell>
  );
}
