const wordSearch = (letters, word) => { 
   
    const vertical = transpose(letters);

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    const verticalJoin = vertical.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }

    return false
  }




module.exports = wordSearch

