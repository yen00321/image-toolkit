import { CompressorTool } from "@/components/tools/CompressorTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("image-compressor")!;

export const metadata = toolMetadata(tool);

export default function ImageCompressorPage() {
  return (
    <ToolPageShell tool={tool}>
      <CompressorTool />
    </ToolPageShell>
  );
}
