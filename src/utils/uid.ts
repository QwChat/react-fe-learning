export function Uid(len: number = 7): string {
    return Math.random().toString(35).substr(2, len)
}
