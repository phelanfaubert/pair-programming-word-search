const wordSearch = (letters, word) => {
    //Joining Horizontal Join
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    //Transposing Vertical Letters
    const transpose = function (matrix) {
        let newArr = [];
        for (let i = 0; i < matrix[0].length; i++) {
            newArr.push([]);
        };

        for (let i = 0; i < matrix.length; i++) {
            for (let h = 0; h < matrix[i].length; h++) {
                newArr[h][i] = (matrix[i][h]);

            }
        }
        return newArr;
    };
    //Joining Vertical Letters
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
};

module.exports = wordSearch;
