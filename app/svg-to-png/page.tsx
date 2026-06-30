import { ConverterTool } from "@/components/tools/ConverterTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("svg-to-png")!;

export const metadata = toolMetadata(tool);

export default function SvgToPngPage() {
  return (
    <ToolPageShell tool={tool}>
      <ConverterTool outputMime="image/png" outputLabel="PNG" accept="image/svg+xml,.svg" />
    </ToolPageShell>
  );
}
