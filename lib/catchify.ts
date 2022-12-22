import type { AxiosResponse } from 'axios';

export type CatchifyResponse<E, R> = [E, null] | [null, R];
export default async function catchify<E = Error, R = AxiosResponse>(promise: Promise<R>): Promise<CatchifyResponse<E, R>> {
    try {
        const response: R =  await promise;
        return [null, response];
    } catch (error) {
        return [error, null] as [E, null];
    }
}
