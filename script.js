
"use strict";

// 一、朝代與歷史時期資料
const dynasties = [
  {
    id: "early",
    name: "夏、商、周",
    date: "約公元前 2070 年起",
    desc: "早期中國文明逐步發展，周代形成分封制度與禮樂文化。",
    detail: "夏朝的年代與史實仍有討論；商代甲骨文提供了重要的歷史證據。周朝分為西周與東周，東周又分春秋、戰國。"
  },
  {
    id: "qin",
    name: "秦朝",
    date: "公元前 221–前 207 年",
    desc: "秦始皇統一六國，推行郡縣制及文字、度量衡等制度。",
    detail: "公元前 221 年，秦王嬴政完成統一，建立皇帝制度。秦朝推行多項制度改革，但在秦始皇死後不久便走向滅亡。"
  },
  {
    id: "han",
    name: "漢朝",
    date: "公元前 202–公元 220 年",
    desc: "漢朝發展儒學、對外交流與絲綢之路，影響深遠。",
    detail: "漢朝分為西漢與東漢。漢武帝時期國力擴張，張騫出使西域促進了中原與西域的交流。"
  },
  {
    id: "three",
    name: "三國時代",
    date: "公元 220–280 年",
    desc: "魏、蜀、吳三國鼎立，留下許多著名的戰爭與人物故事。",
    detail: "曹魏、蜀漢、孫吳分別控制不同地區。赤壁之戰是三國形成過程中的重要戰役，但小說中的部分情節與正史不同。"
  },
  {
    id: "jin",
    name: "晉朝與南北朝",
    date: "公元 266–589 年",
    desc: "政權多次更替，人口遷徙促進南北文化交流。",
    detail: "西晉於 280 年重新統一中國，後因內亂與戰爭而衰弱。此後南北政權長期並立，直到隋朝再次完成統一。"
  },
  {
    id: "sui-tang",
    name: "隋、唐",
    date: "公元 581–907 年",
    desc: "重新統一中國，制度、文化、商業與國際交流蓬勃發展。",
    detail: "隋朝建立大運河等重要工程。唐朝國力強盛，長安成為國際交流的重要都市，後期因安史之亂而由盛轉衰。"
  },
  {
    id: "song",
    name: "宋朝",
    date: "公元 960–1279 年",
    desc: "商業、城市、科技與文化發展顯著。",
    detail: "宋朝分為北宋與南宋。活字印刷、火藥與指南針等技術的發展，對後世產生重要影響。"
  },
  {
    id: "yuan",
    name: "元朝",
    date: "公元 1271–1368 年",
    desc: "蒙古建立的王朝，促進歐亞大陸的交流。",
    detail: "忽必烈建立元朝，並於 1279 年消滅南宋殘餘勢力，完成對全中國的統一。"
  },
  {
    id: "ming",
    name: "明朝",
    date: "公元 1368–1644 年",
    desc: "皇權制度發展，鄭和下西洋促進海上交流。",
    detail: "明朝建立後，南京與北京先後成為重要都城。鄭和率領船隊多次遠航，晚明則面臨財政與政治等多重問題。"
  },
  {
    id: "qing",
    name: "清朝",
    date: "公元 1636–1912 年",
    desc: "清朝統治範圍擴大，晚期面臨內憂外患與制度轉型。",
    detail: "清朝於 1636 年改國號為大清，1644 年入主北京。1912 年清帝退位，延續兩千多年的帝制告終。"
  }
];

