import { ConverterTool } from "@/components/tools/ConverterTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("image-to-webp")!;

export const metadata = toolMetadata(tool);

export default function ImageToWebpPage() {
  return (
    <ToolPageShell tool={tool}>
      <ConverterTool outputMime="image/webp" outputLabel="WebP" accept="image/png,image/jpeg" />
    </ToolPageShell>
  );
}
