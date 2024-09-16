import { NextResponse } from 'next/server'

export async function GET(): Promise<any> {
  return NextResponse.json({ Status: 'Running' })
}