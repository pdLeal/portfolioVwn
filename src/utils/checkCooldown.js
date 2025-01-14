export default function checkCooldown(lastTriggered, setLastTriggered, delay, msg = '') {
    const now = Date.now();
    if (now - lastTriggered < delay) {
        throw new Error(msg);

    }
    setLastTriggered(now);
}