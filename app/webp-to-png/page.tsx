import { ConverterTool } from "@/components/tools/ConverterTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("webp-to-png")!;

export const metadata = toolMetadata(tool);

export default function WebpToPngPage() {
  return (
    <ToolPageShell tool={tool}>
      <ConverterTool outputMime="image/png" outputLabel="PNG" accept="image/webp,.webp" />
    </ToolPageShell>
  );
}
