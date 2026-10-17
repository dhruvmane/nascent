import type { USER, SERVER, CHANNEL } from './types';

// Store Application State for Reactivity
export class ApplicationState {
    
    private loadingBarTips = [
        "Welcome to Nascent!",
        "Nascent is heavily inspired by Discord and Fluxer!",
        "You can have an animated profile and banner, for free!",
        "Nascent is Open Source, btw!",
    ]
    currentLoadingBarTip = $state(this.loadingBarTips[0]);
    private loadingBarTipDuration = 5000;  // 10 seconds
    
    // cycle between new loading tips:
    private pickRandomTip() {
        // avoid repeating the same tip back-to-back
        if (this.loadingBarTips.length < 2) return this.loadingBarTips[0];
        let tip: string;
        do {
            tip = this.loadingBarTips[
                Math.floor(Math.random() * this.loadingBarTips.length)
            ];
        } while (tip === this.currentLoadingBarTip);
        return tip;
    }

    startLoadingTips() {
        this.currentLoadingBarTip = this.pickRandomTip();

        const timer = setInterval(() => {
            this.currentLoadingBarTip = this.pickRandomTip();

            // fake loading bar simulator
            if (this.loadingBarPercentage < 100) {
                 this.loadingBarPercentage += Math.floor(Math.random() * 20);
            }
            
        }, this.loadingBarTipDuration);

        return () => clearInterval(timer);
    }

    // Loading Bar Simulate
    loadingBarPercentage = 0;

    // user servers
    servers: SERVER[] = []
}

export const App = new ApplicationState();