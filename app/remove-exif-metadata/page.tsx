import { RemoveExifTool } from "@/components/tools/RemoveExifTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("remove-exif-metadata")!;

export const metadata = toolMetadata(tool);

export default function RemoveExifMetadataPage() {
  return (
    <ToolPageShell tool={tool}>
      <RemoveExifTool />
    </ToolPageShell>
  );
}
