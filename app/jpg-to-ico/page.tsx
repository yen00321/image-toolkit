import { IcoTool } from "@/components/tools/IcoTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("jpg-to-ico")!;

export const metadata = toolMetadata(tool);

export default function JpgToIcoPage() {
  return (
    <ToolPageShell tool={tool}>
      <IcoTool accept="image/jpeg,.jpg,.jpeg" />
    </ToolPageShell>
  );
}
