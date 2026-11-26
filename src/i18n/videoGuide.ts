export const videoText = {
 ja:{title:'ルドラ実戦動画・ギミック別チャプター',intro:'AION2 ルドラ攻略：最終ボスの球、床ギミック、ブレスを動画で確認。',play:'動画を再生',original:'元の動画を見る',note:'動画の字幕・音声はYouTubeの設定から変更できます。※利用できる言語は動画によって異なります。',privacy:'再生すると外部サービスに接続します。',chapters:'ルドラ ギミック',youtube:'YouTube',alternatives:['中文實戰 A','中文實戰 B'],chapterNote:'最終ボス・ルドラのチャプター。'},
 en:{title:'Ludra Video Guide & Boss Mechanics',intro:'AION 2 Ludra Guide: watch the final boss orb checks, floor mechanics and breath.',play:'Play video',original:'Watch original',note:'Change subtitles and audio in YouTube settings. Available languages vary by video.',privacy:'Playing connects to the external video service.',chapters:'Boss Mechanics',youtube:'YouTube',alternatives:['中文實戰 A','中文實戰 B'],chapterNote:'Chapters cover the final boss, Ludra.'},
 'zh-tw':{title:'盧德萊實戰影片攻略・首領機制',intro:'AION2 盧德萊攻略：觀看最終首領的球體、地板與吐息處理。',play:'播放影片',original:'前往原平台觀看',note:'字幕與音訊可在 YouTube 設定中調整，可用語言依影片而異。',privacy:'播放後會連線至外部影音服務。',chapters:'首領機制章節',youtube:'YouTube',alternatives:['中文實戰 A','中文實戰 B'],chapterNote:'章節僅對應最終首領盧德萊；中文實戰 A／B 尚未核實章節。'}
};

export const corrodedVideoText = {
 ja:{...videoText.ja,title:'侵食の浄化所・実戦動画',intro:'STEPでボスを選択し、時間ボタンでギミックへ移動できます。',chapters:'ギミック別チャプター',chapterNote:'ユーザー提供の動画解説・時間軸。独立した実戦検証は未実施。',note:'動画の字幕・音声はYouTubeの設定から変更できます。※利用できる言語は動画によって異なります。'},
 en:{...videoText.en,title:'Full video walkthrough',intro:'Choose a boss STEP or jump directly to a mechanic.',chapters:'Mechanic timestamps',chapterNote:'User-supplied walkthrough timings; not independently play-tested.'},
 'zh-tw':{...videoText['zh-tw'],title:'完整實戰影片',intro:'選擇首領STEP，或點擊時間直接觀看機制。',chapters:'機制時間跳轉',chapterNote:'時間軸依使用者提供的影片講解，尚未獨立實戰驗證。'}
};