// 二、重大歷史事件
// year 使用負數表示公元前，正數表示公元。
const events = [
  { year: -1046, era: "early", title: "周滅商", desc: "周武王擊敗商朝，周朝建立。此年代為常見的西周起始紀年之一。" },
  { year: -770, era: "early", title: "東周開始", desc: "周平王東遷洛邑，春秋時期通常以此為起點。" },
  { year: -221, era: "qin", title: "秦始皇統一六國", desc: "秦王嬴政完成統一，建立中央集權的秦帝國。" },
  { year: -209, era: "qin", title: "陳勝、吳廣起事", desc: "秦末大規模起義爆發，加速秦朝統治瓦解。" },
  { year: -202, era: "han", title: "西漢建立", desc: "劉邦擊敗項羽後建立漢朝，定都長安。" },
  { year: -141, era: "han", title: "漢武帝即位", desc: "漢武帝在位期間推動制度調整、對外擴張與文化政策。" },
  { year: 25, era: "han", title: "東漢建立", desc: "劉秀重建漢朝，定都洛陽。" },
  { year: 184, era: "han", title: "黃巾之亂", desc: "黃巾起事動搖東漢統治，地方軍閥勢力逐漸崛起。" },
  { year: 208, era: "three", title: "赤壁之戰", desc: "曹操與孫劉聯軍交戰，改變了長江流域的政治格局。" },
  { year: 220, era: "three", title: "東漢滅亡", desc: "曹丕迫使漢獻帝禪讓，建立曹魏。" },
  { year: 221, era: "three", title: "蜀漢建立", desc: "劉備在成都稱帝，延續漢室名義。" },
  { year: 229, era: "three", title: "孫吳稱帝", desc: "孫權正式稱帝，魏、蜀、吳三國鼎立局面形成。" },
  { year: 263, era: "three", title: "魏滅蜀漢", desc: "曹魏軍隊攻滅蜀漢。" },
  { year: 280, era: "jin", title: "西晉統一", desc: "西晉滅孫吳，結束三國鼎立。" },
  { year: 581, era: "sui-tang", title: "隋朝建立", desc: "楊堅建立隋朝，結束長期分裂局面的一個階段。" },
  { year: 618, era: "sui-tang", title: "唐朝建立", desc: "李淵建立唐朝，隨後唐朝逐步統一全國。" },
  { year: 755, era: "sui-tang", title: "安史之亂", desc: "唐朝爆發大規模叛亂，國力與地方控制力受到嚴重影響。" },
  { year: 960, era: "song", title: "北宋建立", desc: "趙匡胤建立宋朝，逐步結束五代十國的分裂局面。" },
  { year: 1271, era: "yuan", title: "元朝國號確立", desc: "忽必烈定國號為大元。" },
  { year: 1279, era: "yuan", title: "南宋滅亡", desc: "元軍攻滅南宋，完成對全中國的統一。" },
  { year: 1368, era: "ming", title: "明朝建立", desc: "朱元璋建立明朝，元朝在中原的統治結束。" },
  { year: 1405, era: "ming", title: "鄭和首次下西洋", desc: "鄭和率領船隊出海，展開多次遠航活動。" },
  { year: 1644, era: "qing", title: "清軍入關", desc: "明朝滅亡後，清軍進入北京，清朝逐步建立全國統治。" },
  { year: 1840, era: "qing", title: "第一次鴉片戰爭", desc: "清朝與英國爆發戰爭，戰後簽訂《南京條約》。" },
  { year: 1911, era: "qing", title: "辛亥革命", desc: "革命推翻清朝統治的進程展開，促成帝制終結。" },
  { year: 1912, era: "qing", title: "中華民國成立", desc: "清帝退位，清朝統治正式結束，中國進入共和時期。" }
];

