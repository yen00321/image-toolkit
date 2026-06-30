import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("instagram-profile-picture")!;

export const metadata = toolMetadata(tool);

export default function InstagramProfilePicturePage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "Instagram Profile Picture", width: 320, height: 320 }]} defaultWidth={320} defaultHeight={320} />
    </ToolPageShell>
  );
}
