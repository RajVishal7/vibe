import { PrismaClient, Prisma } from "../src/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        { title: "Join the Prisma Discord", content: "https://pris.ly/discord", published: true },
        { title: "Prisma on YouTube", content: "https://pris.ly/youtube" },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    posts: {
      create: [
        { title: "Follow Prisma on Twitter", content: "https://www.twitter.com/prisma", published: true },
      ],
    },
  },
];

async function main() {
  try {
    for (const u of userData) {
      await prisma.user.create({ data: u });
    }
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