// 三、歷史人物
const people = [
  {
    name: "秦始皇",
    era: "秦朝",
    years: "公元前 259–前 210 年",
    desc: "秦朝建立者，完成戰國六國的統一，推動郡縣制及文字、度量衡等制度整合。",
    tags: "秦政統一制度"
  },
  {
    name: "漢武帝",
    era: "西漢",
    years: "公元前 156–前 87 年",
    desc: "漢朝重要皇帝之一，在位期間加強中央權力，拓展對外交流，並推動多項政治與文化政策。",
    tags: "漢朝政治絲路"
  },
  {
    name: "曹操",
    era: "東漢末年、曹魏",
    years: "公元 155–220 年",
    desc: "東漢末年重要政治家與軍事領袖，奠定曹魏政權的基礎，也是著名文學人物。",
    tags: "三國魏軍事文學"
  },
  {
    name: "劉備",
    era: "蜀漢",
    years: "公元 161–223 年",
    desc: "蜀漢建立者。小說《三國演義》特別強調其仁義形象，史書與小說的描寫有所差異。",
    tags: "三國蜀漢"
  },
  {
    name: "諸葛亮",
    era: "蜀漢",
    years: "公元 181–234 年",
    desc: "蜀漢丞相，參與國家治理與軍事事務；後世文學也塑造了他足智多謀的經典形象。",
    tags: "三國蜀漢政治謀略"
  },
  {
    name: "孫權",
    era: "孫吳",
    years: "公元 182–252 年",
    desc: "孫吳建立的重要統治者，經營江東勢力，與曹魏、蜀漢形成鼎立格局。",
    tags: "三國吳江東"
  },
  {
    name: "唐太宗",
    era: "唐朝",
    years: "公元 598–649 年",
    desc: "唐朝第二位皇帝，在位期間常與政治整頓、人才任用及貞觀之治相聯繫。",
    tags: "唐朝政治"
  },
  {
    name: "武則天",
    era: "唐朝、武周",
    years: "公元 624–705 年",
    desc: "中國歷史上唯一通常被承認的正統女皇帝，曾建立武周政權。",
    tags: "唐朝武周政治"
  },
  {
    name: "成吉思汗",
    era: "蒙古帝國",
    years: "公元 1162–1227 年",
    desc: "蒙古帝國的建立者，統一蒙古各部，對歐亞歷史產生深遠影響。",
    tags: "蒙古帝國"
  },
  {
    name: "朱元璋",
    era: "明朝",
    years: "公元 1328–1398 年",
    desc: "明朝開國皇帝，推翻元朝在中原的統治，建立明朝。",
    tags: "明朝開國"
  },
  {
    name: "鄭和",
    era: "明朝",
    years: "公元 1371–1433 年",
    desc: "明代航海領袖，率領大型船隊多次下西洋，促進海上外交與貿易交流。",
    tags: "明朝航海"
  },
  {
    name: "康熙帝",
    era: "清朝",
    years: "公元 1654–1722 年",
    desc: "清朝皇帝，在位時間長，經歷平定三藩、收復臺灣等重要事件。",
    tags: "清朝政治臺灣"
  }
];

// 四、三國演義十篇故事
const stories = [
  {
    title: "桃園結義",
    content: "劉備、關羽、張飛相識後結為兄弟，立志在亂世中有所作為。這段故事是《三國演義》中著名的文學情節，正史並沒有記載桃園結義的具體儀式。"
  },
  {
    title: "董卓亂政",
    content: "東漢末年，朝廷權力混亂，董卓進入洛陽並控制朝政。各地勢力開始反抗，天下局勢更加動盪。"
  },
  {
    title: "三英戰呂布",
    content: "小說描寫劉備、關羽、張飛聯手迎戰呂布，塑造出精彩的英雄對決。這是《三國演義》的著名橋段，不能直接當作完整的史實記錄。"
  },
  {
    title: "煮酒論英雄",
    content: "曹操與劉備談論天下英雄，呈現兩人之間的試探與心理角力。這段情節凸顯亂世中政治人物的謹慎與雄心。"
  },
  {
    title: "三顧茅廬",
    content: "劉備多次拜訪諸葛亮，請他出山相助。諸葛亮提出對天下局勢的分析，成為小說中展現君臣相知的重要篇章。"
  },
  {
    title: "火燒赤壁",
    content: "公元 208 年前後，曹操與孫劉聯軍交戰。赤壁之戰成為三國鼎立形成的重要轉折，小說則以火攻等情節加強戲劇效果。"
  },
  {
    title: "草船借箭",
    content: "小說中的諸葛亮利用大霧與敵軍弓箭，展現機智。這是流傳甚廣的文學故事，並非可以直接確認的正史事件。"
  },
  {
    title: "三氣周瑜",
    content: "小說以周瑜與諸葛亮的智謀競逐作為主軸，描述周瑜因屢次受挫而鬱鬱而終。史實中的周瑜是孫吳的重要將領，其形象與小說有差異。"
  },
  {
    title: "七擒孟獲",
    content: "小說描述諸葛亮南征時七次擒獲又釋放孟獲，突出以德服人的主題。相關南征有歷史背景，但七擒七縱的細節主要來自後世敘事。"
  },
  {
    title: "三國歸晉",
    content: "曹魏滅蜀漢後，司馬氏建立西晉。公元 280 年，西晉滅孫吳，結束三國鼎立，天下再度統一。"
  }
];

