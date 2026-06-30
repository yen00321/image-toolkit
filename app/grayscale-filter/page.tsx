import { AdjustTool } from "@/components/tools/AdjustTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("grayscale-filter")!;

export const metadata = toolMetadata(tool);

export default function GrayscaleFilterPage() {
  return (
    <ToolPageShell tool={tool}>
      <AdjustTool mode="grayscale" />
    </ToolPageShell>
  );
}
