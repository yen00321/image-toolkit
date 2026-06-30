import { AdjustTool } from "@/components/tools/AdjustTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("invert-colors")!;

export const metadata = toolMetadata(tool);

export default function InvertColorsPage() {
  return (
    <ToolPageShell tool={tool}>
      <AdjustTool mode="invert" />
    </ToolPageShell>
  );
}
