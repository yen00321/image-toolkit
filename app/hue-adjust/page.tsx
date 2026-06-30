import { AdjustTool } from "@/components/tools/AdjustTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("hue-adjust")!;

export const metadata = toolMetadata(tool);

export default function HueAdjustPage() {
  return (
    <ToolPageShell tool={tool}>
      <AdjustTool mode="hue" />
    </ToolPageShell>
  );
}
