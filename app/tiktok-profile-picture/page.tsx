import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("tiktok-profile-picture")!;

export const metadata = toolMetadata(tool);

export default function TikTokProfilePicturePage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "TikTok Profile Picture", width: 200, height: 200 }]} defaultWidth={200} defaultHeight={200} />
    </ToolPageShell>
  );
}