// 五、歷史小測驗
const quizQuestions = [
  {
    q: "秦始皇完成統一六國的年份是哪一年？",
    options: ["公元前 221 年", "公元 220 年", "公元 618 年", "公元 960 年"],
    answer: 0,
    explain: "公元前 221 年，秦王嬴政完成統一，建立秦朝。"
  },
  {
    q: "赤壁之戰主要發生在哪個歷史時期？",
    options: ["秦朝", "西漢", "三國形成前後", "唐朝"],
    answer: 2,
    explain: "赤壁之戰發生於公元 208 年，是三國鼎立形成的重要轉折。"
  },
  {
    q: "以下哪位人物與蜀漢關係最密切？",
    options: ["秦始皇", "諸葛亮", "唐太宗", "朱元璋"],
    answer: 1,
    explain: "諸葛亮是蜀漢的重要政治家與軍事人物。"
  },
  {
    q: "唐朝建立於哪一年？",
    options: ["公元前 202 年", "公元 220 年", "公元 581 年", "公元 618 年"],
    answer: 3,
    explain: "李淵於公元 618 年建立唐朝。"
  },
  {
    q: "中國歷史上的帝制通常以哪一年作為結束年份？",
    options: ["公元 960 年", "公元 1279 年", "公元 1912 年", "公元 1949 年"],
    answer: 2,
    explain: "1912 年清帝退位，清朝統治結束，帝制告終。"
  }
];

// 六、共用工具
function formatYear(year) {
  return year < 0
    ? `公元前 ${Math.abs(year).toLocaleString("zh-TW")} 年`
    : `公元 ${year.toLocaleString("zh-TW")} 年`;
}

function createElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent !== undefined) element.textContent = textContent;
  return element;
}

// 七、產生朝代卡片與篩選選單
const dynastyList = document.getElementById("dynasty-list");
const eraFilter = document.getElementById("era-filter");

dynasties.forEach((dynasty) => {
  const card = createElement("article", "card");
  card.append(
    createElement("p", "date", dynasty.date),
    createElement("h3", "", dynasty.name),
    createElement("p", "", dynasty.desc),
    createElement("p", "", dynasty.detail)
  );
  dynastyList.append(card);

  const option = document.createElement("option");
  option.value = dynasty.id;
  option.textContent = dynasty.name;
  eraFilter.append(option);
});

// 八、搜尋與篩選歷史事件
const eventSearch = document.getElementById("event-search");
const timelineList = document.getElementById("timeline-list");
const eventEmpty = document.getElementById("event-empty");

function renderEvents() {
  const keyword = eventSearch.value.trim().toLowerCase();
  const selectedEra = eraFilter.value;

  const filtered = events.filter((event) => {
    const matchesKeyword =
      `${event.title} ${event.desc} ${formatYear(event.year)}`
        .toLowerCase().includes(keyword);

    const matchesEra =
      selectedEra === "all" || event.era === selectedEra;

    return matchesKeyword && matchesEra;
  });

  timelineList.replaceChildren();
  eventEmpty.classList.toggle("hidden", filtered.length !== 0);

  filtered.forEach((event) => {
    const dynasty = dynasties.find((item) => item.id === event.era);
    const item = createElement("article", "timeline-item");
    item.append(
      createElement("div", "timeline-date", formatYear(event.year)),
      createElement("h3", "", event.title),
      createElement("p", "", event.desc),
      createElement("p", "date", dynasty ? dynasty.name : "")
    );
    timelineList.append(item);
  });
}

eventSearch.addEventListener("input", renderEvents);
eraFilter.addEventListener("change", renderEvents);
renderEvents();

// 九、人物卡片與介紹視窗
const peopleList = document.getElementById("people-list");
const personDialog = document.getElementById("person-dialog");

