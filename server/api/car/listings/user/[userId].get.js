import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  const { userId } = event.context.params;

  return prisma.car.findMany({
    where: {
      listerId: userId,
    },
    select: {
      // na5tar l7ajet li to5rejli
      image: true,
      id: true,
      name: true,
      price: true,
    },
  });
});
