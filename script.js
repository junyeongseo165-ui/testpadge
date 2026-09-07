/* =========================
   OUR TYPE 데이터
========================= */


/* 질문 데이터 */

const questions = [

    {
        category: "FIRST DAY",
        question: "새로운 회사에 첫 출근했다.<br>점심시간이 되었다.",
        answers: [
            {
                text: "먼저 동료에게 말을 걸고 같이 밥을 먹는다.",
                icon: "🙋",
                score: {
                    social: 2,
                    leadership: 1
                }
            },
            {
                text: "혼자 먹을 곳을 찾아 조용히 식사한다.",
                icon: "🍱",
                score: {
                    social: -1,
                    planning: 1
                }
            }
        ]
    },


    {
        category: "MEETING",
        question: "회의 중 새로운 아이디어가 떠올랐다.",
        answers: [
            {
                text: "일단 말하면서 생각을 발전시킨다.",
                icon: "🗣️",
                score: {
                    social: 2,
                    leadership: 1,
                    creativity: 1
                }
            },
            {
                text: "생각을 정리한 뒤 확실해지면 말한다.",
                icon: "📝",
                score: {
                    planning: 2,
                    social: -1
                }
            }
        ]
    },


    {
        category: "NEW PROJECT",
        question: "완전히 새로운 프로젝트를 시작한다.<br>가장 먼저 하는 생각은?",
        answers: [
            {
                text: "이걸 얼마나 새롭게 만들 수 있을까?",
                icon: "💡",
                score: {
                    creativity: 3
                }
            },
            {
                text: "현재 조건으로 가능한 방법은 무엇일까?",
                icon: "📊",
                score: {
                    planning: 2
                }
            }
        ]
    },


    {
        category: "TEAM CONFLICT",
        question: "팀원 두 명이 업무 방식 때문에 싸우고 있다.",
        answers: [
            {
                text: "누가 더 논리적인지 객관적으로 판단한다.",
                icon: "⚖️",
                score: {
                    leadership: 1,
                    planning: 1
                }
            },
            {
                text: "서로 기분이 상하지 않도록 분위기를 중재한다.",
                icon: "🤝",
                score: {
                    social: 2
                }
            }
        ]
    },


    {
        category: "SCHEDULE",
        question: "다음 주 중요한 프로젝트가 있다.",
        answers: [
            {
                text: "미리 계획을 세우고 일정표를 만든다.",
                icon: "📅",
                score: {
                    planning: 3
                }
            },
            {
                text: "상황을 보면서 유동적으로 진행한다.",
                icon: "🌊",
                score: {
                    creativity: 1,
                    social: 1
                }
            }
        ]
    },


    {
        category: "DINNER",
        question: "팀 회식이 끝났는데<br>누군가 2차를 제안한다.",
        answers: [
            {
                text: "당연히 간다. 이제부터가 진짜 회식이다.",
                icon: "🍻",
                score: {
                    social: 3
                }
            },
            {
                text: "오늘도 고생했다. 집에 가서 쉬고 싶다.",
                icon: "🏠",
                score: {
                    planning: 1,
                    social: -1
                }
            }
        ]
    },


    {
        category: "LEADERSHIP",
        question: "팀 프로젝트에서 아무도<br>리더를 하지 않으려고 한다.",
        answers: [
            {
                text: "답답해서 내가 진행을 맡는다.",
                icon: "🫡",
                score: {
                    leadership: 3,
                    social: 1
                }
            },
            {
                text: "누군가 맡을 때까지 상황을 지켜본다.",
                icon: "👀",
                score: {
                    planning: 1,
                    creativity: 1
                }
            }
        ]
    },


    {
        category: "DEADLINE",
        question: "업무 마감이 일주일 남았다.",
        answers: [
            {
                text: "미리 대부분 끝내 놓는다.",
                icon: "✅",
                score: {
                    planning: 3
                }
            },
            {
                text: "아직 시간이 있으니 조금 더 생각한다.",
                icon: "☕",
                score: {
                    creativity: 2
                }
            }
        ]
    },


    {
        category: "IDEA",
        question: "회사 아이디어 공모전에<br>참여하게 되었다.",
        answers: [
            {
                text: "남들이 생각하지 못한 새로운 아이디어를 낸다.",
                icon: "🚀",
                score: {
                    creativity: 3,
                    leadership: 1
                }
            },
            {
                text: "실제로 돈이 될 수 있는 현실적인 아이디어를 낸다.",
                icon: "💰",
                score: {
                    planning: 2,
                    leadership: 1
                }
            }
        ]
    },


    {
        category: "WORK STYLE",
        question: "퇴근 30분 전 상사가<br>새로운 업무를 부탁한다.",
        answers: [
            {
                text: "우선 상황을 파악하고 바로 해결 방법을 찾는다.",
                icon: "🔥",
                score: {
                    leadership: 2,
                    planning: 1
                }
            },
            {
                text: "왜 지금 이 업무가 필요한지부터 생각한다.",
                icon: "🤔",
                score: {
                    creativity: 2,
                    planning: 1
                }
            }
        ]
    }

];



