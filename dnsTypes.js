var types = [
    { name: "A", number: 1 },
    { name: "AAAA", number: 28 }
]
module.exports = {
    number2String: function(number){

        for(let i = 0; i < types.length; i++){
            if(types[i].number === number){
                return types[i].name;
            }
        }

        return null;

    },
    string2Number: function(string){

        for(let i = 0; i < types.length; i++){
            if(types[i].name === string){
                return types[i].number;
            }
        }

        return null;
    }
}