import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("linkedin-profile-picture")!;

export const metadata = toolMetadata(tool);

export default function LinkedInProfilePicturePage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "LinkedIn Profile Picture", width: 400, height: 400 }]} defaultWidth={400} defaultHeight={400} />
    </ToolPageShell>
  );
}
