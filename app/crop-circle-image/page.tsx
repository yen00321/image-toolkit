import { CircleCropTool } from "@/components/tools/CircleCropTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("crop-circle-image")!;

export const metadata = toolMetadata(tool);

export default function CropCircleImagePage() {
  return (
    <ToolPageShell tool={tool}>
      <CircleCropTool />
    </ToolPageShell>
  );
}