people.forEach((person) => {
  const card = createElement("button", "card person-card");
  card.type = "button";
  card.append(
    createElement("p", "date", person.era),
    createElement("h3", "", person.name),
    createElement("p", "", person.years),
    createElement("p", "", person.desc),
    createElement("p", "date", "點擊查看完整介紹 →")
  );

  card.addEventListener("click", () => {
    document.getElementById("dialog-era").textContent =
      `${person.era}｜${person.years}`;
    document.getElementById("dialog-name").textContent = person.name;
    document.getElementById("dialog-description").textContent =
      `${person.desc}\n\n相關關鍵字：${person.tags}`;

    personDialog.showModal();
  });

  peopleList.append(card);
});

document.getElementById("dialog-close").addEventListener("click", () => {
  personDialog.close();
});

personDialog.addEventListener("click", (event) => {
  if (event.target === personDialog) personDialog.close();
});

// 十、三國故事切換
let currentStory = 0;

const storyNumber = document.getElementById("story-number");
const storyTitle = document.getElementById("story-title");
const storyContent = document.getElementById("story-content");
const storyDots = document.getElementById("story-dots");
const storyPrev = document.getElementById("story-prev");
const storyNext = document.getElementById("story-next");

function renderStory() {
  const story = stories[currentStory];

  storyNumber.textContent = `第 ${currentStory + 1} 篇 / 共 ${stories.length} 篇`;
  storyTitle.textContent = story.title;
  storyContent.textContent = story.content;

  storyPrev.disabled = currentStory === 0;
  storyNext.disabled = currentStory === stories.length - 1;

  storyDots.replaceChildren();

  stories.forEach((item, index) => {
    const button = createElement("button", "story-dot", String(index + 1));
    button.type = "button";
    button.setAttribute("aria-label", `閱讀第 ${index + 1} 篇：${item.title}`);

    if (index === currentStory) {
      button.classList.add("active");
      button.setAttribute("aria-current", "step");
    }

    button.addEventListener("click", () => {
      currentStory = index;
      renderStory();
    });

    storyDots.append(button);
  });
}

storyPrev.addEventListener("click", () => {
  if (currentStory > 0) {
    currentStory--;
    renderStory();
  }
});

storyNext.addEventListener("click", () => {
  if (currentStory < stories.length - 1) {
    currentStory++;
    renderStory();
  }
});

renderStory();

// 十一、歷史小測驗
let currentQuestion = 0;
let answered = false;

const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const quizNext = document.getElementById("quiz-next");

function renderQuiz() {
  const item = quizQuestions[currentQuestion];

  answered = false;
  quizQuestion.textContent =
    `第 ${currentQuestion + 1} / ${quizQuestions.length} 題：${item.q}`;
  quizFeedback.textContent = "";
  quizOptions.replaceChildren();

  item.options.forEach((optionText, index) => {
    const button = createElement("button", "quiz-option", optionText);
    button.type = "button";

    button.addEventListener("click", () => {
      if (answered) return;
      answered = true;

      Array.from(quizOptions.children).forEach((choice, choiceIndex) => {
        choice.disabled = true;

        if (choiceIndex === item.answer) {
          choice.classList.add("correct");
        } else if (choiceIndex === index) {
          choice.classList.add("wrong");
        }
      });

      quizFeedback.textContent =
        `${index === item.answer ? "答對了！" : "再接再厲！"} ${item.explain}`;

      quizNext.textContent =
        currentQuestion === quizQuestions.length - 1
          ? "重新測驗"
          : "下一題";
    });

    quizOptions.append(button);
  });

  quizNext.textContent = "下一題";
}

quizNext.addEventListener("click", () => {
  if (!answered) {
    quizFeedback.textContent = "請先選擇一個答案。";
    return;
  }

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
  } else {
    currentQuestion = 0;
  }

  renderQuiz();
});

renderQuiz();

// 十二、更新首頁統計數字
document.getElementById("era-count").textContent = dynasties.length;
document.getElementById("event-count").textContent = events.length;
document.getElementById("people-count").textContent = people.length;
