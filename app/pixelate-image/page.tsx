import { PixelateTool } from "@/components/tools/PixelateTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("pixelate-image")!;

export const metadata = toolMetadata(tool);

export default function PixelateImagePage() {
  return (
    <ToolPageShell tool={tool}>
      <PixelateTool />
    </ToolPageShell>
  );
}
