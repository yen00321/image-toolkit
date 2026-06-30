import { ConverterTool } from "@/components/tools/ConverterTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("gif-to-png")!;

export const metadata = toolMetadata(tool);

export default function GifToPngPage() {
  return (
    <ToolPageShell tool={tool}>
      <ConverterTool outputMime="image/png" outputLabel="PNG" accept="image/gif,.gif" />
    </ToolPageShell>
  );
}
