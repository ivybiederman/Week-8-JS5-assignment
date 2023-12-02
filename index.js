// Define the Celebrity class
class Celebrity {
    // Constructor for Celebrity class
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    // Method to describe the celebrity
    describe() {
        return `${this.name} is a ${this.occupation}.`;
    }
}

// Define the FanClub class
class FanClub {
    // Constructor for FanClub class
    constructor(name) {
        this.name = name;
        this.members = []; // Array used to store celebrity members (Use at least one array)
    }

    // Method to add a member to the fan club
    addMember(member) {
        if (member instanceof Celebrity) {
            this.members.push(member);
        } else {
            throw new Error(`You can only add an instance of Celebrity. Argument is not a celebrity: ${member}`);
        }
    }

    // Method to describe the fan club
    describe() {
        return `${this.name} has ${this.members.length} members.`;
    }
}

// Define the EntertainmentMenu class
class EntertainmentMenu {
    // Constructor for EntertainmentMenu class
    constructor() {
        this.fanClubs = [];
        this.selectedFanClub = null;
    }

    // Method to start the menu
    start() {
        let selection = this.showMainMenuOptions();

        while (selection !== '0') {
            switch (selection) {
                // Options to create, view, and delete elements in the menu
                case '1':
                    this.createFanClub(); // Create a new fan club (Options to create elements)
                    break;
                case '2':
                    this.viewFanClub(); // View a fan club (Options to view elements)
                    break;
                case '3':
                    this.deleteFanClub(); // Delete a fan club (Options to delete elements)
                    break;
                case '4':
                    this.displayFanClubs();
                    break;
                default:
                    selection = '0';
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    // Method to show main menu options
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new fan club
        2) view fan club
        3) delete fan club
        4) display all fan clubs
        `);
    }

    // Method to show fan club menu options
    showFanClubMenuOptions(fanClubInfo) {
        return prompt(`
        0) back
        1) add member
        2) remove member
        ---------------------
        ${fanClubInfo}
        `);
    }

    // Method to display all fan clubs
    displayFanClubs() {
        let fanClubString = '';
        for (let i = 0; i < this.fanClubs.length; i++) {
            fanClubString += i + ') ' + this.fanClubs[i].name + '\n';
        }
        alert(fanClubString);
    }

    // Method to create a new fan club
    createFanClub() {
        let name = prompt('Enter name for new fan club:');
        this.fanClubs.push(new FanClub(name));
    }

    // Method to view a fan club
    viewFanClub() {
        let index = prompt('Enter the index of the fan club you wish to view:');
        if (index > -1 && index < this.fanClubs.length) {
            this.selectedFanClub = this.fanClubs[index];
            let description = 'Fan Club Name: ' + this.selectedFanClub.name + '\n';

            for (let i = 0; this.selectedFanClub.members.length; i++) {
                description += i + ') ' + this.selectedFanClub.members[i].name +
                    ' - ' + this.selectedFanClub.members[i].occupation + '\n';
            }

            let selection = this.showFanClubMenuOptions(description);
            switch (selection) {
                case '1':
                    this.addMember();
                    break;
                case '2':
                    this.removeMember();
            }
        }
    }

    // Delete a fan club (Options to delete elements)
    deleteFanClub() {
        let index = prompt('Enter the index of the fan club you wish to delete:');
        if (index > -1 && index < this.fanClubs.length) {
            this.fanClubs.splice(index, 1);
        }
    }

    // Method to add a member (Use at least one array)
    addMember() {
        let name = prompt('Enter name for new celebrity:');
        let occupation = prompt('Enter occupation for new celebrity:');
        this.selectedFanClub.members.push(new Celebrity(name, occupation));
    }

    // Method to remove a member (Options to delete elements)
    removeMember() {
        let index = prompt('Enter the index of the celebrity you wish to remove:');
        if (index > -1 && index < this.selectedFanClub.members.length) {
            this.selectedFanClub.members.splice(index, 1);
        }
    }
}

// Create an instance of the EntertainmentMenu class and start the menu
let entertainmentMenu = new EntertainmentMenu();
entertainmentMenu.start();
