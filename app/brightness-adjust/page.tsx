import { AdjustTool } from "@/components/tools/AdjustTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("brightness-adjust")!;

export const metadata = toolMetadata(tool);

export default function BrightnessAdjustPage() {
  return (
    <ToolPageShell tool={tool}>
      <AdjustTool mode="brightness" />
    </ToolPageShell>
  );
}
