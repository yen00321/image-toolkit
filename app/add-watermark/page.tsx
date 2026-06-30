import { WatermarkTool } from "@/components/tools/WatermarkTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("add-watermark")!;

export const metadata = toolMetadata(tool);

export default function AddWatermarkPage() {
  return (
    <ToolPageShell tool={tool}>
      <WatermarkTool />
    </ToolPageShell>
  );
}
