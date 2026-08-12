document.addEventListener("DOMContentLoaded", function () {
  const groups = [
    {
      name: "① Bullet Train",
      members: [
        {
          name: "#5-Kai",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_01_bt_kai_a5htxd98.jpg",
        },
        {
          name: "#1-Ryoga",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_02_bt_ryoga_a5htxd98.jpg",
        },
        {
          name: "#3-Takuya",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_03_bt_takuya_a5htxd98.jpg",
        },
        {
          name: "#2-Yuki",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_04_bt_yuki_a5htxd98.jpg",
        },
        {
          name: "#4-Takashi",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_05_bt_takashi_a5htxd98.jpg",
        },
        {
          name: "#58-Shuya",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_06_bt_shuya_a5htxd98.jpg",
        },
        {
          name: "#59-Masahiro",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_07_bt_masahiro_a5htxd98.jpg",
        },
        {
          name: "#45-Aloha",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_08_bt_aroha_a5htxd98.jpg",
        },
        {
          name: "#44-Haru",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_09_bt_haru_a5htxd98.jpg",
        },
      ],
    },

    {
      name: "② M!LK",
      members: [
        {
          name: "#14-Hayato",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_hero_10_milk_sano_a5htxd98.jpg",
        },
        {
          name: "#8-Daichi",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_11_milk_shiozaki_a5htxd98.jpg",
        },
        {
          name: "#30-Shunta",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_12_milk_sono_a5htxd98.jpg",
        },
        {
          name: "#35-Jyutaro",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_13_milk_yamanaka_a5htxd98.jpg",
        },
        {
          name: "#9-Jinto",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_14_milk_yoshida_a5htxd98.jpg",
        },
      ],
    },

    {
      name: "③ SUPER★DRAGON",
      members: [
        {
          name: "#10-Leo",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_15_sd_shimura_a5htxd98.jpg",
        },
        {
          name: "#22-Tsuyoshi",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_16_sd_furukawa_a5htxd98.jpg",
        },
        {
          name: "#6-Jean",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_17_sd_jean_a5htxd98.jpg",
        },
        {
          name: "#7-Hayate",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_18_sd_iijima_a5htxd98.jpg",
        },
        {
          name: "#18-Sogo",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_19_sd_ito_a5htxd98.jpg",
        },
        {
          name: "#15-Koki",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_20_sd_tanaka_a5htxd98.jpg",
        },
        {
          name: "#23-Hyoma",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_21_sd_ikeda_a5htxd98.jpg",
        },
        {
          name: "#13-Kazuya",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_22_sd_matsumura_a5htxd98.jpg",
        },
        {
          name: "#16-Raku",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_23_sd_shibazaki_a5htxd98.jpg",
        },
      ],
    },

    {
      name: "④ Sakurashimeji",
      members: [
        {
          name: "#17-Gaku",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_24_ss_tanaka_a5htxd98.jpg",
        },
        {
          name: "#11-Hyoga",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_25_ss_takada_a5htxd98.jpg",
        },
      ],
    },

    {
      name: "⑤ ONE Ｎ' ONLY",
      members: [
        {
          name: "#25-TETTA",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_26_ono_tetta_a5htxd98.jpg",
        },
        {
          name: "#32-REI",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_27_ono_rei_a5htxd98.jpg",
        },
        {
          name: "#12-EIKU",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_28_ono_eiku_a5htxd98.jpg",
        },
        {
          name: "#31-HAYATO",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_29_ono_hayato_a5htxd98.jpg",
        },
        {
          name: "#26-NAOYA",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_30_ono_naoya_a5htxd98.jpg",
        },
      ],
    },

    {
      name: "⑥ GNJB",
      members: [
        {
          name: "#24-Takato",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_31_gnjb_okura_a5htxd98.jpg",
        },
        {
          name: "#29-Kohsaku",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_32_gnjb_koizumi_a5htxd98.jpg",
        },
        {
          name: "#33-Masaya",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_33_gnjb_sakuragi_a5htxd98.jpg",
        },
        {
          name: "#28-Ryota",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_34_gnjb_nagano_a5htxd98.jpg",
        },
        {
          name: "#34-Jun",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_35_gnjb_muto_a5htxd98.jpg",
        },
        {
          name: "#41-Kazuto",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_36_gnjb_mokudai_a5htxd98.jpg",
        },
        {
          name: "#37-Kaname",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_37_gnjb_yoshizawa_a5htxd98.jpg",
        },
      ],
    },

    {
      name: "⑦ BUDDiiS",
      members: [
        {
          name: "#47-FUMINORI",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_38_bd_fuminori_a5htxd98.jpg",
        },
        {
          name: "#27-KEVIN",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_39_bd_kevin_a5htxd98.jpg",
        },
        {
          name: "#43-MORRIE",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_40_bd_morrie_a5htxd98.jpg",
        },
        {
          name: "#40-SEIYA",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_41_bd_seiya_a5htxd98.jpg",
        },
        {
          name: "#39-YUMA",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_42_bd_yuma_a5htxd98.jpg",
        },
        {
          name: "#46-SHOW",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_43_bd_show_a5htxd98.jpg",
        },
        {
          name: "#48-TAKUYA",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_44_bd_takuya_a5htxd98.jpg",
        },
        {
          name: "#49-FUMIYA",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_45_bd_fumiya_a5htxd98.jpg",
        },
        {
          name: "#52-SHOOT",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_46_bd_shoot_a5htxd98.jpg",
        },
      ],
    },

    {
      name: "⑧ ICEx",
      members: [
        {
          name: "#50-Riku",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_47_icex_shiga_a5htxd98.jpg",
        },
        {
          name: "#21-Otaro",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_48_icex_nakamura_a5htxd98.jpg",
        },
        {
          name: "#54-Haruse",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_49_icex_akune_a5htxd98.jpg",
        },
        {
          name: "#36-Hakuto",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_50_icex_chida_a5htxd98.jpg",
        },
        {
          name: "#42-Toshiaki",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_51_icex_tsutsui_a5htxd98.jpg",
        },
        {
          name: "#51-Ryuto",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_52_icex_yamamoto_a5htxd98.jpg",
        },
        {
          name: "#56-Sena",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_53_icex_takeno_a5htxd98.jpg",
        },
        {
          name: "#60-Ryosuke",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_54_icex_yagami_a5htxd98.jpg",
        },
      ],
    },

    {
      name: "⑨ Lienel",
      members: [
        {
          name: "#38-Shuto",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_55_li_haga_a5htxd98.jpg",
        },
        {
          name: "#53-Shunta",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_56_li_kondo_a5htxd98.jpg",
        },
        {
          name: "#20-Milo",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_57_li_takaoka_a5htxd98.jpg",
        },
        {
          name: "#55-Riku",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_58_li_morita_a5htxd98.jpg",
        },
        {
          name: "#57-Sose",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_59_li_takeda_a5htxd98.jpg",
        },
        {
          name: "#19-Saneyuki",
          image:
            "https://ebidan.jp/static/ebidan/fanclub/feature/ebidan_15thanniversary/img/profile/ph_new_60_li_takakuwa_a5htxd98.jpg",
        },
      ],
    },

    {
      name: "⑩ iiONDO",
      members: [
        { name: "#_-Koki", 
         image: "https://iiondo.com/feature/profile/image/profile/iiondo_mimura_koki.jpg" ,
        },
        { name: "#_-Shumpei", image: null },
        { name: "#_-Katsugu", image: null },
        { name: "#_-Yumeto", image: null },
        { name: "#_-Ryusei", image: null },
        { name: "#_-Haruto", image: null },
        { name: "#_-Soju", image: null },
        { name: "#_-Rihito", image: null },
      ],
    },
  ];

  const selectors = document.getElementById("selectors");
  const result = document.getElementById("result");

  groups.forEach((group) => {
    const selector = document.createElement("div");
    selector.className = "selector";

    const title = document.createElement("div");
    title.className = "selector-title";
    title.textContent = group.name;

    const select = document.createElement("select");

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "メンバーを選択";
    select.appendChild(defaultOption);

    group.members.forEach((member, memberIndex) => {
      const option = document.createElement("option");
      option.value = memberIndex;
      option.textContent = member.name;
      select.appendChild(option);
    });

    selector.appendChild(title);
    selector.appendChild(select);

    selectors.appendChild(selector);

    const resultCard = document.createElement("div");
    resultCard.className = "card";

    resultCard.innerHTML = `
      <div class="photo-placeholder">
        <span>${group.name}</span>
      </div>

      <div class="card-name">
        ${group.name}
      </div>
    `;

    result.appendChild(resultCard);

    select.addEventListener("change", () => {
      const memberIndex = select.value;

      if (memberIndex === "") {
        resultCard.innerHTML = `
          <div class="photo-placeholder">
            <span>${group.name}</span>
          </div>

          <div class="card-name">
            ${group.name}
          </div>
        `;
        return;
      }

      const member = group.members[memberIndex];

      if (member.image) {
        resultCard.innerHTML = `
          <img
            class="member-photo"
            src="${member.image}"
            alt="${member.name}"
          />

          <div class="card-name">
            ${member.name}
          </div>
        `;
      } else {
        resultCard.innerHTML = `
          <div class="photo-placeholder">
            <span>画像準備中</span>
          </div>

          <div class="card-name">
            ${member.name}
          </div>
        `;
      }
    });
  });

  // ===============================
  // リセット
  // ===============================
  document.getElementById("resetButton").addEventListener("click", function () {
    document.querySelectorAll("#selectors select").forEach(function (select) {
      select.value = "";
    });

    document.querySelectorAll("#result .card").forEach(function (card, index) {
      card.innerHTML = `
        <div class="photo-placeholder">
          <span>${groups[index].name}</span>
        </div>

        <div class="card-name">
          ${groups[index].name}
        </div>
      `;
    });
  });

  // ===============================
  // 画像サイズ調整（画像読み込み失敗したら非表示）
  // ===============================
  document.addEventListener(
    "error",
    (event) => {
      if (event.target && event.target.tagName === "IMG") {
        event.target.style.display = "none";
      }
    },
    true
  );
});
