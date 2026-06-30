import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("linkedin-banner")!;

export const metadata = toolMetadata(tool);

export default function LinkedInBannerPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "LinkedIn Banner", width: 1584, height: 396 }]} defaultWidth={1584} defaultHeight={396} />
    </ToolPageShell>
  );
}
