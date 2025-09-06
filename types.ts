export interface Policy {
  id: string;
  title: string;
  summary: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Tip {
  id: string;
  question: string;
  answer: string;
}

export interface Lawsuit {
  id: string;
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  state: string;
}

export interface Story {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface Right {
  id: string;
  title: string;
  content: string;
}

export interface RightCategory {
  id: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  rights: Right[];
}

export enum ResourceType {
  Legal = 'Legal Aid & Attorneys',
  Advocacy = 'Advocacy Groups',
  Support = 'Support & Counseling',
}

export interface Resource {
  id: string;
  name: string;
  type: ResourceType;
  description: string;
  contact: string;
  state: string;
}

export interface ToolkitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  templateContent: string;
}

export interface Handbook {
  id: string;
  state: string;
  url: string;
  note?: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  details: string;
}

export interface AIAnalysisResult {
  summary: string;
  keyPoints: {
    type: 'allegation' | 'deadline' | 'action_item' | 'other';
    description: string;
  }[];
  relevantRightIds: string[];
  suggestedTemplateIds: string[];
}