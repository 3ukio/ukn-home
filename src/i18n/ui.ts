import type { Locale } from '../config/site';
export const ui = {
 ja: {
  tagline:'グローバル版の、確かな情報を。', nav:{news:'アップデート',maintenance:'メンテナンス',operations:'運営記録',guides:'攻略ガイド',tools:'プレイヤーツール'},
  hero:'アトレイアの今を、\n迷わず。', intro:'アップデート、メンテナンス、運営のお知らせ。\n公式情報を確かめて、次の冒険へ。', scope:'グローバル版のみ · Steam / PURPLE',
  overview:'最新アップデート', awaiting:'公式情報を確認してから掲載します', pending:'確認済みの更新記事はまだありません。公式のお知らせを確認してください。', official:'公式サイト', notices:'公式のお知らせ', steam:'Steam ニュース',
  quick:'必要な情報へ、すぐに。', maintenanceHint:'予定・対象リージョン・公式の終了確認', operationsHint:'RMT・BOT・スクリプトへの対応記録', latest:'新着記事', all:'すべての記事', read:'記事を読む', editorial:'編集ガイド', verified:'最終確認', updated:'更新日', published:'サイト初回公開', officialDate:'公式公開日', unpublishedDate:'公開日時の記載を確認できていません',
  categories:'カテゴリー', recent:'最近の記事', sources:'公式情報への入口', sourceHint:'韓国・台湾版の情報とは区別して掲載します。', empty:'確認済みの記事はまだありません', emptyHint:'未確認の日時・件数・攻略情報は掲載していません。確認後にこの一覧へ追加します。',
  maintenanceTitle:'メンテナンス情報', maintenanceDesc:'対象リージョンとタイムゾーンを明記。終了は公式の確認後に更新します。', noSchedule:'次回の予定を確認中', noScheduleHint:'これはメンテナンスの実施・終了を示すものではありません。公式で最新状況をご確認ください。', manual:'手動確認・編集', noLive:'リアルタイム監視ではありません',
  operationsTitle:'運営対応の記録', operationsDesc:'RMT・BOT・スクリプトに関する公式発表を、発表単位で記録します。', countNote:'発表ごとの制限件数を掲載します。複数の発表を合計して、重複のないアカウント総数とは扱いません。',
  newsTitle:'グローバル版アップデート', newsDesc:'公式パッチノートとイベント情報を、出典と対象版を添えて整理します。', guidesTitle:'冒険の前に、ひとつずつ。', guidesDesc:'公式情報の読み方から。確認できた内容だけを、わかりやすく。', toolsTitle:'プレイヤーツール', toolsDesc:'必要な機能を、必要になったときに。軽くて使いやすい道具を準備しています。',
  roadmap:'これからのコンテンツ', roadmapGuides:['初心者ガイド','クラスガイド','ダンジョンガイド'],roadmapTools:['装備プランナー','ゲーム時間ツール'], planned:'準備中', notAvailable:'この機能はまだ公開していません。', futureHint:'今は公式情報への案内をご利用ください。',
  about:'このサイトについて',contact:'お問い合わせ',privacy:'プライバシーポリシー',independent:'非公式・独立運営のプレイヤー情報サイトです。NCSOFT および Steam とは関係ありません。',footerNote:'正確さを大切に。情報は各リージョンの公式発表をご確認ください。',
  language:'言語',theme:'表示テーマを切り替える',menu:'メニュー',skip:'本文へスキップ',home:'ホーム',back:'一覧へ戻る',toc:'この記事の内容',source:'出典と確認情報',region:'対象リージョン',edition:'対象バージョン',platform:'プラットフォーム',notice:'掲載について',editorNote:'この記事は当サイトによる案内です。ゲーム運営からの新しい発表ではありません。',noTranslation:'この言語の翻訳はまだありません。対応するカテゴリーを表示しています。',
  statuses:{scheduled:'実施予定',ongoing:'実施中（公式確認）',extended:'延長（公式確認）',completed:'終了（公式確認）',cancelled:'中止',unconfirmed:'公式確認待ち'},start:'開始',expectedEnd:'終了予定',actualEnd:'実際の終了',reason:'処分理由',count:'公式発表の制限件数',
  aboutBody:'グローバル版 AION2 の情報を、日本語・英語・繁體中文で整理する独立サイトです。公式情報へのリンクと確認日を明記し、未確認の内容を事実として掲載しません。',contactBody:"情報の訂正・補足、翻訳へのご指摘、コンテンツのご提案、協業・ビジネスのご連絡は aion2now.contact@gmail.com へ。",privacyBody:'アカウント・コメント・データベースはありません。表示テーマの設定をブラウザーに保存します。アクセス状況の把握に Google Analytics 4（GA4）を利用しています。ホスティング事業者はアクセスログを処理する場合があります。外部リンク先では各サービスの方針が適用されます。',
  archive:'旧版の記事',archiveBody:'このページは初版の URL を保持するための案内です。旧内容はグローバル版向けに再確認していないため、新しいガイド一覧をご覧ください。',notFound:'ページが見つかりません',notFoundBody:'URL をご確認いただくか、言語を選んでホームへお戻りください。',
  types:{patch:'バージョン更新',maintenance:'メンテナンス',enforcement:'運営対応',event:'イベント',guide:'編集ガイド'},
 },
 en: {
  tagline:'A clearer view of AION2 Global.',nav:{news:'Updates',maintenance:'Maintenance',operations:'Operations',guides:'Guides',tools:'Player tools'},
  hero:'Your next adventure.\nA little clearer.',intro:'Updates, maintenance and official notices.\nCheck the source. Get back to your adventure.',scope:'Global edition only · Steam / PURPLE',overview:'Latest Global update',awaiting:'Verified information comes first',pending:'No verified update summaries have been published yet. Check the official notices for the latest information.',official:'Official website',notices:'Official notices',steam:'Steam news',
  quick:'Find what matters.',maintenanceHint:'Schedules, regions and confirmed completion',operationsHint:'Official responses to RMT, bots and scripts',latest:'Latest articles',all:'All articles',read:'Read article',editorial:'Editorial guide',verified:'Last verified',updated:'Updated',published:'First published here',officialDate:'Official publication',unpublishedDate:'Publication timestamp not confirmed',
  categories:'Categories',recent:'Recent articles',sources:'Go to the source',sourceHint:'Global coverage is kept separate from Korean and Taiwanese editions.',empty:'No verified articles yet',emptyHint:'Unconfirmed dates, counts and gameplay claims are not published. Reviewed articles will appear here.',maintenanceTitle:'Maintenance notices',maintenanceDesc:'Server regions and time zones are explicit. Completion requires an official announcement.',noSchedule:'Awaiting a verified schedule',noScheduleHint:'This does not mean maintenance is ongoing or complete. Check the official source for current status.',manual:'Manually reviewed',noLive:'Not a live monitoring service',
  operationsTitle:'Operations records',operationsDesc:'Official announcements about RMT, bots and scripts, recorded individually.',countNote:'Restriction counts belong to each announcement. Counts from separate batches are not added into a unique-account total.',newsTitle:'Global updates',newsDesc:'Official patch notes and events, with sources and applicable editions clearly identified.',guidesTitle:'One step at a time.',guidesDesc:'Start with reliable sources. Understand what has been verified before you act.',toolsTitle:'Player tools',toolsDesc:'Small, useful tools are planned for when you need them.',roadmap:'Coming later',roadmapGuides:['Getting started','Class guides','Dungeon guides'],roadmapTools:['Equipment planner','Game time tools'],planned:'Planned',notAvailable:'This feature is not available yet.',futureHint:'For now, use the official information links.',
  about:'About us',contact:'Contact',privacy:'Privacy policy',independent:'An independent, unofficial player resource. Not affiliated with NCSOFT or Steam.',footerNote:'Accuracy first. Always check the official announcement for your region.',language:'Language',theme:'Toggle color theme',menu:'Menu',skip:'Skip to content',home:'Home',back:'Back to list',toc:'In this article',source:'Sources and verification',region:'Server region',edition:'Applicable edition',platform:'Platforms',notice:'Editorial note',editorNote:'This is an independently written guide, not a new announcement from the game operator.',noTranslation:'This article is not translated into this language yet. You are viewing the relevant category instead.',
  statuses:{scheduled:'Scheduled',ongoing:'Ongoing · officially confirmed',extended:'Extended · officially confirmed',completed:'Completed · officially confirmed',cancelled:'Cancelled',unconfirmed:'Awaiting official confirmation'},start:'Starts',expectedEnd:'Expected end',actualEnd:'Confirmed end',reason:'Reason',count:'Official restriction count',
  aboutBody:'An independent resource covering AION2 Global in Japanese, English and Traditional Chinese. We include official links and verification dates, and do not publish unverified claims as facts.',contactBody:"Contact AION2 NOW at aion2now.contact@gmail.com for corrections, game information, translation feedback, content suggestions and business enquiries.",privacyBody:'There are no accounts, comments or databases. Your theme preference is saved in your browser. Google Analytics 4 (GA4) is used to understand website usage. The hosting provider may process access logs. External links are covered by their respective privacy policies.',archive:'First-version article',archiveBody:'This page preserves a first-version URL. Its previous content has not been reviewed for Global. Please use the new guide index.',notFound:'Page not found',notFoundBody:'Check the URL or choose a language to return home.',types:{patch:'Patch notes',maintenance:'Maintenance',enforcement:'Enforcement',event:'Events',guide:'Editorial guide'},
 },
 'zh-tw': {
  tagline:'讓國際服資訊，更清楚。',nav:{news:'更新資訊',maintenance:'維護公告',operations:'營運紀錄',guides:'遊戲攻略',tools:'玩家工具'},hero:'掌握亞特雷亞，\n從可靠資訊開始。',intro:'版本更新、維護時間與官方公告。\n確認來源，再安心展開下一段冒險。',scope:'僅限國際服 · Steam / PURPLE',overview:'最新國際服更新',awaiting:'確認資訊，再刊登',pending:'目前尚未刊登經核實的更新摘要。請先至官方公告查閱最新資訊。',official:'官方網站',notices:'官方公告',steam:'Steam 公告',
  quick:'快速找到需要的資訊。',maintenanceHint:'維護排程、伺服器地區與官方結束確認',operationsHint:'RMT、BOT 與腳本相關官方處理紀錄',latest:'最新文章',all:'所有文章',read:'閱讀文章',editorial:'編輯指南',verified:'最後核實',updated:'更新日期',published:'本站首次發布',officialDate:'官方發布時間',unpublishedDate:'尚未確認官方發布時間',categories:'資訊分類',recent:'最近文章',sources:'回到官方來源',sourceHint:'國際服資訊與韓服、台服資料分開處理。',empty:'目前尚無經核實的文章',emptyHint:'未確認的日期、數量與遊戲機制不會刊登；審核完成後將新增至此。',maintenanceTitle:'維護公告',maintenanceDesc:'清楚標示伺服器地區與時區；僅在官方確認後標示維護結束。',noSchedule:'等待核實下一次排程',noScheduleHint:'這不代表伺服器正在維護或已結束維護。即時狀態請查閱官方來源。',manual:'人工核實與編輯',noLive:'非即時監控服務',
  operationsTitle:'營運處理紀錄',operationsDesc:'逐則整理 RMT、BOT 與腳本相關的官方發表。',countNote:'限制帳號數按各次官方公告記錄，不將不同批次直接加總為不重複帳號總數。',newsTitle:'國際服更新資訊',newsDesc:'整理官方版本更新與活動公告，清楚標示來源及適用版本。',guidesTitle:'一步一步，準備好再出發。',guidesDesc:'從辨識官方資訊開始，只分享經確認且易於理解的內容。',toolsTitle:'玩家工具',toolsDesc:'以簡單、輕量的方式，逐步準備實用工具。',roadmap:'後續規劃',roadmapGuides:['新手攻略','職業攻略','副本攻略'],roadmapTools:['配裝規劃器','遊戲時間工具'],planned:'規劃中',notAvailable:'這項功能目前尚未開放。',futureHint:'現階段可先使用官方資訊入口。',
  about:'關於我們',contact:'聯絡方式',privacy:'隱私政策',independent:'獨立、非官方的玩家資訊站，與 NCSOFT 及 Steam 無隸屬關係。',footerNote:'重視資訊正確性，請以各地區官方公告為準。',language:'語言',theme:'切換明亮或深色主題',menu:'選單',skip:'跳至正文',home:'首頁',back:'返回列表',toc:'本文目錄',source:'來源與核實資訊',region:'伺服器地區',edition:'適用版本',platform:'平台',notice:'編輯說明',editorNote:'本文為本站編寫的資訊指南，不代表遊戲營運方發布了新公告。',noTranslation:'這篇文章尚無此語言的譯文，目前顯示對應分類頁。',statuses:{scheduled:'預定維護',ongoing:'維護中・官方確認',extended:'延長・官方確認',completed:'已結束・官方確認',cancelled:'已取消',unconfirmed:'等待官方確認'},start:'開始時間',expectedEnd:'預計結束',actualEnd:'實際結束',reason:'處理原因',count:'官方公布的限制數量',
  aboutBody:'本站以日文、英文及繁體中文整理 AION2 國際服資訊。每篇提供官方來源與核實日期，不將未確認內容當作事實發布。',contactBody:"公告更正、遊戲資料補充、翻譯回饋、內容建議及商務合作，請聯絡 aion2now.contact@gmail.com。",privacyBody:'本站沒有帳號、評論或資料庫，在瀏覽器儲存主題偏好，使用 Google Analytics 4（GA4）了解網站使用情況。託管服務商可能處理存取日誌。外部連結適用各網站的隱私政策。',archive:'第一版文章',archiveBody:'此頁保留第一版網址。舊內容尚未依國際服重新核實，請前往新的攻略列表。',notFound:'找不到這個頁面',notFoundBody:'請確認網址，或選擇語言返回首頁。',types:{patch:'版本更新',maintenance:'維護公告',enforcement:'營運處理',event:'活動資訊',guide:'編輯指南'},
 },
};
export function t(lang: Locale) { return ui[lang]; }

