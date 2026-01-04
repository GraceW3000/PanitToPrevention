// Purpose: Handles the mathematical analysis of HRV signals.

export const analyzeHRV = (currentHRV, baselineHRV, previousHRV = null) => {
    // Step 1. Calculate pecentage drop from baseline
    const percentDrop = (baselineHRV - currentHRV) / baselineHRV;

    // Step 2. Calculate "Rate of Change" (How fast did it drop since the last reading?)
    let rateOfChange = 0;
    if (previousHRV) {
        rateOfChange = previousHRV - currentHRV;
    }

    // THRESHLDS (These can be adjusted in settings later)
    const DROP_LIMIT = 0.25; // 25% drop
    const CRASH_LIMIT = 15;  // 15ms sudden drop

    // DETERMINATION Logic
    if (percentDrop >= DROP_LIMIT || rateOfChange >= CRASH_LIMIT) {
        return {
            isIssueDetected: true,
            severity: percentDrop > 0.40 ? "HIGH" : "MEDIUM",
            reason: `HRV dropped by ${Math.round(percentDrop * 100)}%`
        };
    }

    return { isIssueDetected: false, severity: "NONE" };
}