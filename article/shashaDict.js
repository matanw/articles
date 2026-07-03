// Sacha Stern - "Compulsive Libationers: Non-Jews and Wine in Early Rabbinic Sources"
// Data structure: metadata + content sections with dual translations

const shashaArticle = {
    metadata: {
        title: "Compulsive Libationers: Non-Jews and Wine in Early Rabbinic Sources",
        author: "Sacha S. Stern | University College London, UK",
        source: "Journal of Jewish Studies, Vol. LXIV, No. 1, Spring 2013"
    },

    sections: [
        {
            title: "Abstract",
            paragraphs: [
                {
                    english: "The rabbinic prohibition on non-Jewish wine is grounded on the assumption that non-Jews were compulsive wine libationers, who offered wine libations at any time and in any place, unpredictably, compulsively, and almost completely undetected; and that the mere contact with wine was sufficient for libations to pagan divinities to be performed. These assumptions, however, do not reflect the pagan practice of wine libation as known from Greek and Roman sources. This paper discusses whether the rabbinic view of non-Jewish libation was purely imagined, compares it with early Christian views, and suggests various interpretations of the myth of compulsive wine libation.",
                    hebrew_literal: "איסור הרבנים על יין של גויים מושתת על ההנחה שגויים היו נסכנים כפויים, המנסכים יין לאלוהויות זרות בכל זמן וכל מקום, בדרך בלתי צפויה, כפייתית וכמעט שלא נשמה; וכי קשר בלבד עם יין היה מספיק כדי שיתבצעו נסכים לאלוהויות זרות. עם זאת, הנחות אלו אינן משקפות את תרגול הנסיכה של יין כידוע ממקורות יווניים ורומיים. מאמר זה דן בשאלה האם תצפית הרבנית של הנסיכה של גויים הייתה אך ורק דמיונית, משווה אותה לדעות נוצריות מוקדמות, ומציע פירושים שונים למיתוס של הנסיכה הכפייתית של יין.",
                    hebrew_natural: "הדת היהודית אסרה יין של גויים על סמך הנחה בסיסית: שגויים נוטים בטבעם להנסך, כלומר להקדיש יין לאלוהויות זרות בכל עת ובכל מקום בדרך בלתי צפויה וללא שניתן לגלות זאת. יתרה מכך, הדת הניחה שמספיק קשר זעום עם היין כדי שנסך זה יתבצע. אך הנחות אלו אינן תואמות את מה שידוע לנו על הנוהג של הנסיכה אצל הפגנים מן המקורות היווניים והרומיים. במאמר זה אעמוד על השאלה האם הדעה הרבנית על הנסיכה של גויים נולדה בדמיון טהור, אשוה אותה לתפיסות נוצריות מוקדמות, והציע הסברים שונים לממקור של אמונה זו בנסיכה כפייתית."
                }
            ]
        },

        {
            title: "Introduction",
            paragraphs: [
                {
                    english: "The prohibition on non-Jewish wine, which includes wine touched or handled by a non-Jew, is grounded in early rabbinic law on an assumption that non-Jews frequently made wine libations to pagan divinities, and that libations could be made at any time and in any place, in an unpredictable and compulsive way. For this reason, it was assumed not only that wine owned by a non-Jew must have been used, at some stage, for a pagan libation, but also that the briefest, fleeting contact of a non-Jew with wine owned by a Jew involved potentially an act of libation, and thus rendered the wine forbidden as a pagan offering.",
                    hebrew_literal: "איסור יין הגויים, שכולל יין שנגע בו או התעסק בו גוי, מושתת בהלכה הרבנית המוקדמת על הנחה שגויים עשו תדיר נסיכות יין לאלוהויות זרות, ושנסיכות יכלו להתבצע בכל זמן וכל מקום, בדרך בלתי צפויה וכפייתית. לכן הובטח לא רק כי יין בבעלות גוי חייב להיות בשימוש, בשלב כלשהו, עבור נסיכה זרה, אלא גם כי קשר קצר וחולף של גוי עם יין בבעלות יהודי כרוך בעדכון בפעולת נסיכה, וכך הגבל את היין כקרבן זר.",
                    hebrew_natural: "אסור ליהודים לשתות יין של גויים – בין שגויים עשו בו משהו, בין שרק נגעו בו. הדבר מעוגן בהלכה הרבנית המוקדמת בהנחה שגויים, בדרך כלל, מנסכים יין לאלוהויות זרות, וכי הם עלולים לעשות זאת בכל עת ובכל מקום. מכאן שהרבנים חששו לא רק שיין של גוי נשמש בעצמו לנסך, אלא אף שאם גוי נוגע ביין של יהודי, גם זה עלול להפוך לנסך בעיני אלוהויות זרות."
                },
                {
                    english: "The assumption that non-Jews were compulsive libationers has long been accepted in halakhic tradition as a historical fact (at least in the context of the ancient world), and some modern scholars have also referred to it as factual.",
                    hebrew_literal: "ההנחה שגויים היו כפויים נסכנים התקבלה זמן רב בדרך הלכה כעובדה היסטורית (לפחות בהקשר של העולם העתיק), וגם כמה חוקרים מודרניים התייחסו אליה כעובדה.",
                    hebrew_natural: "ההנחה של הרבנים שגויים היו בעלי נטיה טבעית להנסך התקבלה כעובדה היסטורית, הן בספרות הלכתית הרבנית עצמה והן בכתבי חוקרים מודרניים."
                },
                {
                    english: "The ancient historian, however, may have trouble reconciling this rabbinic assumption with what is known about pagan religious practices from other, ancient historical sources. The purpose of this article is to assess early rabbinic assumptions about non-Jewish wine libations in relation to other historical evidence. Did these assumptions reflect historical reality, or were they a figment of rabbinic imagination; and if the latter, why was this imagined view of non-Jewish libation conceived?",
                    hebrew_literal: "בכל זאת, ההיסטוריון העתיק עלול להיתקל בקשיים בהתאמת הנחה זו של הרבנים למה שידוע על מנהגי דת זרה מן המקורות ההיסטוריים העתיקים האחרים. מטרת מאמר זה היא להעריך הנחות רבניות מוקדמות על נסיכות יין של גויים ביחס להוכחות היסטוריות אחרות. האם הנחות אלה משקפות מציאות היסטורית, או היו הן פרי דמיון רבני; ואם כך, מדוע הוצעה הדעה הדמיונית הזאת של הנסיכה של גויים?",
                    hebrew_natural: "אך ההיסטוריונים הקדומים מעלים שאלה משמעותית: האם תמונה זו של גויים כנסכנים כפויים משקפת בעצם מציאות היסטורית, או שהיא פרי דמיון רבני גרידא? במאמר זה אשתדל לבדוק אם ההנחות של הרבנים על הנסיכה של גויים עומדות לניתוח היסטורי, ואם לא – מדוע נוצרה אמונה זו בדמיון."
                }
            ]
        },

        {
            title: "Non-Jews as Compulsive Libationers",
            paragraphs: [
                {
                    english: "The assumption of non-Jews as compulsive libationers is hardly explicit in rabbinic literature, but it is evident from the rules and regulations that govern the prohibitions on non-Jews and wine. This can be illustrated from a wide range of sources, but a few salient examples from the Mishnah will suffice:",
                    hebrew_literal: "ההנחה של גויים כנסכנים כפויים היא בקושי מפורשת במקורות רבניים, אולם היא ברורה מן הכללים והתקנונים השולטים על האיסורים על גויים ויין. ניתן להמחיש זאת מתוך מגוון רחב של מקורות, אך כמה דוגמאות בולטות משנה תספיק:",
                    hebrew_natural: "ההנחה הזאת של הרבנים – שגויים הם 'נסכנים כפויים' – לא מתבטאת בבירור במקורות רבניים. אבל אם תקרא בעיון את הכללים הרבניים בנוגע ליין של גויים, זה יתברר לך בברור. בואו נראה כמה דוגמאות מן המשנה:"
                },
                {
                    english: "If a non-Jew was carrying jars of wine with a Jew from one place to another, if the presumption was that it [the wine] / he [the non-Jew] was being watched, it is permitted. But if he [the Jew] told him that he was going out, [the wine is forbidden if there was] enough time for [the non-Jew] to bore a hole, stop it up, and dry it. R. Simon b. Gamaliel says: enough time to open it, seal it, and let it dry. (mAvodah Zarah 5:4)",
                    hebrew_literal: "אם גוי נשא צנצנות יין עם יהודי ממקום למקום, אם בחזקת שמור מותר. ואם הודיע לו שהוא יוצא, ויש שהות לנקוב וליסום וליובש - אסור. ר' שמעון בן גמליאל אומר: ויש שהות לפתוח וליסום וליובש. (משנה עבודה זרה 5:4)",
                    hebrew_natural: "אם גוי נשא צנצנות יין עם יהודי ממקום למקום: אם הנחת הדבר הייתה שהוא מושגח, זה מותר. אך אם אמר לו שהוא הולך לצאת, אז אם היה זמן מספיק לגוי לנקב חור, לסתום אותו וליבשו - כל היין אסור. ר' שמעון בן גמליאל אומר: אם היה זמן מספיק לפתוח אותו, לחתום אותו וליבשו. (משנה עבודה זרה 5:4)"
                },
                {
                    english: "As long as the Jew's wine or the non-Jewish worker is being watched, or as long as the non-Jewish worker has reason to think that he is being watched, no untoward contact will be made with the wine, and it is therefore permitted. But if the non-Jewish worker is told that he will be left alone with the wine for a period of time, then if this period is long enough for him to open a jar, seal it, and dry up all spillages, all the wine becomes forbidden.",
                    hebrew_literal: "כל עוד היהודי משגיח על היין או על הגוי, או כל עוד לגוי יש סיבה להניח שהוא תחת השגחה, לא יבצע מגע בלתי ראוי עם היין, וממילא היין יהיה מותר. אך אם לגוי אומרו שישארו לבדו עם היין למשך זמן מסוים, אזי אם זמן זה מספיק כדי לפתוח צנצנת, לחתום אותה וליבש כל טיפת יין שנשפכה, כל היין הופך להיות אסור.",
                    hebrew_natural: "כל זמן שהיהודי משגיח על היין או על הגוי, או כל זמן שלגוי יש סיבה להניח שהוא תחת השגחה, לא יבצע מגע בלתי ראוי עם היין, וממילא היין יהיה מותר. אך אם לגוי אומרו שישארו לבדו עם היין למשך זמן מסוים, אזי אם זמן זה מספיק כדי לפתוח צנצנת, לחתום אותה וליבש כל טיפת יין שנשפכה, כל היין הופך להיות אסור."
                },
                {
                    english: "If a detachment entered a city, if it was a time of peace, opened jars are forbidden and sealed jars are permitted. If it was a time of war, both are permitted, because there was no leisure to make libations. (mAZ 5:8)",
                    hebrew_literal: "אם גדוד נכנס לעיר – בשעת שלום, כדים פתוחים אסורים וכדים סתומים מותרים. בשעת מלחמה, כולם מותרים, מפני שאין שהות לנסוך. (משנה עבודה זרה 5:8)",
                    hebrew_natural: "אם גדוד נכנס לעיר: אם זה בתקופת שלום, צנצנות פתוחות אסורות וצנצנות סגורות מותרות. אם זה בתקופת מלחמה, שניהם מותרים - כי אין זמן לחיילים לנסך. (משנה עבודה זרה 5:8)"
                },
                {
                    english: "If one works with a non-Jew in a wine-press, and the [non-Jew] brings the pressed grapes [lit. 'bread'] up to the heap and down from the heap, even though wine is running on his hands, it is permitted, because it is not their way to make libations like that. (tAZ 7(8):3)",
                    hebrew_literal: "אם עובד עם גוי בגת, והגוי מביא את גבישי הענבים עד הערימה וחוזר מהערימה, ואפילו אם יין זורם על ידיו - היין מותר, כיוון שאין זה דרכם לנסך בשלב זה. (תוספתא עבודה זרה 7(8):3)",
                    hebrew_natural: "אם עובד עם גוי בגת, והגוי מביא את גבישי הענבים עד הערימה וחוזר מהערימה, ואפילו אם יין זורם על ידיו - היין מותר, כיוון שאין זה דרכם לנסך בשלב זה. (תוספתא עבודה זרה 7(8):3)"
                },
                {
                    english: "This case is again permissive, as it concerns the stage when the wine is still being produced: the wine is permitted because 'they' (non-Jews) do not make libations at this stage in its production. Again, this is an exception that proves the rule. The implication of this passage is that in most other situations, non-Jews in contact with wine will make libations, thus rendering the wine forbidden.",
                    hebrew_literal: "גם במקרה זה מדובר בפטור, שכן הוא נוגע לשלב שבו היין עדיין בתהליך הייצור: היין מותר כיוון ש'הם' (הגויים) אינם נוספים נסיכות בשלב זה של הייצור. שוב, זה חריג המוכיח את הכלל. משמעות הקטע היא שברוב הנסיבות האחרות, כאשר גויים באים במגע עם יין, הם ינסכו אותו, וממילא היין יהפוך לאסור.",
                    hebrew_natural: "גם במקרה זה מדובר בפטור, שכן הוא נוגע לשלב שבו היין עדיין בתהליך הייצור: היין מותר כיוון ש'הם' (הגויים) אינם נוספים נסיכות בשלב זה של הייצור. שוב, זה חריג המוכיח את הכלל. משמעות הקטע היא שברוב הנסיבות האחרות, כאשר גויים באים במגע עם יין, הם ינסכו אותו, וממילא היין יהפוך לאסור."
                },
                {
                    english: "If a bailiff stretched his hand into a jar thinking it was oil, and it turned out to be wine – this was an actual case, whereupon they came and asked the sages, who said: 'let them all be sold to non-Jews'. If a non-Jewish agoranomos (market controller) tasted from a cup and returned it to the jar – it is forbidden. (tAZ 7(8):6)",
                    hebrew_literal: "אם חרם השיט את ידו לכד, וחשב שלא שמן, והזה יין – מעשה היה וביקשו את החכמים. אמרו להם: שומרו לכ״ד. גוי שטעם מן הכוס והחזיר לכד – אסור. (תוספתא עבודה זרה 7(8):6)",
                    hebrew_natural: "אם שומר קרן הושיט את ידו לצנצנת בחשבון שזהו שמן, ובהתברר שזה היין - זה היה מקרה ממשי ולכן שאלו את החכמים, שענו: 'שכולן יימכרו לגויים'. אם גוי שומר שוק טעם מהגביע והחזיר אותו לצנצנת - היא אסורה. (תוספתא עבודה זרה 7(8):6)"
                },
                {
                    english: "This passage implies that it is enough for a non-Jew to touch the wine or to taste it for the wine to become a libation. Later, talmudic sources go further in this direction.",
                    hebrew_literal: "קטע זה מעיד שמספיק שגוי יגע ביין או יטעום אותו כדי שהיין הפוך למנוסך. בהמשך, מקורות תלמודיים מרחיקים את קו זה עוד יותר.",
                    hebrew_natural: "קטע זה מעיד שמספיק שגוי יגע ביין או יטעום אותו כדי שהיין הפוך למנוסך. בהמשך, מקורות תלמודיים מרחיקים את קו זה עוד יותר."
                }
            ]
        }
    ]
};

// Initialize the viewer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ArticleViewer(shashaArticle);
});
