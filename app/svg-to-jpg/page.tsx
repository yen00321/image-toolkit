import { ConverterTool } from "@/components/tools/ConverterTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("svg-to-jpg")!;

export const metadata = toolMetadata(tool);

export default function SvgToJpgPage() {
  return (
    <ToolPageShell tool={tool}>
      <ConverterTool outputMime="image/jpeg" outputLabel="JPG" accept="image/svg+xml,.svg" />
    </ToolPageShell>
  );
}
