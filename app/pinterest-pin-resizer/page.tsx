import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("pinterest-pin-resizer")!;

export const metadata = toolMetadata(tool);

export default function PinterestPinResizerPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "Pinterest Pin", width: 1000, height: 1500 }]} defaultWidth={1000} defaultHeight={1500} />
    </ToolPageShell>
  );
}
