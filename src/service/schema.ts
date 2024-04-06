import z from "zod";
import dayjs from "dayjs";
export const User = z.object({
  login: z.string(),
  email: z.string().optional(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string(),
  html_url: z.string(),
});

export const Label = z.object({
  id: z.number().optional(),
  node_id: z.string().optional(),
  url: z.string().optional(),
  name: z.string().optional(),
  color: z
    .string()
    .optional()
    .nullable()
    .transform((val) => (val ? `#${val}` : undefined)),
  default: z.boolean().optional(),
  description: z
    .string()
    .optional()
    .nullable()
    .transform((val) => val ?? undefined),
});
export const Issue = z.object({
  url: z.string(),
  repository_url: z.string(),
  labels_url: z.string(),
  comments_url: z.string(),
  events_url: z.string(),
  html_url: z.string(),
  id: z.number(),
  node_id: z.string(),
  number: z.number(),
  title: z.string(),
  user: User,
  labels: z.array(Label),
  state: z.string(),
  assignee: User.nullable(),
  assignees: z.array(User),
  comments: z.number(),
  created_at: z.string().transform((val) => dayjs(val)),
  updated_at: z.string().transform((val) => dayjs(val)),
  closed_at: z
    .string()
    .nullable()
    .transform((val) => (val ? dayjs(val) : null)),
  author_association: z.string(),
  body: z.string().nullable(),
  timeline_url: z.string(),
});

export const issueList = z.object({
  data: z.array(Issue),
});

export type LabelModel = z.infer<typeof Label>;
export type UserModel = z.infer<typeof User>;
export type IssueModel = z.infer<typeof Issue>;
export type IssueListModel = z.infer<typeof issueList>;
