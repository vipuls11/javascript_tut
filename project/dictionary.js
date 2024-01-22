let worddictionary = {
    Apple: "A fruit which is commonly used in dessert.",
    Banana: "A long curved fruit with soft pulpy flesh and yellow skin, when ripe it turns bright yellow",
    Cherry : "A small sweet fruit that grows in clusters and has a hard pit or stone inside",
    Grape: "A small, green fruit with numerous seeds inside",
    fig:"A fruit with thick skin and usually sweet or tart juicy flesh inside"
}

function getWordMeaning(word){
    if(worddictionary.hasOwnProperty(word)){
        return  worddictionary[word];
    }
    else {
        return 'sorry, we don\'t have meaning for that word';
    }
}
 console.log(getWordMeaning('Apple'));