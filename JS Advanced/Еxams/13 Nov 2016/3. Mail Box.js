class MailBox {
    constructor() {
        this.mailBox = [];
    }

    addMessage(subject, text) {
        this.mailBox.push({subject: subject, text: text});
        return this;
    }

    get messageCount() {
        return this.mailBox.length;
    }

    deleteAllMessages() {
        this.mailBox.length = 0;
        //return this.mailBox = [];
    }

    findBySubject(substr) {
        let result = [];
        for (let mail of this.mailBox) {
            if (mail.subject.includes(substr)) {
                result.push(mail);
            }
        }
        return result;
        // return this.mailBox.filter(m => m.subject.includes(substr));
    }

    toString() {
        if(this.mailBox.length > 0){
            let result = [];
            for (let mail of this.mailBox) {
                result.push(`* [${mail.subject}] ${mail.text}`);
            }
            return result.join('\n');

            // return this.mailBox.map(m => ` * [${m.subject}] [${m.text}]`).join('\n');
        }else{
            return ' * (empty mailbox)';
        }
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
