import { DealSectionCardData } from "@/app/data/DealSectionCardData";
import { EservicesSectionCardData } from "@/app/data/EservicesSectionCardData";
import { GalloryCardData } from "@/app/data/GalloryCardData";
import { sellerData } from "@/app/data/sellerData";
import { servicesData } from "@/app/data/servicesData";
import { userImgsData } from "@/app/data/usersImgs";
import { prisma } from "@/lib/db";

async function main() {
  for (const Eservice of EservicesSectionCardData) {
    await prisma.eservices.create({ data: Eservice });
  }
  console.log("✅ Services added successfully!");

  for (const deal of DealSectionCardData) {
    await prisma.deals.create({ data: deal });
  }
  console.log("✅ Services added successfully!");

  for (const galloryData of GalloryCardData) {
    await prisma.gallory.create({ data: galloryData });
  }
  console.log("✅ Services added successfully!");

  for (const seller of sellerData) {
    await prisma.seller.create({ data: seller });
  }
  console.log("✅ Services added successfully!");

  for (const service of servicesData) {
    await prisma.services.create({ data: service });
  }
  console.log("✅ Services added successfully!");

  for (const userImg of userImgsData) {
    await prisma.usersImgs.create({ data: userImg });
  }
  console.log("✅ Services added successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
