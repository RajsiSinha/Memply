export type TextLayer = {
  id: number;
  content: string;
  position: "top" | "bottom"; // initial placement
  x: number;
  y: number;
  color: string;
  fontSize: number;
  bold: boolean;
};
