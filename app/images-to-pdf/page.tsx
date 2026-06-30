import { ImagesToPdfTool } from "@/components/tools/ImagesToPdfTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("images-to-pdf")!;

export const metadata = toolMetadata(tool);

export default function ImagesToPdfPage() {
  return (
    <ToolPageShell tool={tool}>
      <ImagesToPdfTool />
    </ToolPageShell>
  );
}
