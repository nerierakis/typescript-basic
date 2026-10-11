type Review = {
    rating:number;
    comment:string;
    reviewer:string;
}


const firstReview: Review = {
 rating: 5,
 comment: '最高の商品でした！',
 reviewer: '侍太郎',
};

const SecondReview: Review = {
 rating: 3,
 comment: '普通の商品でした。',
 reviewer: '侍花子',
};


console.log(firstReview);
console.log(SecondReview);