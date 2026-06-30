import { PdfToImagesTool } from "@/components/tools/PdfToImagesTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("pdf-to-images")!;

export const metadata = toolMetadata(tool);

export default function PdfToImagesPage() {
  return (
    <ToolPageShell tool={tool}>
      <PdfToImagesTool />
    </ToolPageShell>
  );
}
