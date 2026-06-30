import { ConverterTool } from "@/components/tools/ConverterTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("heic-to-jpg")!;

export const metadata = toolMetadata(tool);

export default function HeicToJpgPage() {
  return (
    <ToolPageShell tool={tool}>
      <ConverterTool outputMime="image/jpeg" outputLabel="JPG" accept="image/heic,image/heif,.heic,.heif" />
    </ToolPageShell>
  );
}
