// 扩展问题和选项数据
const questions = [
    {//0
        question: "Childhood was _____________.",
        styleClass: "question1",
        options: [
            {text: "a butterfly", next: 1, styleClass: "option1-1"},
            {text: "The Ice Age", next: 2, styleClass: "option1-2"},
        ],
    },
    {//1
        question: "_____________ are staggered.",
        styleClass: "question2-1",
        options: [
            {text: "The sun and the moon", next: 3, styleClass: "option2-11"},
            {text: "Blades in the stream", next: 4, styleClass: "option2-12"},
        ],
        requiredFrom: [0], // 来自问题0的特定选项才会到达此问题
    },
    {//2
        question: "_____________ are staggered.",
        styleClass: "question2-2",
        options: [
            {text: "The sun and the moon", next: 5, styleClass: "option2-21"},
            {text: "Blades in the stream", next: 6, styleClass: "option2-22"},
        ],
        requiredFrom: [0], // 来自问题0的特定选项才会到达此问题
    },
    {//3
        question: "I've tried to __________.",
        styleClass: "question3-1-1",
        options: [
            {text: "go back in time.", next: 7, styleClass: "option3-1-11"},
            {text: "go back to the future.", next: 8, styleClass: "option3-1-12"},
        ],
        requiredFrom: [1], // 来自问题1的特定选项才会到达此问题
    },
    {//4
        question: "I've tried to __________.",
        styleClass: "question3-1-2",
        options: [
            {text: "go back in time.", next: 9, styleClass: "option3-1-21"},
            {text: "go back to the future.", next: 10, styleClass: "option3-1-22"},
        ],
        requiredFrom: [1], // 来自问题1的特定选项才会到达此问题
    },
    {//5
        question: "I've tried to __________.",
        styleClass: "question3-2-1",
        options: [
            {text: "go back in time.", next: 11, styleClass: "option3-2-11"},
            {text: "go back to the future.", next: 12, styleClass: "option3-2-12"},
        ],
        requiredFrom: [2], // 来自问题2的特定选项才会到达此问题
    },
    {//6
        question: "I've tried to __________.",
        styleClass: "question3-2-2",
        options: [
            {text: "go back in time.", next: 13, styleClass: "option3-2-21"},
            {text: "go back to the future.", next: 14, styleClass: "option3-2-22"},
        ],
        requiredFrom: [2], // 来自问题2的特定选项才会到达此问题
    },
    {//7
        question: "Now lying on___________.",
        styleClass: "question4-1-1",
        options: [
            {text: "500g cotton grey checked sheets.", next: 15, styleClass: "option4-1-11"},
            {text: "in a glass enclosure in the first case on the top floor of the museum.", next: 16, styleClass: "option4-1-12"},
        ],
        requiredFrom: [3], // 来自问题3的特定选项才会到达此问题
    },
    {//8
        question: "Now lying on___________.",
        styleClass: "question4-1-2",
        options: [
            {text: "500g cotton grey checked sheets.", next: 17, styleClass: "option4-1-21"},
            {text: "in a glass enclosure in the first case on the top floor of the museum.", next: 18, styleClass: "option4-1-22"},
        ],
        requiredFrom: [3], // 来自问题3的特定选项才会到达此问题
    },
    {//9
        question: "Now lying on___________.",
        styleClass: "question4-2-1",
        options: [
            {text: "500g cotton grey checked sheets.", next: 19, styleClass: "option4-2-11"},
            {text: "in a glass enclosure in the first case on the top floor of the museum.", next: 20, styleClass: "option4-2-12"},
        ],
        requiredFrom: [4], // 来自问题0的特定选项才会到达此问题
    },
    {//10
        question: "Now lying on___________.",
        styleClass: "question4-2-2",
        options: [
            {text: "500g cotton grey checked sheets.", next: 21, styleClass: "option4-2-21"},
            {text: "in a glass enclosure in the first case on the top floor of the museum.", next: 22, styleClass: "option4-2-22"},
        ],
        requiredFrom: [4], // 来自问题0的特定选项才会到达此问题
    },
    {//11
        question: "Now lying on___________.",
        styleClass: "question4-3-1",
        options: [
            {text: "500g cotton grey checked sheets.", next: 23, styleClass: "option4-3-11"},
            {text: "in a glass enclosure in the first case on the top floor of the museum.", next: 24, styleClass: "option4-3-12"},
        ],
        requiredFrom: [5], // 来自问题0的特定选项才会到达此问题
    },
    {//12
        question: "Now lying on___________.",
        styleClass: "question4-3-2",
        options: [
            {text: "500g cotton grey checked sheets.", next: 25, styleClass: "option4-3-21"},
            {text: "in a glass enclosure in the first case on the top floor of the museum.", next: 26, styleClass: "option4-3-22"},
        ],
        requiredFrom: [5], // 来自问题0的特定选项才会到达此问题
    },{//13
        question: "Now lying on___________.",
        styleClass: "question4-4-1",
        options: [
            {text: "500g cotton grey checked sheets.", next: 27, styleClass: "option4-4-11"},
            {text: "in a glass enclosure in the first case on the top floor of the museum.", next: 28, styleClass: "option4-4-12"},
        ],
        requiredFrom: [6], // 来自问题0的特定选项才会到达此问题
    },
    {//14
        question: "Now lying on___________.",
        styleClass: "question4-4-2",
        options: [
            {text: "500g cotton grey checked sheets.", next: 29, styleClass: "option4-4-21"},
            {text: "in a glass enclosure in the first case on the top floor of the museum.", next: 30, styleClass: "option4-4-22"},
        ],
        requiredFrom: [6], // 来自问题0的特定选项才会到达此问题
    },

    { //15
        question:"总结",
        end: true,
    },

    { //16
        question:"总结",
        end: true,
    },
    { //17
        question:"总结",
        end: true,
    },
    { //18
        question:"总结",
        end: true,
    },
    { //19
        question:"总结",
        end: true,
    },
    { //20
        question:"总结",
        end: true,
    },
    { //21
        question:"总结",
        end: true,
    },
    { //22
        question:"总结",
        end: true,
    },
    { //23
        question:"总结",
        end: true,
    },
    { //24
        question:"总结",
        end: true,
    },
    { //25
        question:"总结",
        end: true,
    },
    { //26
        question:"总结",
        end: true,
    },
    { //27
        question:"总结",
        end: true,
    },
    { //28
        question:"总结",
        end: true,
    },
    { //29
        question:"总结",
        end: true,
    },
    { //30
        question:"总结",
        end: true,
    },
    { //31
        question:"总结",
        end: true,
    },

];

