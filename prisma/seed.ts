import prisma from "../src/shared/prisma";

const levels = [
  { order: 1, title: "Beginner", requiredStars: 0 },

  { order: 2, title: "Tooth Starter", requiredStars: 50 }, // ~3 days
  { order: 3, title: "Fresh Explorer", requiredStars: 150 }, // ~1 week
  { order: 4, title: "Clean Rookie", requiredStars: 300 }, // ~2 weeks

  { order: 5, title: "Brush Warrior", requiredStars: 600 }, // ~1 month
  { order: 6, title: "Hygiene Hero", requiredStars: 1000 }, // ~1.5 months

  { order: 7, title: "Sparkle Knight", requiredStars: 1800 }, // ~3 months
  { order: 8, title: "Dental Master", requiredStars: 3000 }, // ~5 months

  { order: 9, title: "Smile Legend", requiredStars: 5000 }, // ~8 months
  { order: 10, title: "Ultimate Brush King", requiredStars: 8000 }, // ~1 year
];

async function main() {
  for (const level of levels) {
    await prisma.level.upsert({
      where: { order: level.order },
      update: {
        title: level.title,
        requiredStars: level.requiredStars,
      },
      create: level,
    });
  }

  console.log("✅ Levels seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
