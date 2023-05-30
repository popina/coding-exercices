export type User = {
  id: number;
  name: string;
  orders: { id: number; value: number }[];
};

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    orders: [
      { id: 1, value: 100.0 },
      { id: 2, value: 200.0 },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    orders: [
      { id: 3, value: 300.0 },
      { id: 4, value: 400.0 },
    ],
  },
  {
    id: 3,
    name: "Jim Doe",
    orders: [
      { id: 5, value: 500.0 },
      { id: 6, value: 600.0 },
      { id: 7, value: 700.0 },
    ],
  },
  {
    id: 4,
    name: "Jill Doe",
    orders: [],
  },
];
