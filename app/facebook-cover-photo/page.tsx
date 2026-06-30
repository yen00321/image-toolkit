import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("facebook-cover-photo")!;

export const metadata = toolMetadata(tool);

export default function FacebookCoverPhotoPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "Facebook Cover Photo", width: 851, height: 315 }]} defaultWidth={851} defaultHeight={315} />
    </ToolPageShell>
  );
}
