enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

export const user1 = {
  name: "wangho",
  role: Role.ADMIN,
};

const user2 = {
  name: "Peter",
  role: Role.USER,
};

const user3 = {
  name: "Romeo",
  role: Role.GUEST,
};
