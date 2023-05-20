function create(): string {
  return "Terima Kasih";
}

const create2 = (): number => {
  return 2;
};

const add = (x: string, y: number): string => {
  const string = `Hallo saya ${x} dan saya berumur ${y} tahun`;

  return string;
};

const result = add("Romzi", 25);

console.log(result);
