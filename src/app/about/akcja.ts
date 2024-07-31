'use server'

import { cookies, headers } from 'next/headers'
 

export interface ServerActionResult {
    header: string,
    value: string
}
export async function serverAction(): Promise<Array<ServerActionResult>> {

    const result: Array<ServerActionResult> = [];

    const head = headers();

    for (const [header, value] of head.entries()) {
        const line = { header, value };
        result.push(line);
        console.info('AAAAA', JSON.stringify(line));
    }

    return result;

//   const session = await getSession()
//   const userRole = session?.user?.role
 
  // Check if user is authorized to perform the action
//   if (userRole !== 'admin') {
//     throw new Error('Unauthorized access: User does not have admin privileges.')
//   }
 
  // Proceed with the action for authorized users
  // ... implementation of the action
}

export const tttt = async (): Promise<string> => {
    return 'to jest coś z serwera';
}
