import { prisma } from '@/lib/prisma';
import { getDbUserId } from '@/actions/user.action';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const userId = await getDbUserId();
    if (!userId) return NextResponse.json({ count: 0 });

    const count = await prisma.notification.count({
      where: {
        userId,
        read: false,
      },
    });

    return NextResponse.json({ count });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ count: 0 });
  }
}
