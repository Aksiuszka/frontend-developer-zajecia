interface ITypographyOptions {
  [key: string]: {
    fontSize?: number;
    fontWeight: number | "semibold" | "bold";
  };
}

export const textStyles: ITypographyOptions = {
  light: {
    fontSize: 36,
    fontWeight: 300,
  },
  medium: {
    fontSize: 36,
    fontWeight: 500,
  },
  semibold: {
    fontSize: 36,
    fontWeight: 600,
  },
  bold: {
    fontSize: 36,
    fontWeight: 700,
  },
};
