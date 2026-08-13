/* =========================================
   EBiDAN 好き顔診断
   完成版
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     DOM
     ========================================= */

  const diagnosis = document.getElementById("faceDiagnosis");
  const startButton = document.getElementById("startFaceDiagnosis");
  const questionArea = document.getElementById("faceQuestionArea");
  const resultArea = document.getElementById("faceDiagnosisResult");
  const progress = document.getElementById("faceProgress");
  const selectedSummary = document.getElementById("selectedFaceMembers");

  if (
    !diagnosis ||
    !startButton ||
    !questionArea ||
    !resultArea
  ) {
    return;
  }


  /* =========================================
     EBiDAN 顔タイプ
     ========================================= */

  const ebti = {

    "#5-Kai":
      "顔がキレる知性派タイプ",

    "#1-Ryoga":
      "明るさ満点！爆笑ムードメーカータイプ",

    "#3-Takuya":
      "圧倒的ファッションアイコンタイプ",

    "#2-Yuki":
      "カリスマパフォーマータイプ",

    "#4-Takashi":
      "癒し系マイナスイオンタイプ",

    "#58-Shuya":
      "体育会系パッションタイプ",

    "#59-Masahiro":
      "愛すべきマイペーススタータイプ",

    "#45-Aloha":
      "愛嬌溢れる大型新人わんこタイプ",

    "#44-Haru":
      "沼系あざとかわいいタイプ",

    "#14-Hayato":
      "誰もがとりこ 天性の人たらしタイプ",

    "#8-Daichi":
      "明るさ満点！爆笑ムードメーカータイプ",

    "#30-Shunta":
      "愛され有能弟タイプ",

    "#35-Jyutaro":
      "王道キラキラ王子様タイプ",

    "#9-Jinto":
      "顔がキレる知性派タイプ",


    "#10-Leo":
      "頼りになるみんなのママタイプ",

    "#22-Tsuyoshi":
      "圧倒的ファッションアイコンタイプ",

    "#6-Jean":
      "多才クリエイタータイプ",

    "#7-Hayate":
      "愛すべきマイペーススタータイプ",

    "#18-Sogo":
      "ギャップ萌えシャイボーイタイプ",

    "#15-Koki":
      "沼系あざとかわいいタイプ",

    "#23-Hyoma":
      "王道キラキラ王子様タイプ",

    "#13-Kazuya":
      "体育会系パッションタイプ",

    "#16-Raku":
      "癒し系マイナスイオンタイプ",

    "#17-Gaku":
      "明るさ満点！爆笑ムードメーカータイプ",

    "#11-Hyoga":
      "多才クリエイタータイプ",


    "#25-TETTA":
      "明るさ満点！爆笑ムードメーカータイプ",

    "#32-REI":
      "頭がキレる知性派タイプ",

    "#12-EIKU":
      "愛され有能弟タイプ",

    "#31-HAYATO":
      "カリスマパフォーマータイプ",

    "#26-NAOYA":
      "沼系あざとかわいいタイプ",


    "#24-Takato":
      "沼系あざとかわいいタイプ",

    "#29-Kohsaku":
      "愛すべきマイペーススタータイプ",

    "#33-Masaya":
      "愛され有能弟タイプ",

    "#28-Ryota":
      "カリスマパフォーマータイプ",

    "#34-Jun":
      "誰もがとりこ 天性の人たらしタイプ",

    "#41-Kazuto":
      "圧倒的ファッションアイコンタイプ",

    "#37-Kaname":
      "頭がキレる知性派タイプ",


    "#47-FUMINORI":
      "明るさ満点！爆笑ムードメーカータイプ",

    "#27-KEVIN":
      "カリスマパフォーマータイプ",

    "#43-MORRIE":
      "圧倒的ファッションアイコンタイプ",

    "#40-SEIYA":
      "体育会系パッションタイプ",

    "#39-YUMA":
      "ギャップ萌えシャイボーイタイプ",

    "#46-SHOW":
      "愛すべきマイペーススタータイプ",

    "#48-TAKUYA":
      "体育会系パッションタイプ",

    "#49-FUMIYA":
      "沼系あざとかわいいタイプ",

    "#52-SHOOT":
      "圧倒的ファッションアイコンタイプ",


    "#50-Riku":
      "誰もがとりこ 天性の人たらしタイプ",

    "#21-Otaro":
      "明るさ満点！爆笑ムードメーカータイプ",

    "#54-Haruse":
      "圧倒的ファッションアイコンタイプ",

    "#36-Hakuto":
      "頼りになるみんなのママタイプ",

    "#42-Toshiaki":
      "頭がキレる知性派タイプ",

    "#51-Ryuto":
      "沼系あざとかわいいタイプ",

    "#56-Sena":
      "多才クリエイタータイプ",

    "#60-Ryosuke":
      "愛され有能弟タイプ",


    "#38-Shuto":
      "誰もがとりこ 天性の人たらしタイプ",

    "#53-Shunta":
      "明るさ満点！爆笑ムードメーカータイプ",

    "#20-Milo":
      "カリスマパフォーマータイプ",

    "#55-Riku":
      "沼系あざとかわいいタイプ",

    "#57-Sose":
      "ギャップ萌えシャイボーイタイプ",

    "#19-Saneyuki":
      "愛すべきマイペーススタータイプ"
  };


  /* =========================================
     系統名の統一
     
     REI / Kaname / Toshiaki
     「頭がキレる知性派」
     
     Kai / Jinto
     「顔がキレる知性派」
     
     → 診断上は同じ系統として扱う
     ========================================= */

  function normalizeType(type) {

    if (!type) {
      return "";
    }

    const normalized = type
      .replace(/\s+/g, " ")
      .trim();

    if (
      normalized === "頭がキレる知性派タイプ" ||
      normalized === "顔がキレる知性派タイプ"
    ) {
      return "知性派タイプ";
    }

    return normalized;
  }


  /* =========================================
     設定
     ========================================= */

  const MAX_QUESTIONS = 24;


  /* =========================================
     状態
     ========================================= */

  let allMembers = [];
  let selected = [];

  let ratings = new Map();
  let askedPairs = new Set();

  let questionNumber = 0;


  /* =========================================
     名前を正規化
     ========================================= */

  function normalizeName(name) {

    return String(name || "")
      .replace(/\s+/g, " ")
      .trim();
  }


  /* =========================================
     グループ取得
     ========================================= */

  function getGroups() {

    if (!Array.isArray(window.ebidanGroups)) {
      return [];
    }

    return window.ebidanGroups;
  }


  /* =========================================
     全メンバー取得
     
     ★重要
     9グループ全部を見る
     ★重要
     EBTi登録済み＋画像ありだけを対象
     ========================================= */

  function getAllMembers() {

    const groups = getGroups();

    const members = groups
      .flatMap(group => {

        if (!Array.isArray(group.members)) {
          return [];
        }

        return group.members;
      })
      .filter(member => {

        if (!member) {
          return false;
        }

        const name = normalizeName(member.name);

        return (
          Boolean(member.image) &&
          Boolean(ebti[name])
        );
      });

    /* 名前の重複を除去 */

    const uniqueMembers = [];

    const seen = new Set();

    members.forEach(member => {

      const name = normalizeName(member.name);

      if (seen.has(name)) {
        return;
      }

      seen.add(name);

      uniqueMembers.push(member);
    });

    return uniqueMembers;
  }


  /* =========================================
     選択した9人を取得
     ========================================= */

  function getSelectedMembers() {

    const groups = getGroups().slice(0, 9);

    const selects = [
      ...document.querySelectorAll("#selectors select")
    ].slice(0, 9);

    if (selects.length < 9) {
      return [];
    }

    if (
      selects.some(select => {
        return select.value === "";
      })
    ) {
      return [];
    }

    return groups
      .map((group, index) => {

        const selectedIndex =
          Number(selects[index].value);

        if (
          !group ||
          !Array.isArray(group.members)
        ) {
          return null;
        }

        return group.members[selectedIndex];
      })
      .filter(Boolean)
      .filter(member => {

        return (
          member.image &&
          ebti[normalizeName(member.name)]
        );
      });
  }


  /* =========================================
     ペア識別
     ========================================= */

  function pairKey(a, b) {

    return [
      normalizeName(a.name),
      normalizeName(b.name)
    ]
      .sort()
      .join("|||");
  }


  /* =========================================
     診断表示切り替え
     ========================================= */

  function updateVisibility() {

    selected = getSelectedMembers();

    if (selected.length === 9) {

      diagnosis.classList.remove("is-hidden");

      selectedSummary.innerHTML =
        selected
          .map(member => {
            return `<span>${member.name}</span>`;
          })
          .join("");

    } else {

      diagnosis.classList.add("is-hidden");

      selectedSummary.innerHTML = "";

      resetDiagnosis();
    }
  }


  /* =========================================
     リセット
     ========================================= */

  function resetDiagnosis() {

    questionArea.innerHTML = "";

    resultArea.innerHTML = "";

    startButton.disabled = false;

    startButton.textContent =
      "💘 本選をスタート";

    progress.textContent = "";

    ratings = new Map();

    askedPairs = new Set();

    questionNumber = 0;
  }


  /* =========================================
     診断開始
     ========================================= */

  function startDiagnosis() {

    allMembers = getAllMembers();

    selected = getSelectedMembers();


    console.log(
      "【好き顔診断】選択人数:",
      selected.length
    );

    console.log(
      "【好き顔診断】選択メンバー:",
      selected.map(member => member.name)
    );

    console.log(
      "【好き顔診断】診断対象人数:",
      allMembers.length
    );

    console.log(
      "【好き顔診断】診断対象:",
      allMembers.map(member => member.name)
    );


    if (selected.length !== 9) {

      alert(
        `9人選択されていません。\n現在 ${selected.length} 人です。`
      );

      return;
    }


    if (allMembers.length < 10) {

      alert(
        `診断対象メンバーが ${allMembers.length} 人しか取得できていません。`
      );

      return;
    }


    /* 全員の初期レート */

    ratings = new Map(
      allMembers.map(member => {

        return [
          member.name,
          1000
        ];
      })
    );


    askedPairs = new Set();

    questionNumber = 0;


    startButton.disabled = true;

    startButton.textContent =
      "本選開催中…";

    resultArea.innerHTML = "";

    nextQuestion();
  }


  /* =========================================
     対戦相手を決める
     ========================================= */

  function choosePair() {

    const active = [...allMembers]
      .sort((a, b) => {

        return (
          (ratings.get(b.name) || 1000) -
          (ratings.get(a.name) || 1000)
        );
      });


    /* -----------------------------------------
       最初の9問
       選択した9人を中心に対戦
       ----------------------------------------- */

    if (questionNumber < 9) {

      const a =
        selected[
          questionNumber % selected.length
        ];


      const candidates =
        selected.filter(member => {

          return (
            member.name !== a.name &&
            !askedPairs.has(
              pairKey(a, member)
            )
          );
        });


      if (candidates.length > 0) {

        const b =
          candidates[
            Math.floor(
              Math.random() *
              candidates.length
            )
          ];

        return [a, b];
      }
    }


    /* -----------------------------------------
       10問目以降
       上位メンバー＋全メンバー
       ----------------------------------------- */

    const topMembers =
      active.slice(
        0,
        Math.min(8, active.length)
      );


    if (
      Math.random() < 0.65 &&
      topMembers.length > 0
    ) {

      const a =
        topMembers[
          Math.floor(
            Math.random() *
            topMembers.length
          )
        ];


      const challengers =
        allMembers.filter(member => {

          return (
            member.name !== a.name &&
            !askedPairs.has(
              pairKey(a, member)
            )
          );
        });


      if (challengers.length > 0) {

        const b =
          challengers[
            Math.floor(
              Math.random() *
              challengers.length
            )
          ];


        return Math.random() < 0.5
          ? [a, b]
          : [b, a];
      }
    }


    /* -----------------------------------------
       未対戦の上位候補同士
       ----------------------------------------- */

    for (
      let i = 0;
      i < active.length;
      i++
    ) {

      for (
        let j = i + 1;
        j < active.length;
        j++
      ) {

        const a = active[i];
        const b = active[j];

        if (
          !askedPairs.has(
            pairKey(a, b)
          )
        ) {

          return [a, b];
        }
      }
    }


    return null;
  }


  /* =========================================
     レート更新
     ========================================= */

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
      loserRating -
      K * (1 - expected)
    );
  }


  /* =========================================
     問題表示
     ========================================= */

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


  /* =========================================
     次の問題
     ========================================= */

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


  /* =========================================
     結果表示
     ========================================= */

  function showResult() {

    startButton.disabled = false;

    startButton.textContent =
      "もう一度診断する";


    progress.textContent =
      "本選終了！";


    /* -----------------------------------------
       TOP3
       ----------------------------------------- */

    const ranked =
      [...allMembers]
        .sort((a, b) => {

          return (
            (ratings.get(b.name) || 1000) -
            (ratings.get(a.name) || 1000)
          );
        })
        .slice(0, 3);


    if (
      ranked.length === 0
    ) {

      resultArea.innerHTML = `
        <p>
          結果を取得できませんでした。
        </p>
      `;

      return;
    }


    /* -----------------------------------------
       1位
       ----------------------------------------- */

    const firstPlace =
      ranked[0];


    const firstPlaceRawType =
      ebti[
        normalizeName(firstPlace.name)
      ] || "";


    /* -----------------------------------------
       ★重要
       1位の系統を正規化
       
       REI
       「頭がキレる知性派タイプ」
       
       Kai/Jinto
       「顔がキレる知性派タイプ」
       
       ↓
       
       全員
       「知性派タイプ」
       
       として同じグループにする
       ----------------------------------------- */

    const firstPlaceNormalizedType =
      normalizeType(
        firstPlaceRawType
      );


    /* -----------------------------------------
       同じ系統のメンバーを全員取得
       ----------------------------------------- */

    const sameTypeMembers =
      allMembers.filter(member => {

        const memberType =
          ebti[
            normalizeName(member.name)
          ] || "";


        return (
          normalizeType(memberType) ===
          firstPlaceNormalizedType
        );
      });


    /* -----------------------------------------
       ★1位を必ず一番左
       ----------------------------------------- */

    const orderedSameTypeMembers = [

      firstPlace,

      ...sameTypeMembers.filter(member => {

        return (
          normalizeName(member.name) !==
          normalizeName(firstPlace.name)
        );
      })

    ];


    /* -----------------------------------------
       メダル
       ----------------------------------------- */

    const medals = [
      "🥇",
      "🥈",
      "🥉"
    ];


    /* -----------------------------------------
       表示用の系統名
       
       REIが1位の場合も
       見出しは自然な
       「知性派タイプ」
       にする
       ----------------------------------------- */

    let displayType =
      firstPlaceRawType;


    if (
      firstPlaceNormalizedType ===
      "知性派タイプ"
    ) {

      displayType =
        "頭がキレる知性派タイプ";
    }


    /* -----------------------------------------
       結果HTML
       ----------------------------------------- */

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
            .map((member, index) => {

              const memberType =
                ebti[
                  normalizeName(member.name)
                ] || "";


              return `

                <div
                  class="
                    face-rank
                    rank-${index + 1}
                  "
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
                    ${memberType}
                  </small>

                </div>

              `;
            })
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
            ${displayType}
          </h3>


          <p class="same-type-description">
            ${firstPlace.name}と同じEBTiのメンバー
          </p>


          <!-- =========================
               横一列
               ========================= -->

          <div class="same-type-scroll">

            ${orderedSameTypeMembers
              .map((member, index) => {

                return `

                  <div
                    class="
                      same-type-card
                      ${index === 0 ? "is-first" : ""}
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

                `;
              })
              .join("")}

          </div>


        </div>


        <!-- =========================
             説明
             ========================= -->

        <p class="face-result-note">

          あなたの好き顔No.1と同じ
          「${displayType}」のメンバーを
          一覧で表示しています♡

        </p>


      </div>
    `;


    /* -----------------------------------------
       結果までスクロール
       ----------------------------------------- */

    resultArea.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }


  /* =========================================
     プルダウン9個を監視
     ========================================= */

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


  /* =========================================
     本選スタート
     ========================================= */

  startButton.addEventListener(
    "click",
    () => {

      if (questionNumber > 0) {

        resetDiagnosis();
      }


      startDiagnosis();
    }
  );


  /* =========================================
     リセットボタン
     ========================================= */

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


  /* =========================================
     初期状態
     ========================================= */

  updateVisibility();

});