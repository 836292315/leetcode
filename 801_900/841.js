/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let roomsJoin = [0];

    function join(tem) {
        tem.forEach(e => {
            if (roomsJoin.indexOf(e) === -1) {
                roomsJoin.push(e);
                join(rooms[e]);
            }
        });
    }
    join(rooms[0]);
    return roomsJoin.length === rooms.length;
};