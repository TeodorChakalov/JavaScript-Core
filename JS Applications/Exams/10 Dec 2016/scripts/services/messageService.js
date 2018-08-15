const messageService = (() => {
    function getMyMesseges() {
        let endpoint = `messages?query={"recipient_username":"${sessionStorage.getItem("username")}"}`;

        return remote.get("appdata", endpoint, "kinvey");
    }

    function getArchieve() {
        let endpoint = `messages?query={"sender_username":"${sessionStorage.getItem("username")}"}`;
        return remote.get("appdata", endpoint, "kinvey");
    }

    function listAllUsers() {
        return remote.get("user", "", "kinvey");
    }

    function sendMessage(sender_username, sender_name, recipient_username, text) {
        let data = {sender_username, sender_name, recipient_username, text};

        return remote.post("appdata", "messages", "kinvey", data);
    }

    function deleteMsgById(id) {
        let endpoint = `messages/${id}`;
        return remote.remove("appdata", endpoint, "kinvey")
    }

    return {
        getMyMesseges,
        listAllUsers,
        sendMessage,
        getArchieve,
        deleteMsgById
    }
})();