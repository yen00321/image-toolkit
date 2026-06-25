import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("instagram-resizer")!;

export const metadata = toolMetadata(tool);

const presets = [
  { label: "Instagram Post", width: 1080, height: 1080 },
  { label: "Instagram Portrait", width: 1080, height: 1350 },
  { label: "Instagram Story", width: 1080, height: 1920 },
];

export default function InstagramResizerPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={presets} defaultWidth={1080} defaultHeight={1080} />
    </ToolPageShell>
  );
}
