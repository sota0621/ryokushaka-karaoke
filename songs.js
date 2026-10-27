/**
 * 緑黄色社会 オリジナル楽曲データベース
 *
 * 対象：
 * - 緑黄色社会のオリジナル楽曲
 * - DAMの通常歌唱バージョン
 *
 * 除外：
 * - カバー曲
 * - 生音・プロオケ
 * - 本人歌唱ライブ映像
 * - 同一楽曲のバージョン違い
 *
 * damStatus:
 *   "確認済み" = DAM公式配信一覧で確認
 *   "未確認"   = 現行DAMへの掲載を個別確認できていない
 */

const RYOKUSHAKA_SONGS = [
  // --- DAM公式配信一覧で確認できた楽曲 ---
  { id: 1, title: "アルゴリズム", album: "あたまご", tags: ["かっこいい", "アップテンポ"], note: "", damStatus: "確認済み" },
  { id: 2, title: "うたまご", album: "あたまご", tags: ["ポップ"], note: "", damStatus: "確認済み" },
  { id: 3, title: "TABOO", album: "あたまご", tags: ["かっこいい"], note: "", damStatus: "確認済み" },
  { id: 4, title: "誰かの国", album: "あたまご", tags: ["エモい・切ない"], note: "", damStatus: "確認済み" },
  { id: 5, title: "レジスダンス", album: "あたまご", tags: ["アップテンポ"], note: "", damStatus: "確認済み" },
  { id: 6, title: "分かりにくい", album: "あたまご", tags: [], note: "", damStatus: "確認済み" },
  { id: 7, title: "晴々", album: "晴々", tags: ["爽やか", "タイアップ曲"], note: "", damStatus: "確認済み" },
  { id: 8, title: "My Answer", album: "あたまご", tags: ["かっこいい", "アップテンポ"], note: "", damStatus: "確認済み" },
  { id: 9, title: "さもなくば誰がやる", album: "さもなくば誰がやる", tags: ["かっこいい"], note: "", damStatus: "確認済み" },
  { id: 10, title: "章", album: "章", tags: ["バラード・じっくり"], note: "", damStatus: "確認済み" },
  { id: 11, title: "illusion", album: "", tags: [], note: "", damStatus: "確認済み" },
  { id: 12, title: "etoile", album: "", tags: [], note: "", damStatus: "確認済み" },
  { id: 13, title: "風に乗る", album: "風に乗る", tags: ["爽やか"], note: "", damStatus: "確認済み" },
  { id: 14, title: "つづく", album: "つづく", tags: ["爽やか"], note: "", damStatus: "確認済み" },
  { id: 15, title: "PLAYER 1", album: "Channel U", tags: ["かっこいい"], note: "", damStatus: "確認済み" },
  { id: 16, title: "Party!!", album: "Party!!", tags: ["ポップ"], note: "", damStatus: "確認済み" },
  { id: 17, title: "僕らはいきものだから", album: "僕らはいきものだから", tags: ["バラード・じっくり"], note: "", damStatus: "確認済み" },
  { id: 18, title: "Each Ring", album: "Channel U", tags: [], note: "", damStatus: "確認済み" },
  { id: 19, title: "オーロラを探しに", album: "Channel U", tags: [], note: "", damStatus: "確認済み" },
  { id: 20, title: "コーヒーとましゅまろ", album: "Channel U", tags: [], note: "", damStatus: "確認済み" },

  // --- 代表曲・シングル ---
  { id: 21, title: "Mela!", album: "SINGALONG", tags: ["定番・盛り上がる", "タイアップ曲"], note: "ダリヤ『パルティ』CMソング", damStatus: "未確認" },
  { id: 22, title: "花になって", album: "花になって", tags: ["定番・盛り上がる", "タイアップ曲"], note: "アニメ『薬屋のひとりごと』OP", damStatus: "未確認" },
  { id: 23, title: "サマータイムシンデレラ", album: "サマータイムシンデレラ", tags: ["爽やか", "タイアップ曲"], note: "ドラマ『真夏のシンデレラ』主題歌", damStatus: "未確認" },
  { id: 24, title: "キャラクター", album: "Actor", tags: ["定番・盛り上がる"], note: "森永製菓『inゼリー』CMソング", damStatus: "未確認" },
  { id: 25, title: "Shout Baby", album: "SINGALONG", tags: ["かっこいい"], note: "アニメ『僕のヒーローアカデミア』ED", damStatus: "未確認" },
  { id: 26, title: "sabotage", album: "SINGALONG", tags: ["爽やか"], note: "ドラマ『G線上のあなたと私』主題歌", damStatus: "未確認" },
  { id: 27, title: "陽はまた昇るから", album: "Actor", tags: ["バラード・じっくり"], note: "映画『クレヨンしんちゃん もののけニンジャ珍風伝』主題歌", damStatus: "未確認" },
  { id: 28, title: "想い人", album: "SINGALONG", tags: ["バラード・じっくり"], note: "映画『初恋ロスタイム』主題歌", damStatus: "未確認" },
  { id: 29, title: "マジックアワー", album: "サマータイムシンデレラ", tags: ["エモい・切ない"], note: "ドラマ『真夏のシンデレラ』挿入歌", damStatus: "未確認" },
  { id: 30, title: "ミチヲユケ", album: "Pink Blue", tags: ["かっこいい"], note: "ドラマ『ファーストペンギン！』主題歌", damStatus: "未確認" },
  { id: 31, title: "LITMUS", album: "Actor", tags: ["エモい・切ない"], note: "ドラマ『緊急取調室』主題歌", damStatus: "未確認" },
  { id: 32, title: "恥ずかしいか青春は", album: "Channel U", tags: ["定番・盛り上がる"], note: "ABEMA『今日、好きになりました。』主題歌", damStatus: "未確認" },
  { id: 33, title: "馬鹿の一つ覚え", album: "馬鹿の一つ覚え", tags: ["かっこいい"], note: "", damStatus: "未確認" },
  { id: 34, title: "ナイスアイディア！", album: "ナイスアイディア！", tags: ["ポップ"], note: "カゴメ『野菜生活100』CMソング", damStatus: "未確認" },
  { id: 35, title: "言えない", album: "言えない", tags: ["エモい・切ない"], note: "", damStatus: "未確認" },
  { id: 36, title: "夜祭音頭", album: "夜祭音頭", tags: ["ポップ", "アップテンポ"], note: "", damStatus: "未確認" },
  { id: 37, title: "たとえたとえ", album: "Actor", tags: ["爽やか"], note: "センバツ MBS公式テーマソング", damStatus: "未確認" },
  { id: 38, title: "結証", album: "Actor", tags: ["バラード・じっくり"], note: "アニメ『半妖の夜叉姫』ED", damStatus: "未確認" },
  { id: 39, title: "Landscape", album: "Actor", tags: ["爽やか"], note: "スズキ『ソリオ バンディット』CMソング", damStatus: "未確認" },
  { id: 40, title: "ずっとずっとずっと", album: "Actor", tags: ["爽やか"], note: "『アサヒスーパードライ ザ・クール』CMソング", damStatus: "未確認" },

  // --- アルバム・過去作品 ---
  { id: 41, title: "始まりの歌", album: "緑黄色社会", tags: ["定番・盛り上がる", "爽やか"], note: "ドラッグスギヤマCMソング", damStatus: "未確認" },
  { id: 42, title: "Bitter", album: "Nice To Meet You??", tags: ["ポップ", "アップテンポ"], note: "", damStatus: "未確認" },
  { id: 43, title: "Alice", album: "緑黄色社会", tags: ["ポップ", "かわいい・おしゃれ"], note: "", damStatus: "未確認" },
  { id: 44, title: "あのころ見た光", album: "SINGALONG", tags: ["爽やか", "エモい・切ない"], note: "", damStatus: "未確認" },
  { id: 45, title: "リトルシンガー", album: "緑黄色社会", tags: ["爽やか", "アップテンポ"], note: "", damStatus: "未確認" },
  { id: 46, title: "Don!!", album: "Pink Blue", tags: ["ポップ"], note: "FUJIFILM CMソング", damStatus: "未確認" },
  { id: 47, title: "Tap Tap Dance", album: "Pink Blue", tags: ["ポップ"], note: "ユーキャンCMテーマ", damStatus: "未確認" },
  { id: 48, title: "White Rabbit", album: "Pink Blue", tags: ["ポップ"], note: "ピタットハウスCMソング", damStatus: "未確認" },
  { id: 49, title: "ピンクブルー", album: "Pink Blue", tags: ["ポップ", "アップテンポ"], note: "", damStatus: "未確認" },
  { id: 50, title: "夏を生きる", album: "SINGALONG", tags: ["エモい・切ない", "爽やか"], note: "", damStatus: "未確認" },
  { id: 51, title: "Starry Drama", album: "Pink Blue", tags: ["ポップ"], note: "TCK 2023年度CMソング", damStatus: "未確認" },
  { id: 52, title: "アーユーレディー", album: "Actor", tags: ["かっこいい"], note: "", damStatus: "未確認" },
  { id: 53, title: "これからのこと、それからのこと", album: "Actor", tags: ["エモい・切ない"], note: "『SEA BREEZE』CMソング", damStatus: "未確認" },
  { id: 54, title: "S.T.U.D.", album: "Pink Blue", tags: ["かっこいい", "ディープ"], note: "", damStatus: "未確認" },
  { id: 55, title: "あうん", album: "Pink Blue", tags: ["ポップ", "かわいい・おしゃれ"], note: "", damStatus: "未確認" },
  { id: 56, title: "湿気っている", album: "Pink Blue", tags: ["かっこいい", "ディープ"], note: "", damStatus: "未確認" },
  { id: 57, title: "視線", album: "Pink Blue", tags: ["エモい・切ない"], note: "", damStatus: "未確認" },
  { id: 58, title: "アラモードにワルツ", album: "Actor", tags: ["かわいい・おしゃれ", "ポップ"], note: "", damStatus: "未確認" },
  { id: 59, title: "スクリーンと横顔", album: "Actor", tags: ["エモい・切ない", "バラード・じっくり"], note: "", damStatus: "未確認" },
  { id: 60, title: "Anxiety", album: "Actor", tags: ["かっこいい", "ディープ"], note: "", damStatus: "未確認" },
  { id: 61, title: "一歩", album: "SINGALONG", tags: ["バラード・じっくり"], note: "", damStatus: "未確認" },
  { id: 62, title: "愛のかたち", album: "SINGALONG", tags: ["バラード・じっくり", "エモい・切ない"], note: "", damStatus: "未確認" },
  { id: 63, title: "幸せ", album: "SINGALONG", tags: ["バラード・じっくり", "エモい・切ない"], note: "", damStatus: "未確認" },
  { id: 64, title: "にちようび", album: "SINGALONG", tags: ["ポップ", "かわいい・おしゃれ"], note: "", damStatus: "未確認" },
  { id: 65, title: "アウトサイダー", album: "緑黄色社会", tags: ["かっこいい", "アップテンポ"], note: "", damStatus: "未確認" },
  { id: 66, title: "恋って", album: "緑黄色社会", tags: ["エモい・切ない", "ポップ"], note: "", damStatus: "未確認" },
  { id: 67, title: "Never Come Back", album: "緑黄色社会", tags: ["かっこいい", "ディープ"], note: "", damStatus: "未確認" },
  { id: 68, title: "大人ごっこ", album: "緑黄色社会", tags: ["エモい・切ない"], note: "", damStatus: "未確認" },
  { id: 69, title: "サボテン", album: "溢れた水の行方", tags: ["エモい・切ない", "ポップ"], note: "", damStatus: "未確認" },
  { id: 70, title: "Re", album: "緑黄色社会", tags: ["爽やか", "エモい・切ない"], note: "", damStatus: "未確認" },
  { id: 71, title: "マイルストーンの種", album: "Nice To Meet You??", tags: ["爽やか", "ポップ"], note: "", damStatus: "未確認" },
  { id: 72, title: "真夜中ドライブ", album: "緑黄色社会", tags: ["かっこいい", "かわいい・おしゃれ"], note: "", damStatus: "未確認" },
  { id: 73, title: "めざまし", album: "Actor", tags: ["ポップ", "爽やか"], note: "", damStatus: "未確認" },
  { id: 74, title: "Copy", album: "緑黄色社会", tags: ["エモい・切ない", "ディープ"], note: "", damStatus: "未確認" },
  { id: 75, title: "揺れる", album: "ADORE", tags: ["エモい・切ない"], note: "", damStatus: "確認済み" },
  { id: 76, title: "ブレス", album: "Actor", tags: ["エモい・切ない"], note: "", damStatus: "確認済み" }
];

// ID重複チェック
if (new Set(RYOKUSHAKA_SONGS.map(song => song.id)).size !== RYOKUSHAKA_SONGS.length) {
  console.error("IDが重複しています");
}

// 同名楽曲の重複チェック
if (new Set(RYOKUSHAKA_SONGS.map(song => song.title)).size !== RYOKUSHAKA_SONGS.length) {
  console.error("同名楽曲が重複しています");
}

// キーワード検索
function searchRyokushakaSongs(keyword = "") {
  const q = keyword.trim().toLowerCase();
  if (!q) return RYOKUSHAKA_SONGS;

  return RYOKUSHAKA_SONGS.filter(song =>
    song.title.toLowerCase().includes(q) ||
    song.album.toLowerCase().includes(q) ||
    song.tags.some(tag => tag.toLowerCase().includes(q)) ||
    song.note.toLowerCase().includes(q)
  );
}

// タグ検索
function filterRyokushakaSongsByTag(tag) {
  return RYOKUSHAKA_SONGS.filter(song => song.tags.includes(tag));
}

// DAM公式掲載を確認できた曲だけ取得
function getDamConfirmedSongs() {
  return RYOKUSHAKA_SONGS.filter(song => song.damStatus === "確認済み");
}
