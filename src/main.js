class Timer {
    DEADLINE = "2024-09-01"
    _gap = 0;

    getCap() {
        const deadlineTime = new Date(this.DEADLINE);
        const now = new Date()
        this._gap = deadlineTime.getTime() - now.getTime();

        return this._gap
    }
}


