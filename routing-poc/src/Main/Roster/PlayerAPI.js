const players = [{
    number: 1,
    name: 'Vivien',
    position: 1
}, {
    number: 2,
    name: 'Mayen',
    position: 2
}];

export const get = (number) => {
    return players.find(player => player.number === number);
};

export const all = () => {
    return players;
};