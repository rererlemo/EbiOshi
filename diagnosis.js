/* =========================================
   EBiDAN 好き顔診断
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const diagnosis = document.getElementById("faceDiagnosis");
  const startButton = document.getElementById("startFaceDiagnosis");
  const questionArea = document.getElementById("faceQuestionArea");
  const resultArea = document.getElementById("faceDiagnosisResult");
  const progress = document.getElementById("faceProgress");
  const selectedSummary = document.getElementById("selectedFaceMembers");

  if (!diagnosis || !startButton || !questionArea || !resultArea) return;

  const ebti = {
    "#5-Kai": "顔がキレる知性派タイプ",
    "#1-Ryoga": "明るさ満点！爆笑ムードメーカータイプ",
    "#3-Takuya": "圧倒的ファッションアイコンタイプ",
    "#2-Yuki": "カリスマパフォーマータイプ",
    "#4-Takashi": "癒し系マイナスイオンタイプ",
    "#58-Shuya": "体育会系パッションタイプ",
    "#59-Masahiro": "愛すべきマイペーススタータイプ",
    "#45-Aloha": "愛嬌溢れる大型新人わんこタイプ",
    "#44-Haru": "沼系あざとかわいいタイプ",

    "#14-Hayato": "誰もがとりこ 天性の人たらしタイプ",
    "#8-Daichi": "明るさ満点！爆笑ムードメーカータイプ",
    "#30-Shunta": "愛され有能弟タイプ",
    "#35-Jyutaro": "王道キラキラ王子様タイプ",
    "#9-Jinto": "顔がキレる知性派タイプ",

    "#10-Leo": "頼りになるみんなのママタイプ",
    "#22-Tsuyoshi": "圧倒的ファッションアイコンタイプ",
    "#6-Jean": "多才クリエイタータイプ",
    "#7-Hayate": "愛すべきマイペーススタータイプ",
    "#18-Sogo": "ギャップ萌えシャイボーイタイプ",
    "#15-Koki": "沼系あざとかわいいタイプ",
    "#23-Hyoma": "王道キラキラ王子様タイプ",
    "#13-Kazuya": "体育会系パッションタイプ",
    "#16-Raku": "癒し系マイナスイオンタイプ",

    "#17-Gaku": "明るさ満点！爆笑ムードメーカータイプ",
    "#11-Hyoga": "多才クリエイタータイプ",

    "#25-TETTA": "明るさ満点！爆笑ムードメーカータイプ",
    "#32-REI": "頭がキレる知性派タイプ",
    "#12-EIKU": "愛され有能弟タイプ",
    "#31-HAYATO": "カリスマパフォーマータイプ",
    "#26-NAOYA": "沼系あざとかわいいタイプ",

    "#24-Takato": "沼系あざとかわいいタイプ",
    "#29-Kohsaku": "愛すべきマイペーススタータイプ",
    "#33-Masaya": "愛され有能弟タイプ",
    "#28-Ryota": "カリスマパフォーマータイプ",
    "#34-Jun": "誰もがとりこ 天性の人たらしタイプ",
    "#41-Kazuto": "圧倒的ファッションアイコンタイプ",
    "#37-Kaname": "頭がキレる知性派タイプ",

    "#47-FUMINORI": "明るさ満点！爆笑ムードメーカータイプ",
    "#27-KEVIN": "カリスマパフォーマータイプ",
    "#43-MORRIE": "圧倒的ファッションアイコンタイプ",
    "#40-SEIYA": "体育会系パッションタイプ",
    "#39-YUMA": "ギャップ萌えシャイボーイタイプ",
    "#46-SHOW": "愛すべきマイペーススタータイプ",
    "#48-TAKUYA": "体育会系パッションタイプ",
    "#49-FUMIYA": "沼系あざとかわいいタイプ",
    "#52-SHOOT": "圧倒的ファッションアイコンタイプ",

    "#50-Riku": "誰もがとりこ 天性の人たらしタイプ",
    "#21-Otaro": "明るさ満点！爆笑ムードメーカータイプ",
    "#54-Haruse": "圧倒的ファッションアイコンタイプ",
    "#36-Hakuto": "頼りになるみんなのママタイプ",
    "#42-Toshiaki": "頭がキレる知性派タイプ",
    "#51-Ryuto": "沼系あざとかわいいタイプ",
    "#56-Sena": "多才クリエイタータイプ",
    "#60-Ryosuke": "愛され有能弟タイプ",

    "#38-Shuto": "誰もがとりこ 天性の人たらしタイプ",
    "#53-Shunta": "明るさ満点！爆笑ムードメーカータイプ",
    "#20-Milo": "カリスマパフォーマータイプ",
    "#55-Riku": "沼系あざとかわいいタイプ",
    "#57-Sose": "ギャップ萌えシャイボーイタイプ",
    "#19-Saneyuki": "愛すべきマイペーススタータイプ"
  };

  const MAX_QUESTIONS = 24;

  let allMembers = [];
  let selected = [];
  let ratings = new Map();
  let askedPairs = new Set();
  let questionNumber = 0;

  function normalize(name) {
    return name.replace(/\s+/g, " ").trim();
  }

  function getGroups() {
    return Array.isArray(window.ebidanGroups)
      ? window.ebidanGroups
      : [];
  }

  function getAllMembers() {
    return getGroups()
      .slice(0, 9)
      .flatMap(group => group.members)
      .filter(member => {
        return member.image && ebti[normalize(member.name)];
      });
  }

  function pairKey(a, b) {
    return [a.name, b.name]
      .sort()
      .join("|||");
  }

  function getSelectedMembers() {
    const groups = getGroups().slice(0, 9);

    const selects = [
      ...document.querySelectorAll("#selectors select")
    ].slice(0, 9);

    if (
      selects.length < 9 ||
      selects.some(select => select.value === "")
    ) {
      return [];
    }

    return groups
      .map((group, i) => {
        const index = Number(selects[i].value);
        return group.members[index];
      })
      .filter(Boolean);
  }

  function updateVisibility() {
    selected = getSelectedMembers();

    if (selected.length === 9) {
      diagnosis.classList.remove("is-hidden");

      selectedSummary.innerHTML = selected
        .map(member => `<span>${member.name}</span>`)
        .join("");
    } else {
      diagnosis.classList.add("is-hidden");

      selectedSummary.innerHTML = "";

      resetDiagnosis();
    }
  }

  function resetDiagnosis() {
    questionArea.innerHTML = "";
    resultArea.innerHTML = "";

    startButton.disabled = false;
    startButton.textContent = "💘 本選をスタート";

    progress.textContent = "";

    ratings = new Map();
    askedPairs = new Set();
    questionNumber = 0;
  }

  function startDiagnosis() {
    allMembers = getAllMembers();
    selected = getSelectedMembers();

    if (
      selected.length !== 9 ||
      allMembers.length < 10
    ) {
      return;
    }

    ratings = new Map(
      allMembers.map(member => [
        member.name,
        1000
      ])
    );

    askedPairs = new Set();
    questionNumber = 0;

    startButton.disabled = true;
    startButton.textContent = "本選開催中…";

    resultArea.innerHTML = "";

    nextQuestion();
  }

  function choosePair() {
    const active = [...allMembers]
      .sort((a, b) => {
        return (
          (ratings.get(b.name) || 1000) -
          (ratings.get(a.name) || 1000)
        );
      });

    /*
      最初の9問は、
      プルダウンで選んだ9人を中心に対戦。
    */
    if (questionNumber < 9) {
      const a = selected[
        questionNumber % selected.length
      ];

      const candidates = selected.filter(member => {
        return (
          member.name !== a.name &&
          !askedPairs.has(pairKey(a, member))
        );
      });

      if (candidates.length) {
        const b =
          candidates[
            Math.floor(
              Math.random() * candidates.length
            )
          ];

        return [a, b];
      }
    }

    /*
      それ以降は、
      選ばれた9人＋残り51人を混ぜる。
    */
    const topMembers = active.slice(
      0,
      Math.min(8, active.length)
    );

    if (
      Math.random() < 0.65 &&
      topMembers.length
    ) {
      const a =
        topMembers[
          Math.floor(
            Math.random() * topMembers.length
          )
        ];

      const challengers = allMembers.filter(member => {
        return (
          member.name !== a.name &&
          !askedPairs.has(pairKey(a, member))
        );
      });

      if (challengers.length) {
        const b =
          challengers[
            Math.floor(
              Math.random() * challengers.length
            )
          ];

        return Math.random() < 0.5
          ? [a, b]
          : [b, a];
      }
    }

    /*
      未対戦の上位候補同士を比較。
    */
    for (let i = 0; i < active.length; i++) {
      for (let j = i + 1; j < active.length; j++) {
        if (
          !askedPairs.has(
            pairKey(active[i], active[j])
          )
        ) {
          return [
            active[i],
            active[j]
          ];
        }
      }
    }

    return null;
  }

  function updateRating(winner, loser) {
    const winnerRating =
      ratings.get(winner.name) || 1000;

    const loserRating =
      ratings.get(loser.name) || 1000;

    const expected =
      1 /
      (
        1 +
        Math.pow(
          10,
          (loserRating - winnerRating) / 400
        )
      );

    const K = 36;

    ratings.set(
      winner.name,
      winnerRating +
        K * (1 - expected)
    );

    ratings.set(
      loser.name,
      loserRating +
        K * (0 - (1 - expected))
    );
  }

  function renderQuestion(a, b) {
    progress.textContent =
      `本選 ${questionNumber} / ${MAX_QUESTIONS}`;

    questionArea.innerHTML = `
      <p class="face-question">
        どっちの顔が好き？
      </p>

      <div class="face-vs">

        <button
          class="face-choice"
          data-name="${a.name}"
          type="button"
        >
          <img
            src="${a.image}"
            alt="${a.name}"
          >

          <span>
            ${a.name}
          </span>
        </button>

        <div class="vs-badge">
          VS
        </div>

        <button
          class="face-choice"
          data-name="${b.name}"
          type="button"
        >
          <img
            src="${b.image}"
            alt="${b.name}"
          >

          <span>
            ${b.name}
          </span>
        </button>

      </div>
    `;

    questionArea
      .querySelectorAll(".face-choice")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const winner =
              button.dataset.name === a.name
                ? a
                : b;

            const loser =
              button.dataset.name === a.name
                ? b
                : a;

            questionArea
              .querySelectorAll(".face-choice")
              .forEach(btn => {
                btn.disabled = true;
              });

            button.classList.add(
              "is-selected"
            );

            updateRating(
              winner,
              loser
            );

            askedPairs.add(
              pairKey(a, b)
            );

            setTimeout(
              nextQuestion,
              220
            );
          }
        );

      });
  }

  function nextQuestion() {
    if (
      questionNumber >= MAX_QUESTIONS
    ) {
      showResult();
      return;
    }

    const pair = choosePair();

    if (!pair) {
      showResult();
      return;
    }

    questionNumber++;

    renderQuestion(
      pair[0],
      pair[1]
    );
  }

  function showResult() {
    startButton.disabled = false;
    startButton.textContent =
      "もう一度診断する";

    progress.textContent =
      "本選終了！";

    const ranked = [...allMembers]
      .sort((a, b) => {
        return (
          (ratings.get(b.name) || 1000) -
          (ratings.get(a.name) || 1000)
        );
      })
      .slice(0, 3);

function showResult() {
  startButton.disabled = false;
  startButton.textContent = "もう一度診断する";

  progress.textContent = "本選終了！";

  const ranked = [...allMembers]
    .sort((a, b) => {
      return (
        (ratings.get(b.name) || 1000) -
        (ratings.get(a.name) || 1000)
      );
    })
    .slice(0, 3);

  // =========================
  // 1位のメンバー
  // =========================

  const firstPlace = ranked[0];

  const firstPlaceType =
    ebti[normalize(firstPlace.name)];

  // =========================
  // 1位と同じEBTiのメンバーを取得
  // プルダウン順＝allMembersの順番を維持
  // =========================

  const sameTypeMembers = allMembers.filter(member => {
    return (
      ebti[normalize(member.name)] === firstPlaceType
    );
  });

  // 1位を必ず一番左にする
  const orderedSameTypeMembers = [
    firstPlace,
    ...sameTypeMembers.filter(member => {
      return member.name !== firstPlace.name;
    })
  ];

  const medals = [
    "🥇",
    "🥈",
    "🥉"
  ];

  resultArea.innerHTML = `
    <div class="face-result-box">

      <!-- =========================
           TOP3
           ========================= -->

      <h3>
        💘 あなたの好き顔TOP3
      </h3>

      <div class="face-top3">

        ${ranked
          .map((member, index) => `
            <div
              class="face-rank rank-${index + 1}"
            >

              <div class="rank-medal">
                ${medals[index]}
              </div>

              <img
                src="${member.image}"
                alt="${member.name}"
              >

              <strong>
                ${member.name}
              </strong>

              <small>
                ${
                  ebti[
                    normalize(member.name)
                  ] || ""
                }
              </small>

            </div>
          `)
          .join("")}

      </div>


      <!-- =========================
           1位のEBTi
           ========================= -->

      <div class="same-type-result">

        <p class="same-type-kicker">
          🥇 あなたの好き顔No.1
        </p>

        <h3 class="same-type-title">
          ${firstPlaceType}
        </h3>

        <p class="same-type-description">
          ${firstPlace.name}と同じEBTiのメンバー
        </p>


        <!-- 横一列 -->

        <div class="same-type-scroll">

          ${orderedSameTypeMembers
            .map((member, index) => `
              <div
                class="
                  same-type-card
                  ${
                    index === 0
                      ? "is-first"
                      : ""
                  }
                "
              >

                ${
                  index === 0
                    ? `
                      <div class="same-type-badge">
                        🥇 No.1
                      </div>
                    `
                    : ""
                }

                <img
                  src="${member.image}"
                  alt="${member.name}"
                >

                <strong>
                  ${member.name}
                </strong>

              </div>
            `)
            .join("")}

        </div>

      </div>


      <!-- =========================
           説明
           ========================= -->

      <p class="face-result-note">
        あなたの好き顔No.1と同じ
        「${firstPlaceType}」のメンバーを
        プルダウン順で並べています♡
      </p>

    </div>
  `;

  resultArea.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
  }

  /*
    プルダウン9個を監視
  */
  document
    .querySelectorAll(
      "#selectors select"
    )
    .forEach(select => {

      select.addEventListener(
        "change",
        updateVisibility
      );

    });

  /*
    本選スタート
  */
  startButton.addEventListener(
    "click",
    () => {

      if (questionNumber > 0) {
        resetDiagnosis();
      }

      startDiagnosis();
    }
  );

  /*
    リセットボタン
  */
  document
    .getElementById("resetButton")
    ?.addEventListener(
      "click",
      () => {
        setTimeout(
          updateVisibility,
          0
        );
      }
    );

  updateVisibility();
});