// Content for the existing information pages only.
type InfoSection = { title: string; body: string; items?: string[]; email?: boolean };
export const infoContent: Record<Locale, Record<'about' | 'contact' | 'privacy', InfoSection[]>> = {
 ja: {
  about: [
   {title:'AION2 NOW について',body:'AION2 NOW は、独立した非公式の AION2 プレイヤー情報サイトです。NCSOFT および Steam との提携・所属関係はありません。日本語・英語・繁體中文でグローバル版の情報を整理しています。'},
   {title:'運営者について',body:'運営者は AION2 を長くプレイしており、韓国版・台湾版・グローバル版でのプレイ経験があります。クラス、スキル、ダンジョン、発展的な遊び方への理解をもとに、プレイヤーの視点で情報を整理します。'},
   {title:'取り扱う情報',body:'主に次の情報を整理します。プレイヤーツールには、今後の公開に向けて準備中のものもあります。',items:['グローバル版の公式アップデート情報','クラスバランスとスキルの調整','ダンジョンのギミックとコンテンツの変更','不具合修正とシステム調整','メンテナンス告知と運営対応の記録','プレイヤー向けの実用的な攻略ガイドとツール']},
   {title:'編集の原則',body:'プレイヤーが本当に知りたい情報を優先し、グローバル版の公式告知を重要な照合元とします。確認済みの情報と未確認の情報を区別し、韓国版・台湾版の情報をそのままグローバル版の仕様として扱いません。要点を素早く見つけられるよう整理し、未確認の内容を事実として掲載しません。'},
  ],
  contact: [
   {title:'お問い合わせの内容',body:'情報の訂正・補足やサイトへのご意見、協業・ビジネスに関するご連絡は、下記のメールアドレスへお寄せください。',items:['公式告知の紹介内容の誤りの訂正','ゲーム情報の補足','翻訳に関するご指摘','サイトのコンテンツへのご提案','協業およびその他のビジネスに関するお問い合わせ']},
   {title:'連絡先メールアドレス',body:'メールアドレスをクリックすると、お使いのメールアプリが開きます。該当ページの URL と具体的な内容を添えていただくと確認しやすくなります。パスワードなどの機密情報は送信しないでください。',email:true},
  ],
  privacy: [
   {title:'1. 収集する情報の範囲',body:'AION2 NOW は静的な情報サイトです。アカウント、ログイン、コメント、ユーザー情報のデータベース、実際に送信するフィードバックフォームはありません。閲覧時に氏名やメールアドレスの入力を求めません。ただし、ページ配信に伴いホスティング事業者が技術的なリクエスト情報を処理する場合があります。'},
   {title:'2. メールでご連絡いただいた場合',body:'メールを送信すると、送信元のメールアドレス、表示名、本文、添付ファイルなど、送信いただいた情報を受け取ります。返信、内容確認、訂正、提案や協業の検討に必要な範囲で利用し、メールの内容や連絡先を自動的に公開しません。連絡先には Gmail を利用しているため、メールの送受信には同サービスによる処理が伴います。'},
   {title:'3. Cookie とローカルストレージ',body:'Google Analytics 4（GA4）は、訪問状況の分析のために _ga などの Cookie を使用する場合があります。ブラウザーの設定や拡張機能で Cookie・解析スクリプトを制限できます。広告配信用の Google AdSense は導入していません。ブラウザーの localStorage に aion2-theme というキーで明るい／暗いテーマの選択を保存します。この値をサイトの処理でサーバーに送信することはありません。言語は URL で切り替え、言語設定は保存しません。ブラウザーのサイトデータを削除するとテーマ設定も消去できます。ホスティング側のセキュリティ機能は、設定やアクセス状況に応じて必要な Cookie を使用する場合があります。'},
   {title:'4. ホスティングと第三者サービス',body:'当サイトは Cloudflare Pages で配信しています。Cloudflare は配信・運用・セキュリティのために IP アドレス、アクセス日時、リクエスト先 URL、ブラウザー情報などを処理する場合があります。ログの有無、保存期間や処理方法は同社のサービスと設定によるため、当サイトでは一律の保存期間を定めていません。当サイトは Google の Google Analytics 4（GA4）と gtag.js を利用し、閲覧ページ、参照元、ブラウザー・端末・言語の情報、おおまかな地域、スクロールや外部リンクのクリックなどの利用状況を分析します。収集範囲はデータストリームの拡張計測設定にも依存します。ページ URL と参照元からクエリー文字列とフラグメントを除き、氏名、メールアドレス、メール本文を解析パラメーターに渡しません。Google による処理と保存は同社のポリシーおよび GA4 の設定に従います。Google AdSense は未導入です。利用サービスの変更時には本ポリシーを更新します。'},
   {title:'5. 外部サイトへのリンク',body:'公式サイトや Steam などへのリンクがあります。外部サイトに移動した後の情報の取り扱いは、各サイトのプライバシーポリシーをご確認ください。リンク先を当サイトが管理しているわけではありません。'},
   {title:'6. 情報の保存と削除',body:'メールで受け取った情報は、返信、訂正対応、協業の検討および必要な記録のために必要な期間保存し、不要になったものは整理・削除します。削除をご希望の場合は、該当するメールが分かる情報を添えてご連絡ください。対応に必要な記録の有無などを確認して対応します。メールサービスやホスティング事業者のログ・バックアップには各事業者の保存方針が適用され、当サイトから直ちに削除できない場合があります。テーマ設定はご自身のブラウザーで削除できます。'},
   {title:'7. ポリシーの更新',body:'サイト機能や利用サービスの変更に合わせて、このページの内容と最終更新日を更新します。解析や広告サービスを導入する場合も、その取り扱いを追記します。最終更新日：2026年10月30日。'},
   {title:'8. プライバシーに関する連絡先',body:'本ポリシーに関するご質問や、メールで提供した情報の削除に関するご相談は、次のアドレスへご連絡ください。',email:true},
  ],
 },
 en: {
  about: [
   {title:'About AION2 NOW',body:'AION2 NOW is an independent, unofficial AION2 player information website. It is not affiliated with NCSOFT or Steam. We organize information about AION2 Global in Japanese, English and Traditional Chinese.'},
   {title:'The maintainer',body:'The maintainer has long-term AION2 playing experience across the Korean, Taiwanese and Global versions, with familiarity with classes, skills, dungeons and advanced gameplay. This experience informs how we organize information from a player’s perspective.'},
   {title:'What we cover',body:'Our coverage focuses on the topics below. Some player tools are still being prepared for future release.',items:['Official Global update announcements','Class balance and skill adjustments','Dungeon mechanics and content changes','Bug fixes and system adjustments','Maintenance announcements and operations records','Practical player guides and tools']},
   {title:'Our editorial principles',body:'We prioritize information players actually care about and use official Global announcements as an important source for verification. We distinguish confirmed information from unconfirmed reports and do not assume that Korean or Taiwanese mechanics apply to Global. Our aim is to help players find the key points quickly, without presenting unverified claims as facts.'},
  ],
  contact: [
   {title:'What to contact us about',body:'Use the email address below for corrections, additional information, website suggestions, collaboration and business enquiries.',items:['Corrections to our coverage of official announcements','Additional game information','Translation feedback','Suggestions for website content','Collaboration and other business enquiries']},
   {title:'Contact email',body:'Click the address to open your email app. Including the relevant page URL and specific details helps us review your message. Please do not send passwords or other sensitive credentials.',email:true},
  ],
  privacy: [
   {title:'1. Information collected',body:'AION2 NOW is a static information website. It has no accounts, login, comments, user database or feedback form that submits data. We do not ask for your name or email address when you browse. Our hosting provider may, however, process technical request information when delivering pages.'},
   {title:'2. Contacting us by email',body:'If you send us an email, we receive the information you send, which may include your email address, display name, message and attachments. We use it as needed to reply, verify information, address corrections and consider suggestions or collaboration. Your correspondence and contact details are not automatically published. We use Gmail for this address, so sending and receiving messages involves processing by that email service.'},
   {title:'3. Cookies and local storage',body:'Google Analytics 4 (GA4) may use cookies such as _ga to measure visits. You can restrict cookies and analytics scripts through browser settings or extensions. Google AdSense advertising is not installed. It saves your light or dark theme choice in your browser’s localStorage under aion2-theme. The site’s application code does not send that value to a server. Language is selected through the URL and is not stored as a preference. Clearing the site’s browser data removes the saved theme. Hosting security features may use necessary cookies depending on provider settings and the circumstances of a request.'},
   {title:'4. Hosting and third-party services',body:'The site is hosted on Cloudflare Pages. Cloudflare may process IP addresses, access times, requested URLs, browser information and similar technical data for delivery, operation and security. Logging availability, retention and processing depend on its services and settings; we do not specify a fixed retention period for those records. We use Google Analytics 4 (GA4) and Google’s gtag.js to understand page visits, referrers, browser, device and language information, approximate location and interactions such as scrolling and outbound link clicks. Collection also depends on the data stream’s enhanced measurement settings. Query strings and fragments are removed from the page URL and referrer sent by our tag, and we do not pass names, email addresses or email contents as analytics parameters. Google processes and retains analytics data according to its policies and the GA4 settings. Google AdSense is not integrated. We will update this policy when these services change.'},
   {title:'5. Links to external websites',body:'We link to external websites, including official game websites and Steam. After following a link, please consult that website’s privacy policy. We do not operate or control those websites.'},
   {title:'6. Retention and deletion',body:'We keep email correspondence for as long as needed to respond, address corrections, consider collaboration and maintain necessary records, and review or delete information that is no longer needed. To request deletion, email us with enough context to identify the correspondence. We will review the request in light of any continuing need for the records. Email and hosting providers apply their own retention policies to logs and backups, which we may not be able to delete immediately. You can remove the saved theme through your browser’s site-data settings.'},
   {title:'7. Policy updates',body:'We update this page and its revision date when website features or services change. If analytics or advertising services are introduced, their information handling will be added here. Last updated: October 30, 2026.'},
   {title:'8. Privacy contact',body:'For questions about this policy or requests concerning information you sent by email, contact us at:',email:true},
  ],
 },
 'zh-tw': {
  about: [
   {title:'關於 AION2 NOW',body:'AION2 NOW 是獨立、非官方的 AION2 玩家資訊網站，與 NCSOFT、Steam 無隸屬或合作關係。我們以日文、英文與繁體中文整理 AION2 國際服資訊。'},
   {title:'網站維護者',body:'網站維護者擁有長期 AION2 遊戲經歷，具有韓服、台服及國際服遊玩經驗，熟悉遊戲職業、技能、副本及進階玩法，並以玩家的角度整理資訊。'},
   {title:'重點整理內容',body:'本站主要整理以下資訊；部分玩家工具仍在準備中，將於完成後提供。',items:['國際服官方更新公告','職業平衡及技能調整','副本機制與內容修改','BUG 修復及系統調整','維護公告及營運紀錄','玩家實用攻略與工具']},
   {title:'核心編輯原則',body:'我們優先整理玩家真正關心的資訊，以官方國際服公告為重要核對依據，區分已確認資訊與尚未確認資訊，不將韓服或台服內容直接視為國際服現行設定。我們希望幫助玩家更快找到重點，不將未經核實的內容當作事實發布。'},
  ],
  contact: [
   {title:'聯絡用途',body:'如需更正或補充資訊、反映網站內容問題，或洽談合作與商務事項，請透過下列工作信箱聯絡。',items:['公告整理內容的錯誤更正','遊戲資料補充','翻譯問題回饋','網站內容建議','合作及其他商務聯絡']},
   {title:'工作信箱',body:'點擊信箱即可開啟您的郵件應用程式。來信時可附上相關頁面網址及具體說明，方便核對；請勿寄送密碼或其他機密憑證。',email:true},
  ],
  privacy: [
   {title:'1. 資訊收集範圍',body:'AION2 NOW 是靜態資訊網站，沒有帳號、登入、評論、使用者資料庫或實際提交資料的回饋表單。瀏覽網站時，本站不要求輸入姓名或電子郵件。不過，託管服務商在提供網頁時，可能處理技術性的連線請求資訊。'},
   {title:'2. 透過電子郵件聯絡',body:'當您主動寄信時，我們會收到您提供的寄件信箱、顯示名稱、郵件內容與附件等資訊，並在回覆、核實資料、處理更正、評估建議或合作所需範圍內使用，不會自動公開來信內容與聯絡資料。工作信箱使用 Gmail，因此郵件收發也涉及該郵件服務的資料處理。'},
   {title:'3. Cookie 與本機儲存',body:'Google Analytics 4（GA4）可能使用 _ga 等 Cookie 衡量造訪情況。您可透過瀏覽器設定或擴充功能限制 Cookie 與分析腳本。本站尚未接入 Google AdSense 廣告。本站以瀏覽器 localStorage 的 aion2-theme 儲存明亮或深色主題選擇，網站程式不會將此值傳送至伺服器。語言透過網址切換，不另行儲存語言偏好。您可在瀏覽器清除本站資料，刪除主題設定。託管平台的安全功能可能依平台設定及連線情況使用必要的 Cookie。'},
   {title:'4. 網站託管與第三方服務',body:'本站使用 Cloudflare Pages 託管。Cloudflare 可能為網頁傳送、服務運作及安全防護，處理 IP 位址、存取時間、請求網址、瀏覽器資訊等技術資料。是否記錄、保存多久及如何處理，取決於該服務與設定，本站不對這些紀錄指定固定保存天數。本站使用 Google Analytics 4（GA4）與 Google 的 gtag.js，了解瀏覽頁面、來源網址、瀏覽器、裝置、語言、概略地區，以及捲動和外部連結點擊等使用情況；收集範圍也取決於資料串流的增強型衡量設定。追蹤碼傳送的頁面與來源網址會移除查詢參數及片段，不將姓名、電子郵件或郵件內容作為分析參數傳送。Google 依其政策與 GA4 設定處理及保存分析資料。Google AdSense 仍未接入；相關服務變更時會更新本政策。'},
   {title:'5. 外部網站連結',body:'本站提供遊戲官方網站、Steam 等外部連結。前往外部網站後，資訊處理方式請參閱該網站的隱私政策；本站並不管理或控制這些網站。'},
   {title:'6. 資訊保存與刪除',body:'來信資料會在回覆、更正處理、合作評估及必要紀錄所需期間保存，並整理或刪除不再需要的資訊。如希望刪除您寄送的資料，請來信提供足以辨識相關郵件的資訊，我們會依是否仍有處理或保存需要進行確認。郵件與託管服務商的日誌、備份適用其各自的保存方式，本站可能無法立即刪除。瀏覽器中的主題設定可由您自行清除。'},
   {title:'7. 隱私政策更新',body:'網站功能或使用服務變更時，會在本頁更新內容及最後更新日期。如日後導入分析或廣告服務，也會補充相關資訊處理說明。最後更新日期：2026 年 10 月 30 日。'},
   {title:'8. 隱私聯絡信箱',body:'如對本政策有疑問，或希望處理您透過郵件提供的資訊，請聯絡：',email:true},
  ],
 },
};
