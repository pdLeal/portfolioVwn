export function checkCooldown(lastTriggered, setLastTriggered, delay, msg = '') {
    const cooldown = delay;
    const now = Date.now();
    if (now - lastTriggered < cooldown) {
        throw new Error(msg);

    }
    setLastTriggered(now);
}