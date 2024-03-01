import { icons } from "lucide-react";

export type Service = {
  id: string;
  icon: keyof typeof icons;
  title: string;
  excerpt: string;
  description: string;
};

export enum ServiceType {
  HAVING = "9416cbb3332e47a297773db1a6e7beca",
  NOT_HAVING = "0bc5916dd8c04285a87cede0667f63b2",
}
