import { LabelModel } from "@/service/schema";

type Props = { label: LabelModel };
export default function Label({ label }: Props) {
  return <div className="rounded-full bg-slate-400 px-2 py-1 text-xs text-white">{label.name}</div>;
}
