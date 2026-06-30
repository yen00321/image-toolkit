import { AdjustTool } from "@/components/tools/AdjustTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("sepia-filter")!;

export const metadata = toolMetadata(tool);

export default function SepiaFilterPage() {
  return (
    <ToolPageShell tool={tool}>
      <AdjustTool mode="sepia" />
    </ToolPageShell>
  );
}
