
export function lowercase_first_letter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

export function degtorad(degres) {
    return (degres * (2 * Math.PI) / 360);
}

export function radtodeg(radians) {
    return (radians * 360 / (2 * Math.PI));
}

export function pointDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
}

export function pointDirection(x1, y1, x2, y2) {
    return Math.atan2(y2-y1, x2-x1);
}
