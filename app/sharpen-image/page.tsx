import { AdjustTool } from "@/components/tools/AdjustTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("sharpen-image")!;

export const metadata = toolMetadata(tool);

export default function SharpenImagePage() {
  return (
    <ToolPageShell tool={tool}>
      <AdjustTool mode="sharpen" />
    </ToolPageShell>
  );
}
