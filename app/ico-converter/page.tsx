import { IcoTool } from "@/components/tools/IcoTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("ico-converter")!;

export const metadata = toolMetadata(tool);

export default function IcoConverterPage() {
  return (
    <ToolPageShell tool={tool}>
      <IcoTool accept="image/png,image/jpeg,image/webp,.png,.jpg,.jpeg,.webp" />
    </ToolPageShell>
  );
}
