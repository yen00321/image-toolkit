import { ResizeTool } from "@/components/tools/ResizeTool";
import { ToolPageShell } from "@/components/ToolPageShell";
import { getTool } from "@/lib/site";
import { toolMetadata } from "@/lib/metadata";

const tool = getTool("discord-avatar-resizer")!;

export const metadata = toolMetadata(tool);

export default function DiscordAvatarResizerPage() {
  return (
    <ToolPageShell tool={tool}>
      <ResizeTool presets={[{ label: "Discord Avatar", width: 512, height: 512 }]} defaultWidth={512} defaultHeight={512} />
    </ToolPageShell>
  );
}
