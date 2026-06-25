import { CropTool } from "@/components/tools/CropTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("crop-image")!;

export const metadata = toolMetadata(tool);

export default function CropImagePage() {
  return (
    <ToolPageShell tool={tool}>
      <CropTool />
    </ToolPageShell>
  );
}
