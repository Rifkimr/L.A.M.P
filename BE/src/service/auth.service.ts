import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const db = new PrismaClient();

export default async function createTeacher(data: any) {
    const encryPass = await bcrypt.hash(data.password, 10);

    if (data.role === 1) {
        return db.admin.create({
            data: {
                user: {
                    create: {
                        name: data.name,
                        email: data.email,
                        password: encryPass,
                        role: data.role,
                        attachment: data.attachment,
                    }
                }
            }
        });
    }
    else if (data.role === 2) {
        return db.teacher.create({
            data: {
                user: {
                    create: {
                        name: data.name,
                        email: data.email,
                        password: encryPass,
                        role: data.role,
                        attachment: data.attachment,
                    }
                }
            }
        });
    } else {
        return db.student.create({
            data: {
                user: {
                    create: {
                        name: data.name,
                        email: data.email,
                        password: encryPass,
                        role: data.role,
                        attachment: data.attachment,
                    }
                }
            }
        });
    }
}

export function userLogin(email: any) {
    return db.user.findFirst({
        where: { email },
    });
}