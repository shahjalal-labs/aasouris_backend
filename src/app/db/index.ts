import bcrypt from "bcryptjs";
import { UserRole } from "@prisma/client";
import config from "../../config";
import prisma from "../../shared/prisma";
const superAdminData = {
  fullname: "Super Admin",
  email: "support@geopaving.com",
  password: config?.super_admin_password || "superadmin",
  role: UserRole.ADMIN,
};

const seedSuperAdmin = async () => {
  try {
    // Check if a super admin already exists
    const isSuperAdminExists = await prisma.user.findFirst({
      where: {
        role: UserRole.ADMIN,
      },
    });

    // If not, create one
    if (!isSuperAdminExists) {
      superAdminData.password = await bcrypt.hash(
        config.super_admin_password as string,
        12,
      );

      await prisma.user.create({
        data: superAdminData,
      });
      console.log("🦸 Super Admin created successfully.");
    } else {
      return;
      //   console.log("Super Admin already exists.");
    }
  } catch (error) {
    console.error("Error seeding Super Admin:", error);
  }
};

export default seedSuperAdmin;
