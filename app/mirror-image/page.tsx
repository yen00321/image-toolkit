import { TransformTool } from "@/components/tools/TransformTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("mirror-image")!;

export const metadata = toolMetadata(tool);

export default function MirrorImagePage() {
  return (
    <ToolPageShell tool={tool}>
      <TransformTool mode="mirror" />
    </ToolPageShell>
  );
}
