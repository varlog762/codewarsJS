friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'online',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}];

const whosOnline = (friends) => {
    const friendsStatus = {
        online: [],
        offline: [],
        away: []
    }
    for (let value of friends) {
        if (value.status == 'online' && value.lastActivity <= 10) {
            friendsStatus.online.push(value.username);
        } else if (value.status == 'online' && value.lastActivity > 10) {
            friendsStatus.away.push(value.username);
        } else {
            friendsStatus.offline.push(value.username);
        }
    }

    for (let key in friendsStatus) {
        console.log(friendsStatus[key].length)
        if (friendsStatus[key].length < 1) {
            delete friendsStatus[key];
        }
    }

    return friendsStatus;
}

console.log(whosOnline(friends));