export function shortenString(str, len) {
    return str.length > len ? str.substring(0, len - 3) + "..." : str
}