/* =========================
   결과 유형
========================= */

const results = {

    boss: {

        title: "회의실 점령 부장",

        emoji: "👔",

        subtitle:
            "회의 시작 3분 만에 결론 내리는 사람",

        description:
            "당신은 조직 안에서 자연스럽게 중심이 되는 타입입니다. 의견 표현이 빠르고 책임지는 것을 두려워하지 않습니다. 회의가 길어지면 어느 순간 정리하고 결론을 내립니다.",

        companyLife:
            "“일단 다들 의견 말해봐요. 근데 제 생각은요...” 결국 마지막에는 당신이 정리합니다.",

        stats: {
            social: 88,
            leadership: 95,
            creativity: 68,
            planning: 85
        }

    },


    planner: {

        title: "PPT 100장 만드는 기획자",

        emoji: "📊",

        subtitle:
            "한 장이면 설명될 내용을 100장으로 완성하는 사람",

        description:
            "당신은 준비와 계획을 중요하게 생각하는 타입입니다. 프로젝트가 시작되면 일정표부터 만들고 모든 가능성을 미리 검토합니다. 가끔 너무 완벽하게 준비하려다가 시간이 부족해질 수도 있습니다.",

        companyLife:
            "“혹시 모르니까 이 자료도 추가해둘게요.” 당신의 폴더에는 backup_final_final_v3 파일이 존재합니다.",

        stats: {
            social: 58,
            leadership: 70,
            creativity: 72,
            planning: 98
        }

    },


    founder: {

        title: "아이디어 폭주 창업자",

        emoji: "🚀",

        subtitle:
            "사업 아이디어는 300개인데 아직 시작한 건 없다",

        description:
            "당신의 머릿속에는 항상 새로운 아이디어가 넘쳐납니다. 기존 방식보다 새로운 가능성을 찾는 것을 좋아하며, 가끔 회의 중에도 전혀 다른 사업을 구상합니다.",

        companyLife:
            "“이거 진짜 서비스로 만들면 대박 아닌가?” 당신은 오늘도 새로운 스타트업 아이디어를 생각합니다.",

        stats: {
            social: 75,
            leadership: 78,
            creativity: 98,
            planning: 45
        }

    },


    intern: {

        title: "술자리형 인턴",

        emoji: "🍻",

        subtitle:
            "회의에서는 조용하지만 회식 2차에서 사회 보는 사람",

        description:
            "당신은 평소에는 상황을 관찰하지만 사람들과 친해지는 순간 숨겨진 텐션이 폭발합니다. 회사에서는 조용해 보여도 인간관계 적응력이 뛰어난 타입입니다.",

        companyLife:
            "점심 메뉴를 정할 때는 조용하지만 회식 장소는 누구보다 잘 알고 있습니다.",

        stats: {
            social: 98,
            leadership: 55,
            creativity: 70,
            planning: 50
        }

    }

};



/* =========================
   상태 관리
========================= */

let currentQuestion = 0;


let scores = {

    social: 0,
    leadership: 0,
    creativity: 0,
    planning: 0

};



/* =========================
   DOM
========================= */

const screens = document.querySelectorAll(".screen");

const startBtn =
    document.getElementById("startBtn");

const questionContainer =
    document.getElementById("questionContainer");

const currentQuestionText =
    document.getElementById("currentQuestion");

const totalQuestionText =
    document.getElementById("totalQuestion");

const progressFill =
    document.getElementById("progressFill");

const progressText =
    document.getElementById("progressText");

const restartBtn =
    document.getElementById("restartBtn");

const shareBtn =
    document.getElementById("shareBtn");



/* =========================
   화면 전환
========================= */

function showScreen(screenId) {

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    setTimeout(() => {

        document
            .getElementById(screenId)
            .classList.add("active");

    }, 100);

}



/* =========================
   시작
========================= */

startBtn.addEventListener("click", () => {

    showScreen("test");

    setTimeout(() => {

        renderQuestion();

    }, 300);

});



/* =========================
   질문 렌더링
========================= */

