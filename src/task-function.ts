const getResultMessage = (student:Student): string => {
 if (student.score >= 60) {
   return `${student.name}さんは合格です。`;
 } else {
   return `${student.name}さんは不合格です。`;
 }
};

type Student = {
  name: string;
  score: number;
};

const studentA:Student = {
 name: '侍太郎',
 score: 70,
};

let resultMessage = getResultMessage(studentA);

console.log(resultMessage);