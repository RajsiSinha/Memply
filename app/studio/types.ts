export type TextLayer = {
  id: number;
  content: string;
  x: number;
  y: number;
  color: string;
  fontSize: number;
  bold: boolean;

  align: "left" | "center" | "right";
  letterSpacing: number;
  opacity: number;
  strokeWidth: number;
  strokeColor: string;
};
