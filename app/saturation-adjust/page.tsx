import { AdjustTool } from "@/components/tools/AdjustTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("saturation-adjust")!;

export const metadata = toolMetadata(tool);

export default function SaturationAdjustPage() {
  return (
    <ToolPageShell tool={tool}>
      <AdjustTool mode="saturation" />
    </ToolPageShell>
  );
}