function renderQuestion() {

    const question = questions[currentQuestion];


    currentQuestionText.textContent =
        String(currentQuestion + 1).padStart(2, "0");


    totalQuestionText.textContent =
        questions.length;


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    progressFill.style.width =
        progress + "%";


    progressText.textContent =
        Math.round(progress) + "%";


    questionContainer.innerHTML = `

        <div class="question-category">
            ${question.category}
        </div>


        <h2 class="question-title">
            ${question.question}
        </h2>


        <div class="answer-grid">

            ${question.answers.map((answer, index) => `

                <button
                    class="answer-card"
                    data-answer="${index}"
                >

                    <div>

                        <div class="answer-letter">
                            ${index === 0 ? "A" : "B"}
                        </div>

                        <div class="answer-icon">
                            ${answer.icon}
                        </div>

                    </div>


                    <div class="answer-text">
                        ${answer.text}
                    </div>

                </button>

            `).join("")}

        </div>

    `;


    const answerButtons =
        document.querySelectorAll(".answer-card");


    answerButtons.forEach(button => {

        button.addEventListener("click", () => {

            const answerIndex =
                Number(button.dataset.answer);


            selectAnswer(answerIndex);

        });

    });

}



/* =========================
   답변 선택
========================= */

function selectAnswer(answerIndex) {

    const selectedAnswer =
        questions[currentQuestion]
            .answers[answerIndex];


    /* 점수 반영 */

    for (const key in selectedAnswer.score) {

        scores[key] +=
            selectedAnswer.score[key];

    }


    /* 선택 애니메이션 */

    const cards =
        document.querySelectorAll(".answer-card");


    cards.forEach(card => {

        card.style.pointerEvents = "none";

    });


    cards[answerIndex].style.borderColor =
        "#c6ff00";


    cards[answerIndex].style.transform =
        "scale(1.03)";


    /* 다음 질문 */

    setTimeout(() => {

        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            renderQuestion();

        } else {

            finishTest();

        }

    }, 350);

}



/* =========================
   테스트 종료
========================= */

function finishTest() {

    showScreen("loading");


    setTimeout(() => {

        calculateResult();

    }, 2200);

}



/* =========================
   결과 계산
========================= */

function calculateResult() {

    let resultType;


    /*
        결과 알고리즘

        리더십이 가장 높음
        → 회의실 점령 부장

        계획성이 가장 높음
        → PPT 100장 기획자

        창의성이 가장 높음
        → 아이디어 폭주 창업자

        사회성이 가장 높음
        → 술자리형 인턴
    */


    const highestScore =
        Math.max(
            scores.social,
            scores.leadership,
            scores.creativity,
            scores.planning
        );


    if (
        scores.leadership === highestScore
    ) {

        resultType = results.boss;

    }

    else if (
        scores.planning === highestScore
    ) {

        resultType = results.planner;

    }

    else if (
        scores.creativity === highestScore
    ) {

        resultType = results.founder;

    }

    else {

        resultType = results.intern;

    }


    displayResult(resultType);

}



/* =========================
   결과 출력
========================= */

function displayResult(result) {

    document.getElementById("resultEmoji").textContent =
        result.emoji;


    document.getElementById("resultTitle").textContent =
        result.title;


    document.getElementById("resultSubtitle").textContent =
        result.subtitle;


    document.getElementById("resultDescription").textContent =
        result.description;


    document.getElementById("companyLife").textContent =
        result.companyLife;


    animateStat(
        "social",
        result.stats.social
    );


    animateStat(
        "leadership",
        result.stats.leadership
    );


    animateStat(
        "creativity",
        result.stats.creativity
    );


    animateStat(
        "planning",
        result.stats.planning
    );


    showScreen("result");

}



/* =========================
   능력치 애니메이션
========================= */

function animateStat(type, value) {

    const scoreElement =
        document.getElementById(
            type + "Score"
        );


    const barElement =
        document.getElementById(
            type + "Bar"
        );


    scoreElement.textContent = value;


    setTimeout(() => {

        barElement.style.width =
            value + "%";

    }, 400);

}



/* =========================
   다시 하기
========================= */

restartBtn.addEventListener("click", () => {

    currentQuestion = 0;


    scores = {

        social: 0,
        leadership: 0,
        creativity: 0,
        planning: 0

    };


    document.querySelectorAll(".stat-fill")
        .forEach(bar => {

            bar.style.width = "0%";

        });


    showScreen("landing");

});



/* =========================
   결과 공유
========================= */

shareBtn.addEventListener("click", async () => {

    const title =
        document.getElementById("resultTitle")
            .textContent;


    const text =
        `나의 사회생활 유형은 "${title}" 입니다! 
OUR TYPE에서 확인해보세요.`;


    if (navigator.share) {

        try {

            await navigator.share({

                title: "OUR TYPE",

                text: text,

                url: window.location.href

            });

        }

        catch (error) {

            console.log("공유 취소");

        }

    }

    else {

        try {

            await navigator.clipboard.writeText(

                text +
                "\n" +
                window.location.href

            );


            showToast();

        }

        catch (error) {

            alert(text);

        }

    }

});



/* =========================
   토스트
========================= */

function showToast() {

    const toast =
        document.getElementById("toast");


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}



/* =========================
   초기 실행
========================= */

console.log("OUR TYPE 시작");

console.log(
    "총 질문 수:",
    questions.length
);