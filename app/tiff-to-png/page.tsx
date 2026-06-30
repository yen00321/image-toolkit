import { ConverterTool } from "@/components/tools/ConverterTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("tiff-to-png")!;

export const metadata = toolMetadata(tool);

export default function TiffToPngPage() {
  return (
    <ToolPageShell tool={tool}>
      <ConverterTool outputMime="image/png" outputLabel="PNG" accept="image/tiff,.tif,.tiff" />
    </ToolPageShell>
  );
}
