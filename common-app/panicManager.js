//Purpose: Handles the 30-second timer, beeping triggers, and cancelation logic.

class PanicManager {
    constructor() {
        this.timer = null;
        this.secondsRemaining = 30;
        this.onTickCallback = null;
        this.onTriggerCallback = null;
    }

    // Start the countdown timer
    startCountdown(onTick, onTrigger) {
        if (this.timer) return; // Timer already running
        
        this.secondsRemaining = 30;
        this.onTickCallback = onTick;
        this.onTriggerCallback = onTrigger;

        console.log("Panic countdown started.");

        this.timer = setInterval(() => {
                this.secondsRemaining -= 1;

            // Send the current time left back to the UI (for the beep/dispkay)
            if (this.onTickCallback) {
                this.onTickCallback(this.secondsRemaining);
            }

            if (this.secondsRemaining <= 0) {
                this.executeTrigger();
            }
        }, 1000);
    }

    // The timer finished without cancelation, send pa alert
    executeTrigger() {
        this.stopTimer();
        console.log("ALERT SENT: Contacts notified.");
        if (this.onTriggerCallback) {
            this.onTriggerCallback();
        }
    }

    // Stop the timer (User clicked 'Cancel' or 'Exercising')
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            this.secondsRemaining = 30;
            console.log("Panic countdown stopped.");
        }
    }

    // Specifically for the "Cancel" button
    cancelPanicManually() {
        this.stopTimer();
        
        // Retturn a status to tell the UI to go back to Home
        return "SAFE";
    }
}

export default new PanicManager();