function changeBackground(className) {
    document.body.className = className;
}

let userChoices = []; // 用于存储用户选择

// 添加辅助函数判断是否满足特定来源条件
function shouldDisplayQuestion(currentIndex, previousIndexes) {
    if (!questions[currentIndex].requiredFrom) return true;
    return questions[currentIndex].requiredFrom.some(index => previousIndexes.includes(index));
}

function displayQuestion(index, previousIndexes=[]) {

    if (!shouldDisplayQuestion(index, previousIndexes)) {
        alert("游戏结束！\n你的选择：" + userChoices.join(", "));
        return;
    }

    const questionData = questions[index];
    const questionElement=document.getElementById('question');


    const optionsDiv = document.getElementById('options');

    questionElement.textContent=questionData.question;
    questionElement.className=questionData.styleClass;

    optionsDiv.innerHTML = ''; // 清空之前的选项

    changeBackground(`background-${index + 1}`);
    console.log('change background')
    if (index>=15){
        console.log(`${index}`);
        console.log('已经走到最后了');
        displayResult();
        return;
    }

    questionData.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.classList.add('option', option.styleClass);
        button.innerText = option.text;
        button.addEventListener('click', () => {
            userChoices.push(option.text);
            displayQuestion(option.next, [...previousIndexes, index]); // 记录路径并跳转
        });
        optionsDiv.appendChild(button);
    });



function displayResult() {
    const resultElement = document.getElementById('result');
    // 清空结果元素中的内容
    resultElement.innerHTML = '';
    // 设置结果元素的样式，使其表现为flex容器
    resultElement.style.display = 'flex';
    resultElement.style.flexDirection = 'column';
    resultElement.style.alignItems = 'flex-start';

    userChoices.forEach(choice => {
        const choiceElement = document.createElement('div');
        choiceElement.textContent = choice;
        choiceElement.style.margin = '5px 0';
        // choiceElement.style.fontSize = '16px';
        // choiceElement.style.color = 'blue';

        resultElement.appendChild(choiceElement);
    });

    const questionElement = document.getElementById('question');
    questionElement.style.display = 'none';
    const optionsElement = document.getElementById('options');
    optionsElement.style.display = 'none';
}



}

// 开始游戏
displayQuestion(0);