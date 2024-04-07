import { LabelModel } from "@/tools/schema";

type Props = { label: LabelModel | string };
export default function Label({ label }: Props) {
  if (typeof label === "string") {
    return <div className="rounded-full bg-slate-400 px-2 py-1 text-xs text-white">{label}</div>;
  }
  return <div className="rounded-full bg-slate-400 px-2 py-1 text-xs text-white">{label.name}</div>;
}
