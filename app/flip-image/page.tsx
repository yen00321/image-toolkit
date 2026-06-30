import { TransformTool } from "@/components/tools/TransformTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("flip-image")!;

export const metadata = toolMetadata(tool);

export default function FlipImagePage() {
  return (
    <ToolPageShell tool={tool}>
      <TransformTool mode="flip" />
    </ToolPageShell>
  );
}
