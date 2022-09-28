// Class to get a countdown between two dates
class Countdown {
    constructor(targetDate, currentDate) {
        if(typeof currentDate == 'string')
            this.currentDate = new Date(currentDate);
        else if(typeof currentDate == 'object')
            this.currentDate = currentDate;
        else
            this.currentDate = new Date();

        if(typeof targetDate == 'string')
            this.targetDate = new Date(targetDate);
        else if(typeof targetDate == 'object')
            this.targetDate = targetDate;
    }

    // Set a Custom Year to Either Target or Current Date
    setYear(toModify='', target = ''){
        if(toModify=='targetDate'){
            if(target!='')
                this.targetDate.setFullYear(target);
            else
                this.targetDate.setFullYear(new Date().getFullYear());
            return this.targetDate;
        }
        else if(toModify=='currentDate'){
            if(target!='')
                this.currentDate.setFullYear(target);
            else
                this.currentDate.setFullYear(new Date().getFullYear());
                return this.currentDate;
        }
    }

    // Get Full Countdown in Miliseconds
    get getFullCountdownMiliseconds(){
        return this.targetDate.getTime() - this.currentDate.getTime();
    }

    // Get Full Countdown in Days
    get getFullCountdownDays(){
        return this.getFullCountdownMiliseconds / (1000 * 60 * 60 * 24)
    }

    // Get Full Countdown in Months
    get getFullCountdownMonths(){
        return this.targetDate.getMonth() - this.currentDate.getMonth();
    }

    // Get Full Countdown in Years
    get getFullCountdownYears(){
        return this.targetDate.getFullYear() - this.currentDate.getFullYear();
    }

    // Update the current date
    get updateCurrentTime(){
        this.currentDate = new Date()
        return this.currentDate;
    }

    // Get Full Countdown
    get getFullCountdown(){
        //return this.getFullCountdownDays;
        let countdownMS = this.getFullCountdownMiliseconds;
        const countdownDaysBetweenTarget = new Date(this.targetDate.getFullYear(), this.targetDate.getMonth() + 1, 0).getDate();
        const countdownDaysBetweenCurrent = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
        this.countdownSeconds = 60 - this.targetDate.getSeconds() - this.currentDate.getSeconds() - 1;
        this.countdownMinutes = 60 - this.targetDate.getMinutes() - this.currentDate.getMinutes() - 1;
        this.countdownHours = 24 - this.targetDate.getHours() - this.currentDate.getHours() - 1;
        if(this.targetDate.getMonth() != this.currentDate.getMonth()){
            this.countdownDays = (countdownDaysBetweenTarget - (countdownDaysBetweenTarget - this.targetDate.getDate()) - 1) + (countdownDaysBetweenCurrent - this.currentDate.getDate());
            this.countdownMonths = this.getFullCountdownMonths - 1;
        }
        else{
            this.countdownDays = countdownDaysBetweenTarget - countdownDaysBetweenCurrent;
            this.countdownMonths = this.getFullCountdownMonths;
        }
        this.countdownYears = this.getFullCountdownYears;
        //return countdownDays;
        return this.countdownDays+'-'+this.countdownMonths+'-'+this.countdownYears+' '+this.countdownHours+'-'+this.countdownMinutes+'-'+this.countdownSeconds;
        //this.countdownDays = this.countdownMS / (1000 * 60 * 60 *24);
        //this.countdownDays = this.countdownMS / (1000 * 60 * 60 *24);

    }
}