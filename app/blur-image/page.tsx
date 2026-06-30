import { AdjustTool } from "@/components/tools/AdjustTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("blur-image")!;

export const metadata = toolMetadata(tool);

export default function BlurImagePage() {
  return (
    <ToolPageShell tool={tool}>
      <AdjustTool mode="blur" />
    </ToolPageShell>
  );
}
